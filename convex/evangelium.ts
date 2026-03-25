import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getBySection = query({
  args: {
    section: v.union(
      v.literal("creed"),
      v.literal("sacraments"),
      v.literal("morals"),
      v.literal("prayer")
    ),
  },
  handler: async (ctx, { section }) => {
    return await ctx.db
      .query("evangelium")
      .withIndex("by_section", (q) => q.eq("section", section))
      .first();
  },
});

export const upsert = mutation({
  args: {
    token: v.string(),
    section: v.union(
      v.literal("creed"),
      v.literal("sacraments"),
      v.literal("morals"),
      v.literal("prayer")
    ),
    title: v.string(),
    content: v.string(),
  },
  handler: async (ctx, { token, section, title, content }) => {
    const config = await ctx.db
      .query("adminConfig")
      .withIndex("by_key", (q) => q.eq("key", "main"))
      .first();
    if (!config || config.sessionToken !== token) throw new Error("Unauthorized");

    const existing = await ctx.db
      .query("evangelium")
      .withIndex("by_section", (q) => q.eq("section", section))
      .first();

    if (existing) {
      await ctx.db.patch(existing._id, {
        title,
        content,
        lastUpdated: new Date().toISOString(),
      });
    } else {
      await ctx.db.insert("evangelium", {
        section,
        title,
        content,
        lastUpdated: new Date().toISOString(),
      });
    }
  },
});
