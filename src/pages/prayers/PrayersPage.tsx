import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import PageHeader from "../../components/ui/PageHeader";
import Spinner from "../../components/ui/Spinner";

export default function PrayersPage() {
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const prayers = useQuery(api.prayers.listAll);

  const categories = useMemo(() => {
    if (!prayers) return [];
    return [...new Set(prayers.map((p) => p.category))].sort();
  }, [prayers]);

  const filtered = useMemo(() => {
    if (!prayers) return [];
    return prayers.filter((p) => {
      const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase());
      const matchCat = !filterCategory || p.category === filterCategory;
      return matchSearch && matchCat;
    });
  }, [prayers, search, filterCategory]);

  const grouped = useMemo(() => {
    const groups: Record<string, typeof filtered> = {};
    filtered.forEach((p) => {
      if (!groups[p.category]) groups[p.category] = [];
      groups[p.category].push(p);
    });
    return groups;
  }, [filtered]);

  return (
    <div>
      <PageHeader
        title="Catholic Prayers"
        subtitle="Traditional Prayers of the Church"
      />

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <input
            type="text"
            placeholder="Search prayers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border border-stone-200 px-4 py-2.5 text-sm font-sans focus:outline-none focus:border-stone-400 bg-white"
          />
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="border border-stone-200 px-4 py-2.5 text-sm font-sans focus:outline-none focus:border-stone-400 bg-white"
          >
            <option value="">All Categories</option>
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        {prayers === undefined ? (
          <Spinner />
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-stone-400 font-sans text-sm">
            No prayers found.
          </div>
        ) : (
          <div className="space-y-12">
            {Object.entries(grouped).map(([category, prayerList]) => (
              <div key={category}>
                <h2 className="text-[10px] tracking-[0.4em] uppercase text-stone-400 font-sans mb-4 pb-3 border-b border-stone-200">
                  {category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-stone-200">
                  {prayerList.map((prayer) => (
                    <Link
                      key={prayer._id}
                      to={`/prayers/${prayer.slug}`}
                      className="bg-white p-6 hover:bg-catholic-cream transition-colors group"
                    >
                      <h3 className="font-serif text-lg text-stone-900 font-normal group-hover:text-stone-600">
                        {prayer.title}
                      </h3>
                      {prayer.origin && (
                        <p className="text-[10px] text-stone-400 font-sans mt-1">{prayer.origin}</p>
                      )}
                      <p className="text-xs font-sans text-stone-500 mt-2 line-clamp-2 leading-relaxed">
                        {prayer.text.replace(/<[^>]*>/g, "").slice(0, 100)}…
                      </p>
                      <p className="mt-3 text-[10px] tracking-[0.3em] uppercase text-stone-400 group-hover:text-stone-700 transition-colors font-sans">
                        Read prayer
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
