import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { getDayOfYear } from "../../lib/utils";
import PageHeader from "../../components/ui/PageHeader";
import Spinner from "../../components/ui/Spinner";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export default function SaintsPage() {
  const [search, setSearch] = useState("");
  const [filterMonth, setFilterMonth] = useState<number | null>(null);
  const saints = useQuery(api.saints.listAll);
  const todayDOY = getDayOfYear();

  const filtered = (saints || []).filter((s) => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase());
    const matchMonth = filterMonth === null || s.month === filterMonth;
    return matchSearch && matchMonth;
  });

  const todaySaint = saints?.find((s) => s.dayOfYear === todayDOY);

  return (
    <div>
      <PageHeader
        title="Saint a Day"
        subtitle="365 Stories of Faith and Heroism"
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Today's Saint */}
        {todaySaint && (
          <div className="mb-12 border border-catholic-gold bg-white p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <p className="text-[9px] tracking-[0.5em] uppercase text-catholic-gold font-sans mb-2">
                Today's Saint — {todaySaint.feastDate}
              </p>
              <h2 className="font-serif text-3xl text-stone-900 font-light italic">{todaySaint.name}</h2>
              <p className="text-stone-500 font-sans text-sm mt-3 leading-relaxed line-clamp-2">{todaySaint.shortBio}</p>
            </div>
            <Link to={`/saints/${todaySaint._id}`} className="btn-outline shrink-0">
              Read Bio
            </Link>
          </div>
        )}

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <input
            type="text"
            placeholder="Search saints..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border border-stone-200 px-4 py-2.5 text-sm font-sans focus:outline-none focus:border-stone-400 bg-white"
          />
          <select
            value={filterMonth ?? ""}
            onChange={(e) => setFilterMonth(e.target.value ? Number(e.target.value) : null)}
            className="border border-stone-200 px-4 py-2.5 text-sm font-sans focus:outline-none focus:border-stone-400 bg-white"
          >
            <option value="">All Months</option>
            {MONTHS.map((m, i) => (
              <option key={m} value={i + 1}>{m}</option>
            ))}
          </select>
        </div>

        {/* Saints Grid */}
        {saints === undefined ? (
          <Spinner />
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-stone-400 font-sans">
            No saints found.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-stone-200">
            {filtered.map((saint) => (
              <Link
                key={saint._id}
                to={`/saints/${saint._id}`}
                className={`bg-white hover:bg-catholic-cream transition-colors group ${
                  saint.dayOfYear === todayDOY ? "ring-1 ring-inset ring-catholic-gold" : ""
                }`}
              >
                {/* Image */}
                {saint.imageUrl && (
                  <div className="overflow-hidden bg-stone-100 h-48">
                    <img 
                      src={saint.imageUrl} 
                      alt={saint.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      onError={(e) => {
                        (e.target as HTMLImageElement).parentElement!.style.display = "none";
                      }}
                    />
                  </div>
                )}

                <div className="p-5">
                  {saint.dayOfYear === todayDOY && (
                    <p className="text-[9px] tracking-[0.4em] uppercase text-catholic-gold font-sans mb-2">Today</p>
                  )}
                  <p className="text-[9px] tracking-[0.3em] uppercase text-stone-400 font-sans">{saint.feastDate}</p>
                  <h3 className="font-serif text-lg text-stone-900 font-normal group-hover:text-stone-600 mt-1 leading-snug">
                    {saint.name}
                  </h3>
                  <p className="text-xs font-sans text-stone-500 mt-2 line-clamp-3 leading-relaxed">{saint.shortBio}</p>
                  {saint.patronOf && (
                    <p className="text-[10px] font-sans text-stone-400 mt-2">Patron of: {saint.patronOf}</p>
                  )}
                  {saint.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {saint.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[9px] bg-stone-100 text-stone-500 px-1.5 py-0.5 uppercase tracking-wide font-sans">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
