import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import PageHeader from "../../components/ui/PageHeader";
import RichTextRenderer from "../../components/ui/RichTextRenderer";
import Spinner from "../../components/ui/Spinner";

type Section = "creed" | "sacraments" | "morals" | "prayer";

const tabs: { id: Section; label: string }[] = [
  { id: "creed", label: "The Creed" },
  { id: "sacraments", label: "Sacraments" },
  { id: "morals", label: "Morals" },
  { id: "prayer", label: "Prayer" },
];

const defaultContent: Record<Section, { title: string; content: string }> = {
  creed: {
    title: "The Nicene Creed",
    content: `<p>I believe in one God, the Father almighty, maker of heaven and earth, of all things visible and invisible.</p>
<p>I believe in one Lord Jesus Christ, the Only Begotten Son of God, born of the Father before all ages. God from God, Light from Light, true God from true God, begotten, not made, consubstantial with the Father; through him all things were made.</p>
<p>For us men and for our salvation he came down from heaven, and by the Holy Spirit was incarnate of the Virgin Mary, and became man.</p>
<p>For our sake he was crucified under Pontius Pilate, he suffered death and was buried, and rose again on the third day in accordance with the Scriptures.</p>
<p>He ascended into heaven and is seated at the right hand of the Father. He will come again in glory to judge the living and the dead and his kingdom will have no end.</p>
<p>I believe in the Holy Spirit, the Lord, the giver of life, who proceeds from the Father and the Son, who with the Father and the Son is adored and glorified, who has spoken through the prophets.</p>
<p>I believe in one, holy, catholic and apostolic Church. I confess one Baptism for the forgiveness of sins and I look forward to the resurrection of the dead and the life of the world to come. Amen.</p>`,
  },
  sacraments: {
    title: "The Seven Sacraments",
    content: `<h2>The Seven Sacraments</h2>
<p>The Catholic Church recognizes seven sacraments instituted by Christ — efficacious signs of grace (CCC 1131):</p>
<ol>
<li><strong>Baptism</strong> — the sacrament of regeneration through water and the Spirit (John 3:5)</li>
<li><strong>Confirmation</strong> — strengthens baptismal grace and binds us more perfectly to the Church</li>
<li><strong>Eucharist</strong> — the source and summit of the Christian life (Lumen Gentium 11)</li>
<li><strong>Penance (Confession)</strong> — reconciliation with God and the Church after Baptism</li>
<li><strong>Anointing of the Sick</strong> — for the ill and dying, uniting their suffering with Christ</li>
<li><strong>Holy Orders</strong> — ordination of bishops, priests, and deacons</li>
<li><strong>Matrimony</strong> — the covenant of marriage between a man and a woman</li>
</ol>`,
  },
  morals: {
    title: "Life in Christ",
    content: `<h2>The Moral Life</h2>
<p>The moral life of Catholics is rooted in the love of God and neighbor (Matt 22:37-39).</p>
<h3>The Ten Commandments</h3>
<ol>
<li>I am the Lord your God; you shall not have false gods before me.</li>
<li>You shall not take the name of the Lord your God in vain.</li>
<li>Remember to keep holy the Lord's Day.</li>
<li>Honor your father and your mother.</li>
<li>You shall not kill.</li>
<li>You shall not commit adultery.</li>
<li>You shall not steal.</li>
<li>You shall not bear false witness against your neighbor.</li>
<li>You shall not covet your neighbor's wife.</li>
<li>You shall not covet your neighbor's goods.</li>
</ol>`,
  },
  prayer: {
    title: "Christian Prayer",
    content: `<h2>The Life of Prayer</h2>
<p>Prayer is the raising of one's mind and heart to God (CCC 2559). The Church recognizes five forms of prayer:</p>
<ol>
<li><strong>Blessing and Adoration</strong> — glorifying God</li>
<li><strong>Petition</strong> — asking God for what we need</li>
<li><strong>Intercession</strong> — praying for others</li>
<li><strong>Thanksgiving</strong> — expressing gratitude</li>
<li><strong>Praise</strong> — glorifying God for His own sake</li>
</ol>`,
  },
};

export default function EvangeliumPage() {
  const [activeTab, setActiveTab] = useState<Section>("creed");
  const data = useQuery(api.evangelium.getBySection, { section: activeTab });

  const content = data || defaultContent[activeTab];

  return (
    <div>
      <PageHeader
        title="Evangelium"
        subtitle="Creed, Sacraments, Morals, and Prayer"
      />

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Tab Navigation */}
        <div className="flex border-b border-stone-200 mb-10 gap-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-[10px] tracking-[0.3em] uppercase font-sans transition-colors border-b-2 -mb-px ${
                activeTab === tab.id
                  ? "border-stone-900 text-stone-900"
                  : "border-transparent text-stone-400 hover:text-stone-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {data === undefined ? (
          <Spinner />
        ) : (
          <div>
            <h2 className="font-serif text-4xl text-stone-900 font-light italic mb-2">{content.title}</h2>
            <div className="h-px w-12 bg-catholic-gold mb-8" />
            <div className="prose-catholic">
              <RichTextRenderer content={content.content} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
