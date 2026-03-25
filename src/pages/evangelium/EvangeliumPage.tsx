import { useState, useMemo, useEffect } from "react";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import PageHeader from "../../components/ui/PageHeader";
import RichTextRenderer from "../../components/ui/RichTextRenderer";
import Spinner from "../../components/ui/Spinner";

type Section = "creed" | "sacraments" | "morals" | "prayer";

const tabs: { id: Section; label: string; description: string }[] = [
  { id: "creed", label: "The Creed", description: "What Catholics Believe" },
  { id: "sacraments", label: "Sacraments", description: "Signs of Grace" },
  { id: "morals", label: "Morals", description: "Life in Christ" },
  { id: "prayer", label: "Prayer", description: "Conversation with God" },
];

function extractTopics(html: string): string[] {
  const matches = html.match(/<h2[^>]*>(.*?)<\/h2>/gi) || [];
  return matches.map((m) => m.replace(/<[^>]+>/g, "").trim());
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function injectAnchors(html: string): string {
  return html.replace(/<h2([^>]*)>(.*?)<\/h2>/gi, (_, attrs, text) => {
    const id = slugify(text.replace(/<[^>]+>/g, ""));
    return `<h2${attrs} id="${id}">${text}</h2>`;
  });
}

export default function EvangeliumPage() {
  const [activeTab, setActiveTab] = useState<Section>("creed");
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const data = useQuery(api.evangelium.getBySection, { section: activeTab });

  const topics = useMemo(() => {
    if (!data?.content) return [];
    return extractTopics(data.content);
  }, [data]);

  const processedContent = useMemo(() => {
    if (!data?.content) return "";
    return injectAnchors(data.content);
  }, [data]);

  // Auto-scroll to content when tab changes
  useEffect(() => {
    const contentArea = document.querySelector(".evangelium-content");
    if (contentArea) {
      contentArea.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeTab]);

  function scrollToTopic(topic: string) {
    setActiveTopic(topic);
    const id = slugify(topic);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  function handleTabChange(tab: Section) {
    setActiveTab(tab);
    setActiveTopic(null);
    window.scrollTo({ top: 0 });
  }

  return (
    <div>
      <PageHeader
        title="Evangelium"
        subtitle="Creed · Sacraments · Morals · Prayer"
      />

      {/* Section Tabs */}
      <div className="border-b border-accent-100 bg-white sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-6 py-4 text-left shrink-0 border-b-2 transition-colors -mb-px ${
                  activeTab === tab.id
                    ? "border-primary-600 text-primary-600"
                    : "border-transparent text-accent-300 hover:text-accent-400"
                }`}
              >
                <span className={`block text-[10px] tracking-[0.3em] uppercase font-sans font-semibold ${
                  activeTab === tab.id ? "text-primary-600" : "text-accent-300"
                }`}>
                  {tab.label}
                </span>
                <span className="block text-[9px] font-sans text-accent-300 mt-0.5 hidden sm:block">
                  {tab.description}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 evangelium-content">
        {data === undefined ? (
          <Spinner />
        ) : (
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Sidebar: Table of Contents */}
            {topics.length > 0 && (
              <aside className="lg:col-span-3">
                <div className="sticky top-36 feature-card">
                  <p className="text-[9px] tracking-[0.45em] uppercase text-accent-300 font-sans mb-4">
                    In This Section
                  </p>
                  <nav className="space-y-2">
                    {topics.map((topic) => (
                      <button
                        key={topic}
                        onClick={() => scrollToTopic(topic)}
                        className={`block w-full text-left py-1.5 px-3 text-xs font-sans leading-snug rounded transition-all ${
                          activeTopic === topic
                            ? "bg-primary-100 text-primary-700"
                            : "text-accent-300 hover:text-accent-500 hover:bg-accent-50"
                        }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </nav>
                </div>
              </aside>
            )}

            {/* Main Content */}
            <div className={topics.length > 0 ? "lg:col-span-9" : "lg:col-span-12"}>
              <div className="feature-card">
                <h2 className="font-sans font-bold text-4xl text-accent-500 mb-8">
                  {data?.title}
                </h2>

                {/* Mobile topic list */}
                {topics.length > 0 && (
                  <div className="lg:hidden mb-8 pb-8 border-b border-accent-100">
                    <p className="text-[9px] tracking-[0.45em] uppercase text-accent-300 font-sans mb-3">
                      Topics
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {topics.map((topic) => (
                        <button
                          key={topic}
                          onClick={() => scrollToTopic(topic)}
                          className="text-[10px] bg-accent-100 hover:bg-accent-200 px-3 py-1.5 text-accent-500 transition-colors font-sans rounded"
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="prose-catholic">
                  <RichTextRenderer content={processedContent} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
