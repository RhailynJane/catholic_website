import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const listAll = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("articles")
      .withIndex("by_sortOrder")
      .filter((q) => q.eq(q.field("isActive"), true))
      .collect();
  },
});

export const listAllAdmin = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("articles")
      .withIndex("by_sortOrder")
      .collect();
  },
});

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, { slug }) => {
    return await ctx.db
      .query("articles")
      .withIndex("by_slug", (q) => q.eq("slug", slug))
      .first();
  },
});

export const create = mutation({
  args: {
    token: v.string(),
    slug: v.string(),
    title: v.string(),
    category: v.optional(v.string()),
    content: v.string(),
    summary: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    sortOrder: v.number(),
  },
  handler: async (ctx, { token, ...data }) => {
    const config = await ctx.db
      .query("adminConfig")
      .withIndex("by_key", (q) => q.eq("key", "main"))
      .first();
    if (!config || config.sessionToken !== token) throw new Error("Unauthorized");

    return await ctx.db.insert("articles", {
      ...data,
      isActive: true,
      lastUpdated: new Date().toISOString(),
    });
  },
});

export const update = mutation({
  args: {
    token: v.string(),
    id: v.id("articles"),
    slug: v.optional(v.string()),
    title: v.optional(v.string()),
    category: v.optional(v.string()),
    content: v.optional(v.string()),
    summary: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    sortOrder: v.optional(v.number()),
    isActive: v.optional(v.boolean()),
  },
  handler: async (ctx, { token, id, ...data }) => {
    const config = await ctx.db
      .query("adminConfig")
      .withIndex("by_key", (q) => q.eq("key", "main"))
      .first();
    if (!config || config.sessionToken !== token) throw new Error("Unauthorized");

    await ctx.db.patch(id, {
      ...data,
      lastUpdated: new Date().toISOString(),
    });
  },
});

export const remove = mutation({
  args: { token: v.string(), id: v.id("articles") },
  handler: async (ctx, { token, id }) => {
    const config = await ctx.db
      .query("adminConfig")
      .withIndex("by_key", (q) => q.eq("key", "main"))
      .first();
    if (!config || config.sessionToken !== token) throw new Error("Unauthorized");

    await ctx.db.delete(id);
  },
});
