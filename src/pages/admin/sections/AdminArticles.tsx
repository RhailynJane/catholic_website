import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import type { Id } from "../../../../convex/_generated/dataModel";
import Modal from "../../../components/ui/Modal";
import { slugify, stripHtmlTags } from "../../../lib/utils";

type ArticleForm = {
  title: string; slug: string; category: string; content: string;
  summary: string; imageUrl: string; sortOrder: number;
};
const empty: ArticleForm = { title: "", slug: "", category: "", content: "", summary: "", imageUrl: "", sortOrder: 0 };

const PRESET_ARTICLES = [
  { slug: "bible", title: "The Bible", category: "Scripture" },
  { slug: "catechism", title: "Catechism of the Catholic Church", category: "Doctrine" },
  { slug: "sign-of-the-cross", title: "Sign of the Cross", category: "Sacramentals" },
  { slug: "kneeling", title: "Why Do Catholics Kneel?", category: "Liturgy" },
  { slug: "genuflection", title: "Why Do Catholics Genuflect?", category: "Liturgy" },
  { slug: "catholic-mass", title: "The Catholic Mass", category: "Liturgy" },
  { slug: "called-to-be-saints", title: "Called to be Saints", category: "Spirituality" },
  { slug: "christ-the-king-sunday", title: "Christ the King Sunday", category: "Liturgical Year" },
  { slug: "sanctuary-and-altar", title: "The Sanctuary & Altar", category: "Liturgy" },
  { slug: "advent-symbols", title: "Advent Symbols", category: "Liturgical Year" },
  { slug: "advent-season", title: "Advent Season", category: "Liturgical Year" },
  { slug: "gaudete-sunday", title: "Gaudete Sunday", category: "Liturgical Year" },
  { slug: "christmas-traditions", title: "Christmas Traditions", category: "Liturgical Year" },
  { slug: "liturgical-calendar", title: "The Liturgical Calendar", category: "Liturgical Year" },
  { slug: "lent", title: "Understanding Lent", category: "Liturgical Year" },
  { slug: "ash-wednesday", title: "Ash Wednesday", category: "Liturgical Year" },
  { slug: "lenten-symbols", title: "Lenten Symbols", category: "Liturgical Year" },
  { slug: "scrutinies", title: "Rite of Scrutinies and Exorcisms", category: "RCIA" },
  { slug: "pharisees", title: "The Pharisees", category: "Scripture" },
  { slug: "laetare-sunday", title: "Laetare Sunday", category: "Liturgical Year" },
  { slug: "holy-week-symbols", title: "Holy Week Symbols", category: "Liturgical Year" },
];

