import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const listAll = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("prayers")
      .withIndex("by_sortOrder")
      .filter((q) => q.eq(q.field("isActive"), true))
      .collect();
  },
});

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, { slug }) => {
    return await ctx.db
      .query("prayers")
      .withIndex("by_slug", (q) => q.eq("slug", slug))
      .first();
  },
});

export const listByCategory = query({
  args: { category: v.string() },
  handler: async (ctx, { category }) => {
    return await ctx.db
      .query("prayers")
      .withIndex("by_category", (q) => q.eq("category", category))
      .filter((q) => q.eq(q.field("isActive"), true))
      .collect();
  },
});

export const create = mutation({
  args: {
    token: v.string(),
    title: v.string(),
    slug: v.string(),
    category: v.string(),
    text: v.string(),
    latinText: v.optional(v.string()),
    origin: v.optional(v.string()),
    notes: v.optional(v.string()),
    sortOrder: v.number(),
  },
  handler: async (ctx, { token, ...data }) => {
    const config = await ctx.db
      .query("adminConfig")
      .withIndex("by_key", (q) => q.eq("key", "main"))
      .first();
    if (!config || config.sessionToken !== token) throw new Error("Unauthorized");

    return await ctx.db.insert("prayers", { ...data, isActive: true });
  },
});

export const update = mutation({
  args: {
    token: v.string(),
    id: v.id("prayers"),
    title: v.optional(v.string()),
    slug: v.optional(v.string()),
    category: v.optional(v.string()),
    text: v.optional(v.string()),
    latinText: v.optional(v.string()),
    origin: v.optional(v.string()),
    notes: v.optional(v.string()),
    sortOrder: v.optional(v.number()),
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
  args: { token: v.string(), id: v.id("prayers") },
  handler: async (ctx, { token, id }) => {
    const config = await ctx.db
      .query("adminConfig")
      .withIndex("by_key", (q) => q.eq("key", "main"))
      .first();
    if (!config || config.sessionToken !== token) throw new Error("Unauthorized");

    await ctx.db.delete(id);
  },
});
