import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import type { Id } from "../../../../convex/_generated/dataModel";
import Modal from "../../../components/ui/Modal";
import { stripHtmlTags } from "../../../lib/utils";
import { slugify } from "../../../lib/utils";

type PrayerForm = {
  title: string; slug: string; category: string; text: string;
  latinText: string; origin: string; notes: string; sortOrder: number;
};
const empty: PrayerForm = { title: "", slug: "", category: "Daily", text: "", latinText: "", origin: "", notes: "", sortOrder: 0 };

export default function AdminPrayers({ token }: { token: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [editId, setEditId] = useState<Id<"prayers"> | null>(null);
  const [form, setForm] = useState<PrayerForm>(empty);

  const prayers = useQuery(api.prayers.listAll);
  const createMutation = useMutation(api.prayers.create);
  const updateMutation = useMutation(api.prayers.update);
  const removeMutation = useMutation(api.prayers.remove);

  const openNew = () => { setForm(empty); setEditId(null); setIsOpen(true); };
  const openEdit = (p: NonNullable<typeof prayers>[0]) => {
    setForm({ title: p.title, slug: p.slug, category: p.category, text: stripHtmlTags(p.text),
      latinText: stripHtmlTags(p.latinText || ""), origin: p.origin || "", notes: p.notes || "", sortOrder: p.sortOrder });
    setEditId(p._id); setIsOpen(true);
  };

  const handleSave = async () => {
    try {
      const data = { ...form, latinText: form.latinText || undefined, origin: form.origin || undefined, notes: form.notes || undefined };
      if (editId) await updateMutation({ token, id: editId, ...data });
      else await createMutation({ token, ...data });
      setIsOpen(false);
    } catch (e) { alert("Error: " + (e as Error).message); }
  };

  const handleDelete = async (id: Id<"prayers">) => {
    if (!confirm("Delete?")) return;
    await removeMutation({ token, id });
  };

  const set = (k: keyof PrayerForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const val = e.target.type === "number" ? Number(e.target.value) : e.target.value;
    setForm((f) => {
      const updated = { ...f, [k]: val };
      if (k === "title" && !editId) updated.slug = slugify(String(val));
      return updated;
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Prayers ({prayers?.length || 0})</h1>
        <button onClick={openNew} className="btn-primary">+ Add Prayer</button>
      </div>
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-accent-50 border-b">
            <tr>
              <th className="px-4 py-3 text-left">Title</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-left">Slug</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {(prayers || []).map((p) => (
              <tr key={p._id} className="hover:bg-accent-50">
                <td className="px-4 py-3 font-medium">{p.title}</td>
                <td className="px-4 py-3 text-gray-500">{p.category}</td>
                <td className="px-4 py-3 text-gray-400 text-xs">{p.slug}</td>
                <td className="px-4 py-3 text-right">
                  <button onClick={() => openEdit(p)} className="text-blue-600 hover:underline mr-3">Edit</button>
                  <button onClick={() => handleDelete(p._id)} className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
            {(prayers || []).length === 0 && (
              <tr><td colSpan={4} className="px-4 py-8 text-center text-gray-400">No prayers yet</td></tr>
            )}
          </tbody>
        </table>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={editId ? "Edit Prayer" : "Add Prayer"} maxWidth="max-w-2xl">
        <div className="space-y-3">
          {[
            { k: "title" as const, label: "Title", placeholder: "Our Father" },
            { k: "slug" as const, label: "Slug", placeholder: "our-father" },
            { k: "category" as const, label: "Category", placeholder: "Daily, Rosary, Liturgical..." },
            { k: "origin" as const, label: "Origin (optional)", placeholder: "Matthew 6:9-13" },
          ].map(({ k, label, placeholder }) => (
            <div key={k}>
              <label className="block text-xs font-medium mb-1">{label}</label>
              <input value={form[k]} onChange={set(k)} placeholder={placeholder}
                className="w-full border border-accent-100 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100" />
            </div>
          ))}
          <div>
            <label className="block text-xs font-medium mb-1">Prayer Text</label>
            <textarea value={form.text} onChange={set("text")} rows={8} placeholder="Write the prayer here..."
              className="w-full border border-accent-100 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Latin Text (optional)</label>
            <textarea value={form.latinText} onChange={set("latinText")} rows={3}
              className="w-full border rounded px-3 py-2 text-sm focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Notes (optional)</label>
            <textarea value={form.notes} onChange={set("notes")} rows={2}
              className="w-full border rounded px-3 py-2 text-sm focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Sort Order</label>
            <input type="number" value={form.sortOrder} onChange={set("sortOrder")} className="w-full border rounded px-3 py-2 text-sm" />
          </div>
          <button onClick={handleSave} className="w-full btn-primary">Save Prayer</button>
        </div>
      </Modal>
    </div>
  );
}
