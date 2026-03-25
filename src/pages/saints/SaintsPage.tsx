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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Today's Saint */}
        {todaySaint && (
          <div className="mb-16">
            <div className="feature-card border-l-4 border-primary-600 hover:shadow-xl transition-all flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[9px] tracking-[0.5em] uppercase text-primary-600 font-sans font-semibold">Today's Saint</span>
                  <span className="text-[9px] tracking-[0.5em] uppercase text-accent-300 font-sans">{todaySaint.feastDate}</span>
                </div>
                <h2 className="font-sans font-bold text-3xl text-accent-500 mb-3">{todaySaint.name}</h2>
                <p className="text-accent-400 font-sans text-base leading-relaxed">{todaySaint.shortBio}</p>
              </div>
              <Link to={`/saints/${todaySaint._id}`} className="btn-modern-tertiary shrink-0 whitespace-nowrap shadow-md hover:shadow-lg transition-shadow">
                Read Full Bio
              </Link>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="mb-12 px-4 sm:px-0">
          <div className="text-center mb-6">
            <p className="text-[10px] tracking-[0.45em] uppercase text-primary-600 font-sans mb-2 font-semibold">Search & Filter</p>
            <div className="w-12 h-1 bg-primary-600 mx-auto rounded"></div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Search saints..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 border border-accent-100 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-sans focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 bg-white rounded shadow-sm hover:shadow-md transition-shadow"
            />
            <select
              value={filterMonth ?? ""}
              onChange={(e) => setFilterMonth(e.target.value ? Number(e.target.value) : null)}
              className="border border-accent-100 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-sans focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 bg-white rounded shadow-sm hover:shadow-md transition-shadow"
            >
              <option value="">All Months</option>
              {MONTHS.map((m, i) => (
                <option key={m} value={i + 1}>{m}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Saints Grid */}
        {saints === undefined ? (
          <Spinner />
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-accent-300 font-sans">
            No saints found.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((saint) => (
              <Link
                key={saint._id}
                to={`/saints/${saint._id}`}
                className={`feature-card group flex flex-col border-t-2 border-primary-100 hover:border-primary-600 hover:shadow-lg transition-all ${
                  saint.dayOfYear === todayDOY ? "ring-2 ring-primary-500 ring-offset-2" : ""
                }`}
              >
                {/* Image */}
                {saint.imageUrl && (
                  <div className="overflow-hidden rounded-lg h-48 mb-4 -m-8 mb-0">
                    <img 
                      src={saint.imageUrl} 
                      alt={saint.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).parentElement!.style.display = "none";
                      }}
                    />
                  </div>
                )}

                <div className={saint.imageUrl ? "" : ""}>
                  {saint.dayOfYear === todayDOY && (
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[9px] tracking-[0.4em] uppercase text-primary-600 font-sans font-semibold">⭐ Today</span>
                    </div>
                  )}
                  <p className="text-[9px] tracking-[0.3em] uppercase text-accent-300 font-sans">{saint.feastDate}</p>
                  <h3 className="font-sans font-bold text-lg text-accent-500 group-hover:text-primary-600 transition-colors mt-2 leading-snug">
                    {saint.name}
                  </h3>
                  <p className="text-sm font-sans text-accent-400 mt-3 line-clamp-3 leading-relaxed flex-1">{saint.shortBio}</p>
                  {saint.patronOf && (
                    <p className="text-[10px] font-sans text-accent-300 mt-3">Patron of: {saint.patronOf}</p>
                  )}
                  {saint.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {saint.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[9px] bg-primary-50 text-primary-600 px-2 py-1 uppercase tracking-wide font-sans font-semibold rounded-full border border-primary-100">
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
