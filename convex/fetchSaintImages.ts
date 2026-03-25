import { mutation, action, query } from "./_generated/server";
import { v } from "convex/values";
import { api } from "./_generated/api";
import { SAINT_IMAGES } from "./saintImagesData";

/**
 * Fetch saint images from Wikimedia Commons API
 * Uses search to find public domain images of saints
 * Validates results to avoid generic/wrong images
 */
async function fetchWikimediaImage(saintName: string): Promise<string | null> {
  try {
    // Search Wikimedia Commons for saint images
    const searchQuery = encodeURIComponent(saintName);
    const response = await fetch(
      `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${searchQuery}&srcrop=name&srnamespace=6&srlimit=10&format=json&origin=*`
    );

    if (!response.ok) return null;

    const data = (await response.json()) as {
      query?: { search?: Array<{ title: string }> };
    };
    const results = data.query?.search || [];

    if (results.length === 0) return null;

    // Find first result that actually mentions the saint name (strict validation)
    let targetResult = null;
    for (const result of results) {
      const title = result.title.toLowerCase();
      const nameParts = saintName.toLowerCase().split(" ");
      // Check if at least 2+ words from saint name appear in the result
      const matchCount = nameParts.filter(part => title.includes(part)).length;
      if (matchCount >= 2 || (nameParts.length === 1 && title.includes(nameParts[0]))) {
        targetResult = result;
        break;
      }
    }

    if (!targetResult) return null; // No good match found

    const fileName = targetResult.title.replace("File:", "");
    
    // Fetch file info to get the actual image URL
    const fileResponse = await fetch(
      `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(
        fileName
      )}&prop=imageinfo&iiprop=url&format=json&origin=*`
    );

    if (!fileResponse.ok) return null;

    const fileData = (await fileResponse.json()) as {
      query?: { pages?: Record<string, { imageinfo?: Array<{ url: string }> }> };
    };
    const pages = fileData.query?.pages || {};
    const page = Object.values(pages)[0];
    const imageUrl = page?.imageinfo?.[0]?.url;

    return imageUrl || null;
  } catch (error) {
    console.error(`Error fetching Wikimedia image for ${saintName}:`, error);
    return null;
  }
}

/**
 * Fetch saint images from Pixabay API
 * Returns the image URL (not hotlinked - will be downloaded separately)
 */
async function findPixabayImage(saintName: string): Promise<string | null> {
  try {
    // Access environment variable - cast globalThis to allow process access
    const proc = (globalThis as unknown as { process?: { env?: Record<string, string | undefined> } }).process || ({} as { env: Record<string, string | undefined> });
    const apiKey = proc?.env?.PIXABAY_API_KEY;
    if (!apiKey) {
      console.warn("[PIXABAY] API key not configured, skipping Pixabay");
      return null;
    }
    const searchQuery = encodeURIComponent(saintName);
    console.log(`[PIXABAY] Searching for: ${saintName}`);
    
    const response = await fetch(
      `https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}+saint&image_type=photo&safesearch=true&category=people&per_page=3`
    );

    if (!response.ok) {
      console.error(`[PIXABAY] API error: HTTP ${response.status}`);
      return null;
    }

    const data = (await response.json()) as {
      hits?: Array<{ largeImageURL?: string; webformatURL?: string }>;
      total?: number;
    };
    const hits = data.hits || [];

    console.log(`[PIXABAY] Found ${hits.length} results out of ${data.total || 0} total for ${saintName}`);

    if (hits.length === 0) return null;

    // Prefer largeImageURL, fall back to webformatURL
    const imageUrl = hits[0].largeImageURL || hits[0].webformatURL;
    console.log(`[PIXABAY] Selected image: ${imageUrl?.substring(0, 50)}...`);
    return imageUrl || null;
  } catch (error) {
    console.error(`[PIXABAY] Error searching for ${saintName}:`, error);
    return null;
  }
}

/**
 * Type for Convex storage API
 */
type ConvexStorage = {
  store(blob: Blob): Promise<string>;
};

/**
 * Download image from URL and store to Convex File Storage
 * Only use in actions (requires ctx.storage)
 */
