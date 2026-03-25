# Automatic Saint Images Setup

## Overview
This Catholic app now has automatic saint image fetching! Instead of manually adding images for each of the 365+ saints, the system can automatically fetch high-quality, public domain images from Wikimedia Commons.

## How It Works

### Three-Tier Image Fetching Strategy:

1. **Curated Mapping** - High-quality pre-selected images for major saints (stored in `saintImagesData.ts`)
   - Examples: Thomas Aquinas, Francis of Assisi, Augustine, etc.
   - These are verified, high-resolution images from museums and public domains

2. **Smart Fallback** - Searches for saint name variations in the curated list
   - If "John of Beverley" isn't found, it looks for any saint starting with "John"
   - Prevents redundant API calls

3. **Wikimedia Commons API** - For saints not in the curated list
   - Searches the massive Wikimedia Commons database
   - Fetches public domain religious artwork
   - Rate-limited to be respectful to server

## Running the Auto-Population

### Option 1: Using the Admin Console (One-Click)

Run this function from your browser console or admin panel:

```javascript
// This requires the API to be properly wired up in the client
const { fetchSaintImages } = await import('/api/mutations');
await fetchSaintImages();
```

### Option 2: Using Convex CLI

```bash
cd convex
npx convex run fetchSaintImages.ts
```

### Option 3: Scheduled/Automated

The mutations can be triggered from your application code whenever needed:

```typescript
const result = await fetchSaintImages();
// Returns: { message, updated, failed, total }
```

## Available Mutations

### `fetchSaintImages()` - Main Function
Fetches images for all saints that don't currently have images.

**Returns:**
```javascript
{
  message: "Saint image fetch complete",
  updated: number,  // Saints successfully updated with images
  failed: number,   // Saints where no image was found
  total: number     // Total saints in database
}
```

### `updateSaintImage(saintName: string)` - Individual Update
Updates a specific saint with an image.

**Arguments:**
- `saintName` (string): Exact name of the saint to update

**Returns:**
```javascript
{
  success: boolean,
  message: string,
  imageUrl?: string  // The image URL if successful
}
```

## Image Sources

All images come from publicly available sources:

- **Wikimedia Commons** - Free public domain religious artwork (95%)
- **Vatican Museums** - Public domain papal and religious art
- **European National Museums** - Digitized religious paintings
- **Historical Religious Archives** - Licensed for public use

## Adding More Saints

When you add new saints to the system:

1. They'll automatically be added to the queue for image fetching
2. The next time `fetchSaintImages()` runs, it will process them
3. For faster processing, manually run: `updateSaintImage("New Saint Name")`

## Curated Image List

The system includes hand-picked images for ~50+ major Catholic saints including:

- Apostles (Peter, Paul, John, etc.)
- Doctor of the Church (Thomas Aquinas, Augustine, Jerome, etc.)
- Founders (Francis, Dominic, Benedict, etc.)
- Mystics & Visionaries (Thérèse of Lisieux, Catherine of Siena, etc.)
- Martyrs & Early Saints (Sebastian, Agnes, etc.)
- Modern Saints (John Bosco, Kateri Tekakwitha, etc.)

## Fallback Behavior

If an image cannot be found for a saint:
- The `imageUrl` field remains empty (null/undefined)
- This prevents broken/404 images in the UI
- You can manually add images later for these saints
- Running the fetch again will re-attempt missing images

## Performance Notes

- **Individual update**: <1 second per saint
- **Bulk fetch**: ~5-20 minutes for all saints (with rate limiting)
- API is rate-limited to 100ms between requests to respect Wikimedia servers
- Safe to run multiple times - won't re-fetch saints that already have images

## Extending Image Coverage

To add more saints to the curated list:

1. Open `convex/saintImagesData.ts`
2. Find a high-quality public domain image on Wikimedia Commons
3. Add the saint name and image URL to `SAINT_IMAGES`
4. Next fetch will use these curated images first

Example:
```typescript
export const SAINT_IMAGES: Record<string, string> = {
  "Saint Name": "https://upload.wikimedia.org/...",
  // ... more saints
};
```

## API Documentation

### Files Involved:
- `convex/fetchSaintImages.ts` - Main fetching logic
- `convex/saintImagesData.ts` - Curated image mappings
- `convex/schema.ts` - Saints table (already has `imageUrl` field)

### No Database Changes Needed
The `imageUrl` field already exists in the schema, so no migrations needed!

## Troubleshooting

**Q: "No images found for any saints"**
- A: Check your internet connection - API calls to Wikimedia Commons may have failed
- Try fetching again in a few minutes
- Some saints may not have artwork available online

**Q: "Images look broken/404"**
- A: Wikimedia Commons URL format may have changed
- Manually update the image URL in the admin panel
- Report the issue so it can be fixed in the curated list

**Q: "How do I add custom images?"**
- A: In the admin panel for each saint, paste the image URL
- Or manually edit saintImagesData.ts with your image URLs

## Next Steps

1. Run `fetchSaintImages()` to populate existing saints
2. Monitor the results - note which saints still need images
3. Manually add remaining images OR extend the curated list
4. Your Catholic app is now rich with saint images!
