import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { stripHtmlTags } from "../../../lib/utils";

type Section = "creed" | "sacraments" | "morals" | "prayer";

const tabs: { id: Section; label: string }[] = [
  { id: "creed", label: "The Creed" },
  { id: "sacraments", label: "Sacraments" },
  { id: "morals", label: "Morals" },
  { id: "prayer", label: "Prayer" },
];

export default function AdminEvangelium({ token }: { token: string }) {
  const [activeTab, setActiveTab] = useState<Section>("creed");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const data = useQuery(api.evangelium.getBySection, { section: activeTab });
  const upsertMutation = useMutation(api.evangelium.upsert);

  const handleTabChange = (tab: Section) => {
    setActiveTab(tab);
    setSaved(false);
  };

  const handleLoad = () => {
    if (data) {
      setTitle(data.title);
      setContent(stripHtmlTags(data.content));
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await upsertMutation({ token, section: activeTab, title, content });
      setSaved(true);
    } catch (e) {
      alert("Error saving: " + (e as Error).message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Evangelium Content</h1>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "bg-catholic-burgundy text-white"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow p-6 space-y-4">
        {data !== undefined && (
          <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
            <div className="text-sm text-gray-500">
              {data ? `Last updated: ${new Date(data.lastUpdated).toLocaleDateString()}` : "No content yet"}
            </div>
            <button
              onClick={handleLoad}
              disabled={!data}
              className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 disabled:opacity-50"
            >
              Load Current
            </button>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={`Title for ${activeTab}`}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-catholic-burgundy"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={20}
            placeholder="Enter the gospel reading here..."
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-catholic-burgundy"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleSave}
            disabled={saving || !title || !content}
            className="btn-primary"
          >
            {saving ? "Saving..." : "Save"}
          </button>
          {saved && <span className="text-green-600 text-sm">✓ Saved successfully!</span>}
        </div>
      </div>
    </div>
  );
}
