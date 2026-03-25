import { mutation } from "./_generated/server";

export const getAllSaints = mutation({
  args: {},
  handler: async (ctx) => {
    const all = await ctx.db.query("saints").collect();
    return all.map(s => `${s.month}/${s.day}: ${s.name}`).sort();
  },
});