export default function AdminArticles({ token }: { token: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [editId, setEditId] = useState<Id<"articles"> | null>(null);
  const [form, setForm] = useState<ArticleForm>(empty);
  const [search, setSearch] = useState("");

  const articles = useQuery(api.articles.listAllAdmin);
  const createMutation = useMutation(api.articles.create);
  const updateMutation = useMutation(api.articles.update);
  const removeMutation = useMutation(api.articles.remove);

  const existingSlugs = new Set((articles || []).map((a) => a.slug));

  const openNew = (preset?: typeof PRESET_ARTICLES[0]) => {
    setForm(preset ? { ...empty, slug: preset.slug, title: preset.title, category: preset.category } : empty);
    setEditId(null);
    setIsOpen(true);
  };
  const openEdit = (a: NonNullable<typeof articles>[0]) => {
    setForm({ title: a.title, slug: a.slug, category: a.category || "", content: stripHtmlTags(a.content),
      summary: a.summary || "", imageUrl: a.imageUrl || "", sortOrder: a.sortOrder });
    setEditId(a._id); setIsOpen(true);
  };

  const handleSave = async () => {
    try {
      const data = { ...form, category: form.category || undefined, summary: form.summary || undefined, imageUrl: form.imageUrl || undefined };
      if (editId) await updateMutation({ token, id: editId, ...data });
      else await createMutation({ token, ...data });
      setIsOpen(false);
    } catch (e) { alert("Error: " + (e as Error).message); }
  };

  const handleDelete = async (id: Id<"articles">) => {
    if (!confirm("Delete?")) return;
    await removeMutation({ token, id });
  };

  const set = (k: keyof ArticleForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const val = e.target.type === "number" ? Number(e.target.value) : e.target.value;
    setForm((f) => {
      const updated = { ...f, [k]: val };
      if (k === "title" && !editId) updated.slug = slugify(String(val));
      return updated;
    });
  };

  const filtered = (articles || []).filter((a) =>
    !search || a.title.toLowerCase().includes(search.toLowerCase())
  );

  const missingPresets = PRESET_ARTICLES.filter((p) => !existingSlugs.has(p.slug));

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Articles ({articles?.length || 0})</h1>
        <button onClick={() => openNew()} className="btn-primary">+ Add Article</button>
      </div>

      {/* Preset quick-add */}
      {missingPresets.length > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
          <p className="text-sm font-medium text-amber-800 mb-3">Quick-add preset articles ({missingPresets.length} missing):</p>
          <div className="flex flex-wrap gap-2">
            {missingPresets.map((p) => (
              <button key={p.slug} onClick={() => openNew(p)}
                className="text-xs px-3 py-1.5 bg-white border border-amber-300 rounded-full text-amber-800 hover:bg-amber-100 transition-colors">
                + {p.title}
              </button>
            ))}
          </div>
        </div>
      )}

      <input type="text" placeholder="Search articles..." value={search} onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-accent-100 rounded px-3 py-2 mb-4 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100" />

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-accent-50 border-b">
            <tr>
              <th className="px-4 py-3 text-left">Title</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-left">Slug</th>
              <th className="px-4 py-3 text-left">Active</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filtered.map((a) => (
              <tr key={a._id} className="hover:bg-accent-50">
                <td className="px-4 py-3 font-medium">{a.title}</td>
                <td className="px-4 py-3 text-accent-400">{a.category}</td>
                <td className="px-4 py-3 text-accent-300 text-xs">{a.slug}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${a.isActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                    {a.isActive ? "Active" : "Hidden"}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <button onClick={() => updateMutation({ token, id: a._id, isActive: !a.isActive })}
                    className="text-gray-500 hover:underline mr-3 text-xs">{a.isActive ? "Hide" : "Show"}</button>
                  <button onClick={() => openEdit(a)} className="text-blue-600 hover:underline mr-3">Edit</button>
                  <button onClick={() => handleDelete(a._id)} className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td colSpan={5} className="px-4 py-8 text-center text-accent-300">No articles yet. Use the quick-add above!</td></tr>
            )}
          </tbody>
        </table>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={editId ? "Edit Article" : "Add Article"} maxWidth="max-w-3xl">
        <div className="space-y-3">
          {[
            { k: "title" as const, label: "Title", placeholder: "The Catholic Mass" },
            { k: "slug" as const, label: "Slug", placeholder: "catholic-mass" },
            { k: "category" as const, label: "Category", placeholder: "Liturgy, Scripture, Doctrine..." },
            { k: "summary" as const, label: "Summary (optional)", placeholder: "Brief description..." },
          ].map(({ k, label, placeholder }) => (
            <div key={k}>
              <label className="block text-xs font-medium mb-1">{label}</label>
              <input value={form[k]} onChange={set(k)} placeholder={placeholder}
                className="w-full border border-accent-100 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100" />
            </div>
          ))}
          <div>
            <label className="block text-xs font-medium mb-1">Content</label>
            <textarea value={form.content} onChange={set("content")} rows={16} placeholder="Write your article content here..."
              className="w-full border border-accent-100 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Sort Order</label>
            <input type="number" value={form.sortOrder} onChange={set("sortOrder")} className="w-full border rounded px-3 py-2 text-sm" />
          </div>
          <button onClick={handleSave} className="w-full btn-primary">Save Article</button>
        </div>
      </Modal>
    </div>
  );
}
