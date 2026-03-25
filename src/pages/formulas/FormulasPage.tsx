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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-12 px-4 sm:px-0">
          <div className="text-center mb-8">
            <p className="text-[10px] tracking-[0.45em] uppercase text-primary-600 font-sans mb-2 font-semibold">Search</p>
            <div className="w-12 h-1 bg-primary-600 mx-auto rounded"></div>
          </div>
          <input
            type="text"
            placeholder="Search formulas..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-accent-100 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-sans focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 bg-white rounded shadow-sm hover:shadow-md transition-shadow"
          />
        </div>

        {formulas === undefined ? (
          <Spinner />
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-accent-300 font-sans text-sm">
            No formulas found.
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map((formula) => (
              <div key={formula._id} className="feature-card group border-l-4 border-primary-100 hover:border-primary-600 hover:shadow-lg transition-all">
                <button
                  className="w-full flex items-center justify-between text-left transition-colors"
                  onClick={() => setOpenId(openId === formula._id ? null : formula._id)}
                >
                  <div className="flex-1">
                    {formula.category && (
                      <span className="text-[9px] tracking-[0.4em] uppercase text-primary-600 font-sans font-semibold block mb-2">
                        {formula.category}
                      </span>
                    )}
                    <h3 className="font-sans font-bold text-lg text-accent-500 group-hover:text-primary-600 transition-colors">
                      {formula.title}
                    </h3>
                    {formula.source && (
                      <p className="text-[10px] text-accent-300 font-sans mt-2">Source: {formula.source}</p>
                    )}
                  </div>
                  <span className={`text-accent-400 group-hover:text-primary-600 transition-all ml-6 shrink-0 text-xl duration-300 ${openId === formula._id ? "rotate-180" : ""}`}>
                    ▾
                  </span>
                </button>
                {openId === formula._id && (
                  <div className="mt-6 pt-6 border-t border-accent-50">
                    <div className="prose-catholic text-accent-500">
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
