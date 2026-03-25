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

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border border-stone-200 px-4 py-2.5 text-sm font-sans focus:outline-none focus:border-stone-400 bg-white"
          />
          {categories.length > 0 && (
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="border border-stone-200 px-4 py-2.5 text-sm font-sans focus:outline-none focus:border-stone-400 bg-white"
            >
              <option value="">All Categories</option>
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          )}
        </div>

        {articles === undefined ? (
          <Spinner />
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-stone-400 font-sans text-sm">
            No articles found.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
            {filtered.map((article) => (
              <Link
                key={article._id}
                to={`/information/${article.slug}`}
                className="bg-white p-6 hover:bg-catholic-cream transition-colors group"
              >
                {article.category && (
                  <span className="text-[9px] tracking-[0.4em] uppercase text-stone-400 font-sans block mb-2">
                    {article.category}
                  </span>
                )}
                <h3 className="font-serif text-xl text-stone-900 font-normal group-hover:text-stone-600 leading-snug">
                  {article.title}
                </h3>
                {article.summary && (
                  <p className="text-sm font-sans text-stone-500 mt-3 leading-relaxed line-clamp-3">{article.summary}</p>
                )}
                <p className="mt-4 text-[10px] tracking-[0.3em] uppercase text-stone-400 group-hover:text-stone-700 transition-colors font-sans">
                  Read article
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
