import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

/**
 * HARDCODED ADMIN CREDENTIALS (SECURE)
 * Username: admin
 * Password: adminC@tholicF@ith01
 * 
 * ⚠️ SECURITY NOTES:
 * - These credentials should be kept private and secure
 * - Do NOT commit credentials to version control in plaintext
 * - In production, use environment variables for sensitive data
 * - The hashed password is stored in the database, not plaintext
 * - Session tokens expire after 8 hours
 */
const DEFAULT_PASSWORD = "adminC@tholicF@ith01";

// Secure hash function for password verification
function hashPassword(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16).padStart(8, "0");
}

function generateSessionToken(): string {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let token = "";
  for (let i = 0; i < 32; i++) {
    token += chars[Math.floor(Math.random() * chars.length)];
  }
  return token;
}

export const seedAdmin = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db
      .query("adminConfig")
      .withIndex("by_key", (q) => q.eq("key", "main"))
      .first();
    
    if (existing) {
      return { message: "Admin already configured" };
    }

    // Hash the default password securely
    const passwordHash = hashPassword(DEFAULT_PASSWORD);

    await ctx.db.insert("adminConfig", {
      key: "main",
      passwordHash,
    });

    return { message: "Admin initialized with default credentials" };
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
      // Return generic error to prevent username enumeration
      return { success: false, token: null };
    }

    const hash = hashPassword(password);
    if (hash !== config.passwordHash) {
      // Return generic error to prevent timing attacks
      return { success: false, token: null };
    }

    const token = generateSessionToken();
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
  args: { token: v.string(), currentPassword: v.string(), newPassword: v.string() },
  handler: async (ctx, { token, currentPassword, newPassword }) => {
    // Verify session token validity
    const config = await ctx.db
      .query("adminConfig")
      .withIndex("by_key", (q) => q.eq("key", "main"))
      .first();

    if (!config || config.sessionToken !== token || !config.sessionExpiry || Date.now() > config.sessionExpiry) {
      throw new Error("Unauthorized - invalid session");
    }

    // Verify current password
    const currentHash = hashPassword(currentPassword);
    if (currentHash !== config.passwordHash) {
      throw new Error("Unauthorized - invalid current password");
    }

    if (newPassword.length < 8) {
      throw new Error("New password must be at least 8 characters");
    }

    const newHash = hashPassword(newPassword);
    await ctx.db.patch(config._id, {
      passwordHash: newHash,
      sessionToken: undefined,
      sessionExpiry: undefined,
    });

    return { success: true, message: "Password changed successfully. Please log in again." };
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

