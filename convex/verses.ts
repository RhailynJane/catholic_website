import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const listAll = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("verses")
      .filter((q) => q.eq(q.field("isActive"), true))
      .collect();
  },
});

export const listByCategory = query({
  args: { category: v.string() },
  handler: async (ctx, { category }) => {
    return await ctx.db
      .query("verses")
      .withIndex("by_category", (q) => q.eq("category", category))
      .filter((q) => q.eq(q.field("isActive"), true))
      .collect();
  },
});

export const create = mutation({
  args: {
    token: v.string(),
    book: v.string(),
    chapter: v.number(),
    verse: v.number(),
    verseEnd: v.optional(v.number()),
    text: v.string(),
    translation: v.string(),
    category: v.optional(v.string()),
    tags: v.array(v.string()),
  },
  handler: async (ctx, { token, ...data }) => {
    const config = await ctx.db
      .query("adminConfig")
      .withIndex("by_key", (q) => q.eq("key", "main"))
      .first();
    if (!config || config.sessionToken !== token) throw new Error("Unauthorized");

    return await ctx.db.insert("verses", { ...data, isActive: true });
  },
});

export const update = mutation({
  args: {
    token: v.string(),
    id: v.id("verses"),
    book: v.optional(v.string()),
    chapter: v.optional(v.number()),
    verse: v.optional(v.number()),
    verseEnd: v.optional(v.number()),
    text: v.optional(v.string()),
    translation: v.optional(v.string()),
    category: v.optional(v.string()),
    tags: v.optional(v.array(v.string())),
    isActive: v.optional(v.boolean()),
  },
  handler: async (ctx, { token, id, ...data }) => {
    const config = await ctx.db
      .query("adminConfig")
      .withIndex("by_key", (q) => q.eq("key", "main"))
      .first();
    if (!config || config.sessionToken !== token) throw new Error("Unauthorized");

    await ctx.db.patch(id, data);
  },
});

export const remove = mutation({
  args: { token: v.string(), id: v.id("verses") },
  handler: async (ctx, { token, id }) => {
    const config = await ctx.db
      .query("adminConfig")
      .withIndex("by_key", (q) => q.eq("key", "main"))
      .first();
    if (!config || config.sessionToken !== token) throw new Error("Unauthorized");

    await ctx.db.delete(id);
  },
});
