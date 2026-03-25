import { mutation } from "./_generated/server";
export const checkSaints4 = mutation({
  args: {},
  handler: async (ctx) => {
    const all = await ctx.db.query("saints").collect();
    const john = all.filter(s => s.name.toLowerCase().includes("john") && s.month === 10).map(s => s.name);
    return { john };
  },
});
