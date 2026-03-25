import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import type { Id } from "../../../../convex/_generated/dataModel";
import Modal from "../../../components/ui/Modal";
import { stripHtmlTags } from "../../../lib/utils";

type SaintForm = {
  name: string;
  dayOfYear: number;
  month: number;
  day: number;
  feastDate: string;
  shortBio: string;
  fullBio: string;
  bornYear: string;
  diedYear: string;
  patronOf: string;
  imageUrl: string;
  tags: string;
};

const empty: SaintForm = {
  name: "", dayOfYear: 1, month: 1, day: 1, feastDate: "",
  shortBio: "", fullBio: "", bornYear: "", diedYear: "", patronOf: "", imageUrl: "", tags: "",
};

export default function AdminSaints({ token }: { token: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [editId, setEditId] = useState<Id<"saints"> | null>(null);
  const [form, setForm] = useState<SaintForm>(empty);
  const [search, setSearch] = useState("");

  const saints = useQuery(api.saints.listAll);
  const createMutation = useMutation(api.saints.create);
  const updateMutation = useMutation(api.saints.update);
  const removeMutation = useMutation(api.saints.remove);

  const filtered = (saints || []).filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  const openNew = () => { setForm(empty); setEditId(null); setIsOpen(true); };
  const openEdit = (s: NonNullable<typeof saints>[0]) => {
    setForm({
      name: s.name, dayOfYear: s.dayOfYear, month: s.month, day: s.day,
      feastDate: s.feastDate, shortBio: stripHtmlTags(s.shortBio), fullBio: stripHtmlTags(s.fullBio),
      bornYear: s.bornYear || "", diedYear: s.diedYear || "",
      patronOf: s.patronOf || "", imageUrl: s.imageUrl || "",
      tags: s.tags.join(", "),
    });
    setEditId(s._id);
    setIsOpen(true);
  };

  const handleSave = async () => {
    const data = {
      ...form,
      tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
      bornYear: form.bornYear || undefined,
      diedYear: form.diedYear || undefined,
      patronOf: form.patronOf || undefined,
      imageUrl: form.imageUrl || undefined,
    };
    try {
      if (editId) {
        await updateMutation({ token, id: editId, ...data });
      } else {
        await createMutation({ token, ...data });
      }
      setIsOpen(false);
    } catch (e) {
      alert("Error: " + (e as Error).message);
    }
  };

  const handleDelete = async (id: Id<"saints">) => {
    if (!confirm("Delete this saint?")) return;
    await removeMutation({ token, id });
  };

  const set = (k: keyof SaintForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.type === "number" ? Number(e.target.value) : e.target.value }));

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Saints ({saints?.length || 0})</h1>
        <button onClick={openNew} className="btn-primary">+ Add Saint</button>
      </div>

      <input
        type="text" placeholder="Search saints..."
        value={search} onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none"
      />

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-gray-700">Name</th>
              <th className="px-4 py-3 text-left font-medium text-gray-700">Feast Date</th>
              <th className="px-4 py-3 text-left font-medium text-gray-700">Tags</th>
              <th className="px-4 py-3 text-right font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filtered.map((s) => (
              <tr key={s._id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{s.name}</td>
                <td className="px-4 py-3 text-gray-500">{s.feastDate}</td>
                <td className="px-4 py-3 text-gray-400 text-xs">{s.tags.join(", ")}</td>
                <td className="px-4 py-3 text-right">
                  <button onClick={() => openEdit(s)} className="text-blue-600 hover:underline mr-3">Edit</button>
                  <button onClick={() => handleDelete(s._id)} className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td colSpan={4} className="px-4 py-8 text-center text-gray-400">No saints found</td></tr>
            )}
          </tbody>
        </table>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={editId ? "Edit Saint" : "Add Saint"} maxWidth="max-w-2xl">
        <div className="space-y-3">
          {[
            { k: "name" as const, label: "Name", placeholder: "St. Francis of Assisi" },
            { k: "feastDate" as const, label: "Feast Date", placeholder: "October 4" },
            { k: "shortBio" as const, label: "Short Bio (1-3 sentences)", placeholder: "Brief biography..." },
            { k: "patronOf" as const, label: "Patron Of (optional)", placeholder: "Italy, animals..." },
            { k: "bornYear" as const, label: "Born Year (optional)", placeholder: "1181" },
            { k: "diedYear" as const, label: "Died Year (optional)", placeholder: "1226" },
            { k: "tags" as const, label: "Tags (comma-separated)", placeholder: "friar, stigmata, Italy" },
            { k: "imageUrl" as const, label: "Image URL (optional)", placeholder: "https://..." },
          ].map(({ k, label, placeholder }) => (
            <div key={k}>
              <label className="block text-xs font-medium text-gray-700 mb-1">{label}</label>
              <input type="text" value={form[k]} onChange={set(k)} placeholder={placeholder}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-catholic-burgundy" />
            </div>
          ))}
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Day of Year (1-365)</label>
              <input type="number" value={form.dayOfYear} onChange={set("dayOfYear")} min={1} max={365}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Month</label>
              <input type="number" value={form.month} onChange={set("month")} min={1} max={12}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Day</label>
              <input type="number" value={form.day} onChange={set("day")} min={1} max={31}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Full Biography</label>
            <textarea value={form.fullBio} onChange={set("fullBio")} rows={8} placeholder="Full biography of the saint..."
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-catholic-burgundy" />
          </div>
          <button onClick={handleSave} className="w-full btn-primary">Save Saint</button>
        </div>
      </Modal>
    </div>
  );
}
