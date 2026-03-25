import { mutation, query } from "./_generated/server";
import { v } from "convex/values";


// Simple hash function using Web Crypto API equivalent
function simpleHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16).padStart(8, "0");
}

function generateToken(): string {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let token = "";
  for (let i = 0; i < 32; i++) {
    token += chars[Math.floor(Math.random() * chars.length)];
  }
  return token;
}

export const seedAdmin = mutation({
  args: { password: v.string() },
  handler: async (ctx, { password }) => {
    const existing = await ctx.db
      .query("adminConfig")
      .withIndex("by_key", (q) => q.eq("key", "main"))
      .first();
    if (existing) {
      return { message: "Admin already configured" };
    }
    const hash = simpleHash(password);
    await ctx.db.insert("adminConfig", {
      key: "main",
      passwordHash: hash,
    });
    return { message: "Admin seeded successfully" };
  },
});

export const login = mutation({
  args: { password: v.string() },
  handler: async (ctx, { password }) => {
    const config = await ctx.db
      .query("adminConfig")
      .withIndex("by_key", (q) => q.eq("key", "main"))
      .first();

    if (!config) {
      return { success: false, token: null };
    }

    const hash = simpleHash(password);
    if (hash !== config.passwordHash) {
      return { success: false, token: null };
    }

    const token = generateToken();
    const expiry = Date.now() + 8 * 60 * 60 * 1000; // 8 hours

    await ctx.db.patch(config._id, {
      sessionToken: token,
      sessionExpiry: expiry,
    });

    return { success: true, token };
  },
});

export const verifyToken = query({
  args: { token: v.string() },
  handler: async (ctx, { token }) => {
    const config = await ctx.db
      .query("adminConfig")
      .withIndex("by_key", (q) => q.eq("key", "main"))
      .first();

    if (!config || !config.sessionToken || !config.sessionExpiry) {
      return false;
    }

    if (config.sessionToken !== token) return false;
    if (Date.now() > config.sessionExpiry) return false;

    return true;
  },
});

export const changePassword = mutation({
  args: { token: v.string(), newPassword: v.string() },
  handler: async (ctx, { token, newPassword }) => {
    const config = await ctx.db
      .query("adminConfig")
      .withIndex("by_key", (q) => q.eq("key", "main"))
      .first();

    if (!config || config.sessionToken !== token) {
      throw new Error("Unauthorized");
    }

    const hash = simpleHash(newPassword);
    await ctx.db.patch(config._id, {
      passwordHash: hash,
      sessionToken: undefined,
      sessionExpiry: undefined,
    });

    return { success: true };
  },
});

export const isConfigured = query({
  args: {},
  handler: async (ctx) => {
    const config = await ctx.db
      .query("adminConfig")
      .withIndex("by_key", (q) => q.eq("key", "main"))
      .first();
    return !!config;
  },
});
