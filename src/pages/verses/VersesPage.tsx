import { useState, useMemo } from "react";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { formatReference } from "../../lib/utils";
import PageHeader from "../../components/ui/PageHeader";
import Spinner from "../../components/ui/Spinner";

export default function VersesPage() {
  const [search, setSearch] = useState("");
  const [filterBook, setFilterBook] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const verses = useQuery(api.verses.listAll);

  const books = useMemo(() => {
    if (!verses) return [];
    return [...new Set(verses.map((v) => v.book))].sort();
  }, [verses]);

  const categories = useMemo(() => {
    if (!verses) return [];
    return [...new Set(verses.map((v) => v.category).filter(Boolean))].sort() as string[];
  }, [verses]);

  const filtered = useMemo(() => {
    if (!verses) return [];
    return verses.filter((v) => {
      const matchSearch = !search ||
        v.text.toLowerCase().includes(search.toLowerCase()) ||
        v.book.toLowerCase().includes(search.toLowerCase());
      const matchBook = !filterBook || v.book === filterBook;
      const matchCat = !filterCategory || v.category === filterCategory;
      return matchSearch && matchBook && matchCat;
    });
  }, [verses, search, filterBook, filterCategory]);

  return (
    <div>
      <PageHeader
        title="Sacred Verses"
        subtitle="Scripture for Meditation, Study, and Prayer"
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
              placeholder="Search verses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 border border-accent-100 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-sans focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 bg-white rounded shadow-sm hover:shadow-md transition-shadow"
            />
            <select
              value={filterBook}
              onChange={(e) => setFilterBook(e.target.value)}
              className="border border-accent-100 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-sans focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 bg-white rounded shadow-sm hover:shadow-md transition-shadow"
            >
              <option value="">All Books</option>
              {books.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
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

        {verses === undefined ? (
          <Spinner />
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-accent-300 font-sans text-sm">
            No verses found.
          </div>
        ) : (
          <div className="space-y-6">
            <p className="text-[10px] tracking-[0.3em] uppercase text-primary-600 font-sans mb-6 font-semibold">
              {filtered.length} verse{filtered.length !== 1 ? "s" : ""}
            </p>
            {filtered.map((v) => (
              <div key={v._id} className="feature-card border-t-2 border-primary-100 hover:border-primary-600 hover:shadow-lg transition-all">
                {v.imageUrl && (
                  <div className="h-48 overflow-hidden rounded-lg mb-6 -m-8 mb-6">
                    <img
                      src={v.imageUrl}
                      alt={`${v.book} ${v.chapter}:${v.verse}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).parentElement!.style.display = "none";
                      }}
                    />
                  </div>
                )}
                <div className="flex items-start gap-6">
                  <div className="flex-1">
                    <blockquote className="font-sans text-xl text-accent-500 font-semibold leading-relaxed">
                      "{v.text}"
                    </blockquote>
                    {v.category && (
                      <span className="mt-4 inline-block text-[9px] bg-primary-100 text-primary-600 px-3 py-1 uppercase tracking-wide font-sans font-semibold rounded-full border border-primary-200">
                        {v.category}
                      </span>
                    )}
                  </div>
                  <div className="shrink-0 text-right min-w-[120px]">
                    <span className="font-sans text-base text-accent-500 block leading-snug font-semibold">
                      {formatReference(v.book, v.chapter, v.verse, v.verseEnd)}
                    </span>
                    <span className="text-[10px] text-accent-300 font-sans tracking-wide uppercase mt-1 block">{v.translation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
