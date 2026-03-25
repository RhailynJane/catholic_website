import { mutation } from "./_generated/server";
export const checkSaints5 = mutation({
  args: {},
  handler: async (ctx) => {
    const all = await ctx.db.query("saints").collect();
    const j23 = all.filter(s => s.name.toLowerCase().includes("john xxiii") || s.name.toLowerCase().includes("john 23") || s.name.toLowerCase().includes("roncalli"));
    const jp2 = all.filter(s => s.name.toLowerCase().includes("john paul")).map(s => `${s.month}/${s.day}: ${s.name}`);
    return { j23: j23.map(s=>s.name), jp2 };
  },
});
