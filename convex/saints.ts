import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const listAll = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("saints")
      .filter((q) => q.eq(q.field("isActive"), true))
      .collect();
  },
});

export const getByDayOfYear = query({
  args: { dayOfYear: v.number() },
  handler: async (ctx, { dayOfYear }) => {
    return await ctx.db
      .query("saints")
      .withIndex("by_dayOfYear", (q) => q.eq("dayOfYear", dayOfYear))
      .filter((q) => q.eq(q.field("isActive"), true))
      .first();
  },
});

export const getById = query({
  args: { id: v.id("saints") },
  handler: async (ctx, { id }) => {
    return await ctx.db.get(id);
  },
});

export const create = mutation({
  args: {
    token: v.string(),
    name: v.string(),
    dayOfYear: v.number(),
    month: v.number(),
    day: v.number(),
    feastDate: v.string(),
    shortBio: v.string(),
    fullBio: v.string(),
    bornYear: v.optional(v.string()),
    diedYear: v.optional(v.string()),
    patronOf: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    tags: v.array(v.string()),
  },
  handler: async (ctx, { token, ...data }) => {
    const config = await ctx.db
      .query("adminConfig")
      .withIndex("by_key", (q) => q.eq("key", "main"))
      .first();
    if (!config || config.sessionToken !== token) throw new Error("Unauthorized");

    return await ctx.db.insert("saints", { ...data, isActive: true });
  },
});

export const update = mutation({
  args: {
    token: v.string(),
    id: v.id("saints"),
    name: v.optional(v.string()),
    dayOfYear: v.optional(v.number()),
    month: v.optional(v.number()),
    day: v.optional(v.number()),
    feastDate: v.optional(v.string()),
    shortBio: v.optional(v.string()),
    fullBio: v.optional(v.string()),
    bornYear: v.optional(v.string()),
    diedYear: v.optional(v.string()),
    patronOf: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
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
  args: { token: v.string(), id: v.id("saints") },
  handler: async (ctx, { token, id }) => {
    const config = await ctx.db
      .query("adminConfig")
      .withIndex("by_key", (q) => q.eq("key", "main"))
      .first();
    if (!config || config.sessionToken !== token) throw new Error("Unauthorized");

    await ctx.db.delete(id);
  },
});
