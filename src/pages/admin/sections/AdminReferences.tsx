import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import type { Id } from "../../../../convex/_generated/dataModel";
import Modal from "../../../components/ui/Modal";

type RefForm = { title: string; url: string; description: string; site: string; category: string; sortOrder: number; };
const empty: RefForm = { title: "", url: "", description: "", site: "", category: "", sortOrder: 0 };

export default function AdminReferences({ token }: { token: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [editId, setEditId] = useState<Id<"references"> | null>(null);
  const [form, setForm] = useState<RefForm>(empty);

  const refs = useQuery(api.references.listAll);
  const createMutation = useMutation(api.references.create);
  const updateMutation = useMutation(api.references.update);
  const removeMutation = useMutation(api.references.remove);

  const openNew = () => { setForm(empty); setEditId(null); setIsOpen(true); };
  const openEdit = (r: NonNullable<typeof refs>[0]) => {
    setForm({ title: r.title, url: r.url, description: r.description || "", site: r.site, category: r.category || "", sortOrder: r.sortOrder });
    setEditId(r._id); setIsOpen(true);
  };

  const handleSave = async () => {
    try {
      const data = { ...form, description: form.description || undefined, category: form.category || undefined };
      if (editId) await updateMutation({ token, id: editId, ...data });
      else await createMutation({ token, ...data });
      setIsOpen(false);
    } catch (e) { alert("Error: " + (e as Error).message); }
  };

  const handleDelete = async (id: Id<"references">) => {
    if (!confirm("Delete?")) return;
    await removeMutation({ token, id });
  };

  const set = (k: keyof RefForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.type === "number" ? Number(e.target.value) : e.target.value }));

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">References ({refs?.length || 0})</h1>
        <button onClick={openNew} className="btn-primary">+ Add Reference</button>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
        <p className="text-sm text-amber-800 font-medium mb-2">Default references (always shown):</p>
        <ul className="text-sm text-amber-700 space-y-1">
          <li>• cccref.com — Catechism of the Catholic Church Reference</li>
          <li>• formed.org — Catholic audio, video & ebooks</li>
        </ul>
        <p className="text-xs text-amber-600 mt-2">These are built-in. Add additional references here to supplement them.</p>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-4 py-3 text-left">Title</th>
              <th className="px-4 py-3 text-left">Site</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {(refs || []).map((r) => (
              <tr key={r._id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{r.title}</td>
                <td className="px-4 py-3 text-gray-500">
                  <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{r.site}</a>
                </td>
                <td className="px-4 py-3 text-gray-400">{r.category}</td>
                <td className="px-4 py-3 text-right">
                  <button onClick={() => openEdit(r)} className="text-blue-600 hover:underline mr-3">Edit</button>
                  <button onClick={() => handleDelete(r._id)} className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
            {(refs || []).length === 0 && (
              <tr><td colSpan={4} className="px-4 py-8 text-center text-gray-400">No additional references yet</td></tr>
            )}
          </tbody>
        </table>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={editId ? "Edit Reference" : "Add Reference"}>
        <div className="space-y-3">
          {[
            { k: "title" as const, label: "Title", placeholder: "Vatican Official Website" },
            { k: "url" as const, label: "URL", placeholder: "https://www.vatican.va" },
            { k: "site" as const, label: "Site (domain)", placeholder: "vatican.va" },
            { k: "category" as const, label: "Category", placeholder: "Documents, Formation..." },
          ].map(({ k, label, placeholder }) => (
            <div key={k}>
              <label className="block text-xs font-medium mb-1">{label}</label>
              <input value={form[k]} onChange={set(k)} placeholder={placeholder}
                className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-catholic-burgundy" />
            </div>
          ))}
          <div>
            <label className="block text-xs font-medium mb-1">Description</label>
            <textarea value={form.description} onChange={set("description")} rows={3}
              className="w-full border rounded px-3 py-2 text-sm focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Sort Order</label>
            <input type="number" value={form.sortOrder} onChange={set("sortOrder")} className="w-full border rounded px-3 py-2 text-sm" />
          </div>
          <button onClick={handleSave} className="w-full btn-primary">Save Reference</button>
        </div>
      </Modal>
    </div>
  );
}
