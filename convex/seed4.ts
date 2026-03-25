import { mutation } from "./_generated/server";

// Correct saints for March 25–31 per the book
const MARCH_CORRECTIONS: Record<number, string> = {
  25: "Saint Lucy Filippini",
  26: "Saint Catherine of Genoa",
  27: "Servant of God Blandina Segale",
  28: "Saint Catherine of Bologna",
  29: "Saint Ludovico of Casoria",
  30: "Saint Joseph of Arimathea",
  31: "Saint Stephen of Mar Saba",
};

const TITLE_PREFIXES = [
  "Saint ",
  "Saints ",
  "Blessed ",
  "Venerable ",
  "Servant of God ",
  "Martyrs",
  "Ugandan",
];

function hasTitle(name: string): boolean {
  return TITLE_PREFIXES.some((p) => name.startsWith(p));
}

function withSaintPrefix(name: string): string {
  return hasTitle(name) ? name : `Saint ${name}`;
}

export const fixSaintsAndPrefixes = mutation({
  args: {},
  handler: async (ctx) => {
    const all = await ctx.db.query("saints").collect();

    let corrected = 0;
    let prefixed = 0;

    for (const saint of all) {
      let newName = saint.name;

      // Step 1: Apply March 25–31 corrections (by month + day)
      if (saint.month === 3 && MARCH_CORRECTIONS[saint.day]) {
        newName = MARCH_CORRECTIONS[saint.day];
        corrected++;
      } else {
        // Step 2: Add "Saint" prefix if name has no title
        const withPrefix = withSaintPrefix(newName);
        if (withPrefix !== newName) {
          newName = withPrefix;
          prefixed++;
        }
      }

      if (newName !== saint.name) {
        await ctx.db.patch(saint._id, { name: newName });
      }
    }

    return { corrected, prefixed, total: all.length };
  },
});
