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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Filters */}
        <div className="mb-12 px-4 sm:px-0">
          <div className="text-center mb-8">
            <p className="text-[10px] tracking-[0.45em] uppercase text-primary-600 font-sans mb-2 font-semibold">Search & Filter</p>
            <div className="w-12 h-1 bg-primary-600 mx-auto rounded"></div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Search prayers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 border border-accent-100 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-sans focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 bg-white rounded shadow-sm hover:shadow-md transition-shadow"
            />
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="border border-accent-100 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-sans focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 bg-white rounded shadow-sm hover:shadow-md transition-shadow"
            >
              <option value="">All Categories</option>
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>

        {prayers === undefined ? (
          <Spinner />
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-accent-300 font-sans text-sm">
            No prayers found.
          </div>
        ) : (
          <div className="space-y-16">
            {Object.entries(grouped).map(([category, prayerList]) => (
              <div key={category}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white text-lg">🙏</div>
                  <div>
                    <h2 className="text-[10px] tracking-[0.4em] uppercase text-primary-600 font-sans font-semibold">
                      {category}
                    </h2>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-primary-200 to-transparent"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {prayerList.map((prayer) => (
                    <Link
                      key={prayer._id}
                      to={`/prayers/${prayer.slug}`}
                      className="feature-card group flex flex-col border-t-2 border-primary-100 hover:border-primary-600 hover:shadow-lg transition-all"
                    >
                      <h3 className="font-sans font-bold text-lg text-accent-500 group-hover:text-primary-600 transition-colors">
                        {prayer.title}
                      </h3>
                      {prayer.origin && (
                        <p className="text-[10px] text-accent-300 font-sans mt-2">{prayer.origin}</p>
                      )}
                      <p className="text-sm font-sans text-accent-400 mt-3 line-clamp-2 leading-relaxed flex-1">
                        {prayer.text.replace(/<[^>]*>/g, "").slice(0, 100)}…
                      </p>
                      <p className="mt-4 text-[10px] tracking-[0.3em] uppercase text-primary-600 group-hover:text-primary-700 transition-colors font-sans font-semibold">
                        Read prayer →
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
