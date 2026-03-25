import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import PageHeader from "../../components/ui/PageHeader";
import Spinner from "../../components/ui/Spinner";

export default function ArticlesPage() {
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const articles = useQuery(api.articles.listAll);

  const categories = useMemo(() => {
    if (!articles) return [];
    return [...new Set(articles.map((a) => a.category).filter(Boolean))].sort() as string[];
  }, [articles]);

  const filtered = useMemo(() => {
    if (!articles) return [];
    return articles.filter((a) => {
      const matchSearch = !search ||
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        (a.summary || "").toLowerCase().includes(search.toLowerCase());
      const matchCat = !filterCategory || a.category === filterCategory;
      return matchSearch && matchCat;
    });
  }, [articles, search, filterCategory]);

  return (
    <div>
      <PageHeader
        title="Catholic Information"
        subtitle="Traditions, Symbols, and Practice of the Faith"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Filters */}
        <div className="mb-12 px-4 sm:px-0">
          <div className="text-center mb-8">
            <p className="text-[10px] tracking-[0.45em] uppercase text-primary-600 font-sans mb-2 font-semibold">Search & Filter</p>
            <div className="w-12 h-1 bg-primary-600 mx-auto rounded"></div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 border border-accent-100 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-sans focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 bg-white rounded shadow-sm hover:shadow-md transition-shadow"
            />
            {categories.length > 0 && (
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="border border-accent-100 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-sans focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 bg-white rounded shadow-sm hover:shadow-md transition-shadow"
              >
                <option value="">All Categories</option>
                {categories.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            )}
          </div>
        </div>

        {articles === undefined ? (
          <Spinner />
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-accent-300 font-sans text-sm">
            No articles found.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <Link
                key={article._id}
                to={`/information/${article.slug}`}
                className="feature-card group flex flex-col border-t-2 border-primary-100 hover:border-primary-600 hover:shadow-lg transition-all"
              >
                {article.category && (
                  <span className="text-[9px] tracking-[0.4em] uppercase text-primary-600 font-sans font-semibold block mb-3">
                    {article.category}
                  </span>
                )}
                <h3 className="font-sans font-bold text-lg text-accent-500 group-hover:text-primary-600 transition-colors leading-snug">
                  {article.title}
                </h3>
                {article.summary && (
                  <p className="text-sm font-sans text-accent-400 mt-3 leading-relaxed line-clamp-3 flex-1">{article.summary}</p>
                )}
                <p className="mt-4 text-[10px] tracking-[0.3em] uppercase text-primary-600 group-hover:text-primary-700 transition-colors font-sans font-semibold">
                  Read article →
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
