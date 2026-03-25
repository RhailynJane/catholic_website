import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import RichTextRenderer from "../../components/ui/RichTextRenderer";
import PageHeader from "../../components/ui/PageHeader";
import Spinner from "../../components/ui/Spinner";

export default function FormulasPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const formulas = useQuery(api.formulas.listAll);

  const filtered = (formulas || []).filter((f) =>
    !search || f.title.toLowerCase().includes(search.toLowerCase()) ||
    (f.category || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <PageHeader
        title="Formulas of Doctrine"
        subtitle="Essential Statements of the Catholic Faith"
      />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <input
          type="text"
          placeholder="Search formulas..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-stone-200 px-4 py-2.5 text-sm font-sans focus:outline-none focus:border-stone-400 bg-white mb-10"
        />

        {formulas === undefined ? (
          <Spinner />
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-stone-400 font-sans text-sm">
            No formulas found.
          </div>
        ) : (
          <div className="divide-y divide-stone-100 border-t border-stone-100">
            {filtered.map((formula) => (
              <div key={formula._id}>
                <button
                  className="w-full flex items-center justify-between py-5 text-left hover:bg-catholic-cream/50 transition-colors px-1 group"
                  onClick={() => setOpenId(openId === formula._id ? null : formula._id)}
                >
                  <div>
                    {formula.category && (
                      <span className="text-[9px] tracking-[0.4em] uppercase text-stone-400 font-sans block mb-1">
                        {formula.category}
                      </span>
                    )}
                    <h3 className="font-serif text-xl text-stone-900 font-normal group-hover:text-stone-600 transition-colors">
                      {formula.title}
                    </h3>
                    {formula.source && (
                      <p className="text-[10px] text-stone-400 font-sans mt-0.5">Source: {formula.source}</p>
                    )}
                  </div>
                  <span className={`text-stone-400 transition-transform ml-6 shrink-0 ${openId === formula._id ? "rotate-180" : ""}`}>
                    ▾
                  </span>
                </button>
                {openId === formula._id && (
                  <div className="px-1 pb-6">
                    <div className="border-l-2 border-catholic-gold pl-6 prose-catholic">
                      <RichTextRenderer content={formula.content} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
