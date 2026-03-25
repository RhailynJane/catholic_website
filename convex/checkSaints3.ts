import { mutation } from "./_generated/server";

export const checkSaints3 = mutation({
  args: {},
  handler: async (ctx) => {
    const all = await ctx.db.query("saints").collect();
    const dec = all.filter(s => s.month === 12).map(s => `${s.day}: ${s.name}`).sort();
    return { december: dec };
  },
});
