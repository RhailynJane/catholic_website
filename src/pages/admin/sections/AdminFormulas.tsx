import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import type { Id } from "../../../../convex/_generated/dataModel";
import Modal from "../../../components/ui/Modal";
import { stripHtmlTags } from "../../../lib/utils";
import { slugify } from "../../../lib/utils";

type FormulaForm = { title: string; slug: string; content: string; source: string; category: string; sortOrder: number; };
const empty: FormulaForm = { title: "", slug: "", content: "", source: "", category: "", sortOrder: 0 };

export default function AdminFormulas({ token }: { token: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [editId, setEditId] = useState<Id<"formulas"> | null>(null);
  const [form, setForm] = useState<FormulaForm>(empty);

  const formulas = useQuery(api.formulas.listAll);
  const createMutation = useMutation(api.formulas.create);
  const updateMutation = useMutation(api.formulas.update);
  const removeMutation = useMutation(api.formulas.remove);

  const openNew = () => { setForm(empty); setEditId(null); setIsOpen(true); };
  const openEdit = (f: NonNullable<typeof formulas>[0]) => {
    setForm({ title: f.title, slug: f.slug, content: stripHtmlTags(f.content), source: f.source || "", category: f.category || "", sortOrder: f.sortOrder });
    setEditId(f._id); setIsOpen(true);
  };

  const handleSave = async () => {
    try {
      const data = { ...form, source: form.source || undefined, category: form.category || undefined };
      if (editId) await updateMutation({ token, id: editId, ...data });
      else await createMutation({ token, ...data });
      setIsOpen(false);
    } catch (e) { alert("Error: " + (e as Error).message); }
  };

  const handleDelete = async (id: Id<"formulas">) => {
    if (!confirm("Delete?")) return;
    await removeMutation({ token, id });
  };

  const set = (k: keyof FormulaForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const val = e.target.type === "number" ? Number(e.target.value) : e.target.value;
    setForm((f) => { const u = { ...f, [k]: val }; if (k === "title" && !editId) u.slug = slugify(String(val)); return u; });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Formulas ({formulas?.length || 0})</h1>
        <button onClick={openNew} className="btn-primary">+ Add Formula</button>
      </div>
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-accent-50 border-b">
            <tr>
              <th className="px-4 py-3 text-left">Title</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-left">Source</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {(formulas || []).map((f) => (
              <tr key={f._id} className="hover:bg-accent-50">
                <td className="px-4 py-3 font-medium">{f.title}</td>
                <td className="px-4 py-3 text-gray-500">{f.category}</td>
                <td className="px-4 py-3 text-gray-400 text-xs">{f.source}</td>
                <td className="px-4 py-3 text-right">
                  <button onClick={() => openEdit(f)} className="text-blue-600 hover:underline mr-3">Edit</button>
                  <button onClick={() => handleDelete(f._id)} className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
            {(formulas || []).length === 0 && (
              <tr><td colSpan={4} className="px-4 py-8 text-center text-gray-400">No formulas yet</td></tr>
            )}
          </tbody>
        </table>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={editId ? "Edit Formula" : "Add Formula"} maxWidth="max-w-2xl">
        <div className="space-y-3">
          {[
            { k: "title" as const, label: "Title", placeholder: "The Nicene Creed" },
            { k: "slug" as const, label: "Slug", placeholder: "nicene-creed" },
            { k: "category" as const, label: "Category", placeholder: "Creed, Sacraments..." },
            { k: "source" as const, label: "Source", placeholder: "Council of Nicaea, CCC 185..." },
          ].map(({ k, label, placeholder }) => (
            <div key={k}>
              <label className="block text-xs font-medium mb-1">{label}</label>
              <input value={form[k]} onChange={set(k)} placeholder={placeholder}
                className="w-full border border-accent-100 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100" />
            </div>
          ))}
          <div>
            <label className="block text-xs font-medium mb-1">Content</label>
            <textarea value={form.content} onChange={set("content")} rows={10} placeholder="Write the formula here..."
              className="w-full border border-accent-100 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Sort Order</label>
            <input type="number" value={form.sortOrder} onChange={set("sortOrder")} className="w-full border rounded px-3 py-2 text-sm" />
          </div>
          <button onClick={handleSave} className="w-full btn-primary">Save Formula</button>
        </div>
      </Modal>
    </div>
  );
}
