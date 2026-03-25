import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import type { Id } from "../../../../convex/_generated/dataModel";
import Modal from "../../../components/ui/Modal";

type VerseForm = {
  book: string; chapter: number; verse: number; verseEnd: number;
  text: string; translation: string; category: string; imageUrl: string; tags: string;
};

const empty: VerseForm = {
  book: "", chapter: 1, verse: 1, verseEnd: 0, text: "", translation: "RSVCE", category: "", imageUrl: "", tags: "",
};

export default function AdminVerses({ token }: { token: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [editId, setEditId] = useState<Id<"verses"> | null>(null);
  const [form, setForm] = useState<VerseForm>(empty);
  const [search, setSearch] = useState("");

  const verses = useQuery(api.verses.listAll);
  const createMutation = useMutation(api.verses.create);
  const updateMutation = useMutation(api.verses.update);
  const removeMutation = useMutation(api.verses.remove);

  const filtered = (verses || []).filter((v) =>
    !search || v.book.toLowerCase().includes(search.toLowerCase()) ||
    v.text.toLowerCase().includes(search.toLowerCase())
  );

  const openNew = () => { setForm(empty); setEditId(null); setIsOpen(true); };
  const openEdit = (v: NonNullable<typeof verses>[0]) => {
    setForm({
      book: v.book, chapter: v.chapter, verse: v.verse, verseEnd: v.verseEnd || 0,
      text: v.text, translation: v.translation, category: v.category || "", imageUrl: v.imageUrl || "", tags: v.tags.join(", "),
    });
    setEditId(v._id);
    setIsOpen(true);
  };

  const handleSave = async () => {
    try {
      const data = {
        ...form,
        verseEnd: form.verseEnd || undefined,
        category: form.category || undefined,
        imageUrl: form.imageUrl || undefined,
        tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
      };
      if (editId) await updateMutation({ token, id: editId, ...data });
      else await createMutation({ token, ...data });
      setIsOpen(false);
    } catch (e) { alert("Error: " + (e as Error).message); }
  };

  const handleDelete = async (id: Id<"verses">) => {
    if (!confirm("Delete?")) return;
    await removeMutation({ token, id });
  };

  const set = (k: keyof VerseForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.type === "number" ? Number(e.target.value) : e.target.value }));

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Bible Verses ({verses?.length || 0})</h1>
        <button onClick={openNew} className="btn-primary">+ Add Verse</button>
      </div>
      <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-accent-100 rounded px-3 py-2 mb-4 focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100" />
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-accent-50 border-b">
            <tr>
              <th className="px-4 py-3 text-left">Reference</th>
              <th className="px-4 py-3 text-left">Text (preview)</th>
              <th className="px-4 py-3 text-left">Translation</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filtered.map((v) => (
              <tr key={v._id} className="hover:bg-accent-50">
                <td className="px-4 py-3 font-medium whitespace-nowrap">{v.book} {v.chapter}:{v.verse}</td>
                <td className="px-4 py-3 text-accent-400 max-w-xs truncate">{v.text.slice(0, 80)}...</td>
                <td className="px-4 py-3 text-accent-300">{v.translation}</td>
                <td className="px-4 py-3 text-right">
                  <button onClick={() => openEdit(v)} className="text-blue-600 hover:underline mr-3">Edit</button>
                  <button onClick={() => handleDelete(v._id)} className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td colSpan={4} className="px-4 py-8 text-center text-accent-300">No verses yet</td></tr>
            )}
          </tbody>
        </table>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={editId ? "Edit Verse" : "Add Verse"}>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-xs font-medium mb-1">Book</label>
              <input value={form.book} onChange={set("book")} placeholder="John" className="w-full border rounded px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Chapter</label>
              <input type="number" value={form.chapter} onChange={set("chapter")} className="w-full border rounded px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Verse</label>
              <input type="number" value={form.verse} onChange={set("verse")} className="w-full border rounded px-3 py-2 text-sm" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Verse End (optional, for ranges)</label>
            <input type="number" value={form.verseEnd || ""} onChange={set("verseEnd")} className="w-full border rounded px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Text</label>
            <textarea value={form.text} onChange={set("text")} rows={4} className="w-full border rounded px-3 py-2 text-sm" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs font-medium mb-1">Translation</label>
              <select value={form.translation} onChange={set("translation")} className="w-full border rounded px-3 py-2 text-sm bg-white">
                {["RSVCE", "NRSV-CE", "NAB", "NABRE", "Douay-Rheims", "RSV-2CE"].map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Category</label>
              <input value={form.category} onChange={set("category")} placeholder="Lent, Easter..." className="w-full border rounded px-3 py-2 text-sm" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Image URL (optional)</label>
            <input value={form.imageUrl} onChange={set("imageUrl")} placeholder="https://example.com/image.jpg" className="w-full border rounded px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Tags (comma-separated)</label>
            <input value={form.tags} onChange={set("tags")} className="w-full border rounded px-3 py-2 text-sm" />
          </div>
          <button onClick={handleSave} className="w-full btn-primary">Save Verse</button>
        </div>
      </Modal>
    </div>
  );
}
