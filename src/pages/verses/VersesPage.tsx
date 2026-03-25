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

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <input
            type="text"
            placeholder="Search verses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border border-stone-200 px-4 py-2.5 text-sm font-sans focus:outline-none focus:border-stone-400 bg-white"
          />
          <select
            value={filterBook}
            onChange={(e) => setFilterBook(e.target.value)}
            className="border border-stone-200 px-4 py-2.5 text-sm font-sans focus:outline-none focus:border-stone-400 bg-white"
          >
            <option value="">All Books</option>
            {books.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="border border-stone-200 px-4 py-2.5 text-sm font-sans focus:outline-none focus:border-stone-400 bg-white"
          >
            <option value="">All Categories</option>
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        {verses === undefined ? (
          <Spinner />
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-stone-400 font-sans text-sm">
            No verses found.
          </div>
        ) : (
          <div className="space-y-0">
            <p className="text-[10px] tracking-[0.3em] uppercase text-stone-400 font-sans mb-6">
              {filtered.length} verse{filtered.length !== 1 ? "s" : ""}
            </p>
            {filtered.map((v) => (
              <div key={v._id} className="border-b border-stone-100 py-6 flex items-start gap-8">
                <div className="flex-1">
                  <blockquote className="font-serif text-xl text-stone-800 italic font-light leading-relaxed">
                    "{v.text}"
                  </blockquote>
                  {v.category && (
                    <span className="mt-3 inline-block text-[9px] bg-stone-100 text-stone-500 px-2 py-0.5 uppercase tracking-wide font-sans">
                      {v.category}
                    </span>
                  )}
                </div>
                <div className="shrink-0 text-right min-w-[80px]">
                  <span className="font-serif text-sm text-stone-700 block leading-snug">
                    {formatReference(v.book, v.chapter, v.verse, v.verseEnd)}
                  </span>
                  <span className="text-[9px] text-stone-400 font-sans tracking-wide">{v.translation}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