async function downloadAndStoreImage(
  imageUrl: string,
  saintName: string,
  storage: ConvexStorage
): Promise<string | null> {
  try {
    console.log(`[PIXABAY] Downloading image for ${saintName} from ${imageUrl.substring(0, 50)}...`);
    
    // Download the image
    const response = await fetch(imageUrl);
    if (!response.ok) {
      console.error(`[PIXABAY] Failed to download: HTTP ${response.status}`);
      return null;
    }

    const buffer = await response.arrayBuffer();
    console.log(`[PIXABAY] Downloaded ${buffer.byteLength} bytes for ${saintName}`);
    
    // Determine content type from response
    const contentType = response.headers.get("content-type") || "image/jpeg";

    // Store to Convex File Storage
    const storageId = await storage.store(new Blob([buffer], { type: contentType }));
    console.log(`[PIXABAY] Stored ${saintName} with ID: ${storageId}`);
    return storageId;
  } catch (error) {
    console.error(`[PIXABAY] Error downloading/storing image for ${saintName}:`, error);
    return null;
  }
}

/**
 * Smart image finder with fallback strategy:
 * Logs which source provides the image for debugging
 */
async function findImageUrl(saintName: string): Promise<{ url: string; source: "curated" | "wikimedia" | "pixabay" } | null> {
  // Check if we have a curated image for this exact name
  if (SAINT_IMAGES[saintName]) {
    console.log(`[IMAGE] Curated image found for ${saintName}`);
    return { url: SAINT_IMAGES[saintName], source: "curated" };
  }

  // Try common variations: remove "Saint " prefix and check again
  const withoutSaintPrefix = saintName.replace(/^Saint\s+/, "").trim();
  if (withoutSaintPrefix !== saintName && SAINT_IMAGES[withoutSaintPrefix]) {
    console.log(`[IMAGE] Curated image found for ${saintName} (as ${withoutSaintPrefix})`);
    return { url: SAINT_IMAGES[withoutSaintPrefix], source: "curated" };
  }

  // Try to fetch from Wikimedia Commons API
  console.log(`[IMAGE] Trying Wikimedia Commons for ${saintName}`);
  const wikimediaImage = await fetchWikimediaImage(saintName);
  if (wikimediaImage) {
    console.log(`[IMAGE] Wikimedia image found for ${saintName}`);
    return { url: wikimediaImage, source: "wikimedia" };
  }

  // Try Pixabay search (will be downloaded if selected)
  console.log(`[IMAGE] Trying Pixabay for ${saintName}`);
  const pixabayUrl = await findPixabayImage(saintName);
  if (pixabayUrl) {
    console.log(`[IMAGE] Pixabay image found for ${saintName}`);
    return { url: pixabayUrl, source: "pixabay" };
  }

  console.log(`[IMAGE] No image found for ${saintName}`);
  return null;
}

/**
 * Query to get all saints without images
 * Used by the batch fetch action
 */
export const getSaintsWithoutImages = query({
  args: {},
  handler: async (ctx) => {
    const saints = await ctx.db.query("saints").collect();
    // Filter out saints that have imageUrl (including empty strings)
    return saints.filter((s) => !s.imageUrl || s.imageUrl.trim() === "");
  },
});

/**
 * Query to get a saint by name
 */
export const getSaintByName = query({
  args: { saintName: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("saints")
      .filter((q) => q.eq(q.field("name"), args.saintName))
      .first();
  },
});

/**
 * Query to get image URL from storage ID
 * Converts internal storage IDs to accessible URLs
 */
export const getImageUrl = query({
  args: { storageId: v.string() },
  handler: async (ctx, args): Promise<string | null> => {
    try {
      return await ctx.storage.getUrl(args.storageId as unknown as string) as string | null;
    } catch {
      return null;
    }
  },
});

/**
 * Mutation to patch saint with image URL
 */
export const patchSaintImage = mutation({
  args: { saintId: v.id("saints"), imageUrl: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.saintId, { imageUrl: args.imageUrl });
  },
});

/**
 * Main action to update saints with images from Wikimedia Commons
 * Safely updates saints that don't already have images
 * Uses action (not mutation) to support rate limiting with setTimeout
 */
