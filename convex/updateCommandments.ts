import { mutation } from "./_generated/server";

// Seed data with updated content
const ARTICLES = [
  {
    slug: "ten-commandments",
    title: "The Ten Commandments",
    category: "Commandments",
    sortOrder: 1,
    content: `<h2>The Ten Commandments</h2>
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
<blockquote>The Commandments are not a burden but a path to freedom and human dignity. - Catechism of the Catholic Church</blockquote>`,
  },
  {
    slug: "beatitudes",
    title: "The Beatitudes",
    category: "Beatitudes",
    sortOrder: 2,
    content: `<h2>The Beatitudes</h2>
<p>Proclaimed by Jesus in the Sermon on the Mount, the Beatitudes are the heart of His teaching. They reveal the face of Christ and describe authentic Christian discipleship.</p>
<div class="beatitudes-list">
<div class="beatitude-item"><strong>Blessed are the poor in spirit, for theirs is the kingdom of heaven.</strong><br/>Poverty of spirit means recognizing our total dependence on God. It is the opposite of pride and self-sufficiency.</div>
<div class="beatitude-item"><strong>Blessed are those who mourn, for they shall be comforted.</strong><br/>Those who grieve over sin and the world's suffering will be consoled by God's mercy.</div>
<div class="beatitude-item"><strong>Blessed are the meek, for they shall inherit the earth.</strong><br/>Meekness is strength under control, not weakness. The meek trust God rather than force.</div>
<div class="beatitude-item"><strong>Blessed are those who hunger and thirst for righteousness, for they shall be satisfied.</strong><br/>The desire for justice and holiness will be fulfilled in the Kingdom of God.</div>
<div class="beatitude-item"><strong>Blessed are the merciful, for they shall obtain mercy.</strong><br/>Showing mercy to others opens our hearts to receive God's own mercy.</div>
<div class="beatitude-item"><strong>Blessed are the pure in heart, for they shall see God.</strong><br/>Purity of heart means a single-minded focus on God, free from duplicity and sin.</div>
<div class="beatitude-item"><strong>Blessed are the peacemakers, for they shall be called sons of God.</strong><br/>Those who work for true peace share in God's own work.</div>
<div class="beatitude-item"><strong>Blessed are those who are persecuted for righteousness' sake, for theirs is the kingdom of heaven.</strong><br/>The willingness to suffer for truth and justice unites us to Christ who was persecuted.</div>
</div>
<blockquote>The Beatitudes respond to the natural desire for happiness. They teach us the final end to which God calls us. - CCC 1718</blockquote>`,
  },
];

export const updateTenCommandments = mutation({
  args: {},
  handler: async (ctx) => {
    const results = [];

    for (const article of ARTICLES) {
      const existing = await ctx.db
        .query("articles")
        .withIndex("by_slug", (q) => q.eq("slug", article.slug))
        .first();

      if (existing) {
        await ctx.db.patch(existing._id, {
          content: article.content,
          lastUpdated: new Date().toISOString(),
        });
        results.push({ slug: article.slug, action: "updated", id: existing._id });
      } else {
        const newId = await ctx.db.insert("articles", {
          slug: article.slug,
          title: article.title,
          category: article.category,
          content: article.content,
          sortOrder: article.sortOrder,
          isActive: true,
          lastUpdated: new Date().toISOString(),
        });
        results.push({ slug: article.slug, action: "created", id: newId });
      }
    }

    return { success: true, updates: results };
  },
});
