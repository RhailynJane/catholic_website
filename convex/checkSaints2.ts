import { mutation } from "./_generated/server";

export const checkSaints2 = mutation({
  args: {},
  handler: async (ctx) => {
    const all = await ctx.db.query("saints").collect();
    const canisius = all.filter(s => s.name.toLowerCase().includes("canisius"));
    const kanty = all.filter(s => s.name.toLowerCase().includes("kanty"));
    const chair = all.filter(s => s.name.toLowerCase().includes("chair"));
    return { canisius: canisius.map(s=>s.name), kanty: kanty.map(s=>s.name), chair: chair.map(s=>s.name) };
  },
});
