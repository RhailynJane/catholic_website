import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  adminConfig: defineTable({
    key: v.string(),
    passwordHash: v.string(),
    sessionToken: v.optional(v.string()),
    sessionExpiry: v.optional(v.number()),
  }).index("by_key", ["key"]),

  saints: defineTable({
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
    isActive: v.boolean(),
  })
    .index("by_dayOfYear", ["dayOfYear"])
    .index("by_month_day", ["month", "day"]),

  verses: defineTable({
    book: v.string(),
    chapter: v.number(),
    verse: v.number(),
    verseEnd: v.optional(v.number()),
    text: v.string(),
    translation: v.string(),
    category: v.optional(v.string()),
    tags: v.array(v.string()),
    isActive: v.boolean(),
  })
    .index("by_book_chapter", ["book", "chapter"])
    .index("by_category", ["category"]),

  prayers: defineTable({
    title: v.string(),
    slug: v.string(),
    category: v.string(),
    text: v.string(),
    latinText: v.optional(v.string()),
    origin: v.optional(v.string()),
    notes: v.optional(v.string()),
    sortOrder: v.number(),
    isActive: v.boolean(),
  })
    .index("by_slug", ["slug"])
    .index("by_category", ["category"])
    .index("by_sortOrder", ["sortOrder"]),

  evangelium: defineTable({
    section: v.union(
      v.literal("creed"),
      v.literal("sacraments"),
      v.literal("morals"),
      v.literal("prayer")
    ),
    title: v.string(),
    content: v.string(),
    lastUpdated: v.string(),
  }).index("by_section", ["section"]),

  articles: defineTable({
    slug: v.string(),
    title: v.string(),
    category: v.optional(v.string()),
    content: v.string(),
    summary: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    sortOrder: v.number(),
    isActive: v.boolean(),
    lastUpdated: v.string(),
  })
    .index("by_slug", ["slug"])
    .index("by_category", ["category"])
    .index("by_sortOrder", ["sortOrder"]),

  formulas: defineTable({
    title: v.string(),
    slug: v.string(),
    content: v.string(),
    source: v.optional(v.string()),
    category: v.optional(v.string()),
    sortOrder: v.number(),
    isActive: v.boolean(),
  })
    .index("by_slug", ["slug"])
    .index("by_sortOrder", ["sortOrder"]),

  references: defineTable({
    title: v.string(),
    url: v.string(),
    description: v.optional(v.string()),
    site: v.string(),
    category: v.optional(v.string()),
    sortOrder: v.number(),
    isActive: v.boolean(),
  })
    .index("by_site", ["site"])
    .index("by_sortOrder", ["sortOrder"]),
});