export const fetchSaintImages = action({
  args: {},
  handler: async (ctx): Promise<{
    message: string;
    updated: number;
    failed: number;
    total: number;
  }> => {
    const saints = (await ctx.runQuery(api.fetchSaintImages.getSaintsWithoutImages)) as Array<{ name: string }>;
    let updated = 0;
    let failed = 0;

    for (const saint of saints) {
      console.log(`Fetching image for ${saint.name}...`);

      const result = await ctx.runAction(api.fetchSaintImages.updateSaintImage, {
        saintName: saint.name,
      });

      if (result.success) {
        updated++;
        console.log(`✓ ${result.message}`);
      } else {
        failed++;
        console.log(`✗ ${result.message}`);
      }

      // Rate limiting - be kind to the APIs
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    return {
      message: "Saint image fetch complete",
      updated,
      failed,
      total: saints.length,
    };
  },
});

/**
 * Action to fetch image and update saint
 * Must be an action (not mutation) to support fetch() calls and file storage
 */
export const updateSaintImage = action({
  args: { saintName: v.string() },
  handler: async (ctx, args): Promise<{ success: boolean; message: string; imageUrl?: string }> => {
    console.log(`[ACTION] updateSaintImage started for: ${args.saintName}`);
    
    const saint = await ctx.runQuery(api.fetchSaintImages.getSaintByName, {
      saintName: args.saintName,
    });

    if (!saint) {
      console.log(`[ACTION] Saint not found: ${args.saintName}`);
      return { success: false, message: "Saint not found" };
    }

    if (saint.imageUrl) {
      console.log(`[ACTION] Saint already has image: ${args.saintName}`);
      return { success: false, message: "Saint already has an image" };
    }

    const imageResult = await findImageUrl(saint.name);

    if (!imageResult) {
      console.log(`[ACTION] No image found: ${args.saintName}`);
      return { success: false, message: "No image found for this saint" };
    }

    console.log(`[ACTION] Found ${imageResult.source} image for ${args.saintName}`);
    let finalImageUrl = imageResult.url;

    // If it's from Pixabay, download and store to Convex File Storage
    if (imageResult.source === "pixabay") {
      console.log(`[ACTION] Downloading Pixabay image for ${args.saintName}`);
      const storageId = await downloadAndStoreImage(imageResult.url, saint.name, ctx.storage);
      if (!storageId) {
        console.log(`[ACTION] Failed to download/store Pixabay image: ${args.saintName}`);
        return { success: false, message: "Failed to download/store Pixabay image" };
      }
      finalImageUrl = storageId;
      console.log(`[ACTION] Pixabay image stored with ID: ${storageId}`);
    }

    console.log(`[ACTION] Patching saint ${args.saintName} with: ${finalImageUrl.substring(0, 50)}...`);
    if (saint) {
      await ctx.runMutation(api.fetchSaintImages.patchSaintImage, {
        saintId: saint._id,
        imageUrl: finalImageUrl,
      });
    }

    return { success: true, message: `Updated ${saint.name}`, imageUrl: finalImageUrl };
  },
});

/**
 * Mutation to clear all saint images (for resetting/debugging)
 */
export const clearAllImages = mutation({
  args: {},
  handler: async (ctx) => {
    const saints = await ctx.db.query("saints").collect();
    let cleared = 0;
    for (const saint of saints) {
      if (saint.imageUrl) {
        await ctx.db.patch(saint._id, { imageUrl: "" });
        cleared++;
      }
    }
    console.log(`[RESET] Cleared ${cleared} saint images`);
    return { cleared, total: saints.length, message: `Cleared ${cleared} images. Run fetchSaintImages again.` };
  },
});

/**
 * Diagnostic query to analyze image sources for all saints
 * Shows: which saints have images, which source, which are missing
 */
export const diagnoseSaintImages = query({
  args: {},
  handler: async (ctx) => {
    const saints = await ctx.db.query("saints").collect();
    
    const analysis = {
      total: saints.length,
      withImages: 0,
      withoutImages: 0,
      curated: 0,
      wikimedia: 0,
      pixabay: 0,
      unknown: 0,
      details: [] as Array<{
        name: string;
        hasImage: boolean;
        imageUrl?: string;
        estimatedSource?: string;
      }>,
    };

    for (const saint of saints) {
      const detail: typeof analysis.details[0] = {
        name: saint.name,
        hasImage: !!saint.imageUrl,
        imageUrl: saint.imageUrl,
      };

      if (saint.imageUrl) {
        analysis.withImages++;
        
        // Estimate source based on URL format
        if (saint.imageUrl in SAINT_IMAGES) {
          detail.estimatedSource = "curated";
          analysis.curated++;
        } else if (saint.imageUrl.includes("commons.wikimedia.org")) {
          detail.estimatedSource = "wikimedia";
          analysis.wikimedia++;
        } else if (saint.imageUrl.length < 50) {
          // Storage IDs are short hashes
          detail.estimatedSource = "pixabay (stored)";
          analysis.pixabay++;
        } else {
          detail.estimatedSource = "unknown";
          analysis.unknown++;
        }
      } else {
        analysis.withoutImages++;
      }

      analysis.details.push(detail);
    }

    return analysis;
  },
});
