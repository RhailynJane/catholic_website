import { ConvexClient } from "convex/browser";

const client = new ConvexClient(process.env.VITE_CONVEX_URL || "http://localhost:8000");

async function updateCommandments() {
  try {
    const result = await client.mutation(
      async (ctx) => {
        const article = await ctx.db
          .query("articles")
          .withIndex("by_slug", (q) => q.eq("slug", "ten-commandments"))
          .first();

        if (!article) {
          console.log("Article not found");
          return { error: "Article not found" };
        }

        const newContent = `<h2>The Ten Commandments</h2>
<p>Given by God to Moses on Mount Sinai, the Ten Commandments are the foundation of moral life. They express the fundamental duties toward God and neighbor.</p>
<div class="commandments-list">
<div class="commandment-item"><strong>I. I am the Lord your God: you shall not have strange gods before me.</strong><br/>We are to worship only the one true God, rejecting idolatry and false worship in all its forms.</div>
<div class="commandment-item"><strong>II. You shall not take the name of the Lord your God in vain.</strong><br/>The name of God is holy. We must not swear falsely or use His name disrespectfully.</div>
<div class="commandment-item"><strong>III. Remember to keep holy the Lord's Day.</strong><br/>Sunday, the day of the Lord's Resurrection, must be observed with rest, Mass, and works of charity.</div>
<div class="commandment-item"><strong>IV. Honor your father and your mother.</strong><br/>We must respect and care for our parents and legitimate authorities.</div>
<div class="commandment-item"><strong>V. You shall not kill.</strong><br/>Human life is sacred from conception to natural death. Unjust killing is gravely wrong.</div>
<div class="commandment-item"><strong>VI. You shall not commit adultery.</strong><br/>We must respect the gift of sexuality within the covenant of marriage.</div>
<div class="commandment-item"><strong>VII. You shall not steal.</strong><br/>We must respect the property of others and work for just distribution of goods.</div>
<div class="commandment-item"><strong>VIII. You shall not bear false witness against your neighbor.</strong><br/>We must speak the truth in all things and protect the good name of others.</div>
<div class="commandment-item"><strong>IX. You shall not covet your neighbor's wife.</strong><br/>We must guard purity of heart and mind, not desiring what belongs to another.</div>
<div class="commandment-item"><strong>X. You shall not covet your neighbor's goods.</strong><br/>We must not covet what belongs to another, but practice contentment and generosity.</div>
</div>
<blockquote>"The Commandments are not a burden but a path to freedom and human dignity." — Catechism of the Catholic Church</blockquote>`;

        await ctx.db.patch(article._id, {
          content: newContent,
        });

        return { success: true, id: article._id };
      }
    );
    console.log("Update result:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

updateCommandments();
