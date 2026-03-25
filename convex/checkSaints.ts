import { mutation } from "./_generated/server";

export const checkSaints = mutation({
  args: {},
  handler: async (ctx) => {
    const all = await ctx.db.query("saints").collect();
    const jan = all.filter(s => s.month === 1).map(s => s.name).sort();
    return { total: all.length, january: jan };
  },
});
