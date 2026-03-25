import { useParams, Link } from "react-router-dom";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import type { Id } from "../../../convex/_generated/dataModel";
import RichTextRenderer from "../../components/ui/RichTextRenderer";
import Spinner from "../../components/ui/Spinner";

export default function SaintDetail() {
  const { id } = useParams<{ id: string }>();
  const saint = useQuery(api.saints.getById, { id: id as Id<"saints"> });

  if (saint === undefined) return <Spinner />;
  if (!saint) return (
    <div className="text-center py-20">
      <p className="text-stone-400 font-sans text-sm">Saint not found.</p>
      <Link to="/saints" className="btn-outline mt-6 inline-block">Back to Saints</Link>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link to="/saints" className="text-[10px] tracking-[0.3em] uppercase text-stone-400 hover:text-stone-700 font-sans transition-colors">
        ← Saints
      </Link>

      {/* Header */}
      <div className="mt-8 pb-8 border-b border-stone-200">
        <p className="text-[9px] tracking-[0.5em] uppercase text-catholic-gold font-sans mb-3">
          Feast Day — {saint.feastDate}
        </p>
        <h1 className="font-serif text-5xl text-stone-900 font-light italic leading-tight">{saint.name}</h1>
        {saint.patronOf && (
          <p className="mt-3 text-stone-500 font-sans text-sm">Patron of: {saint.patronOf}</p>
        )}
        <div className="flex gap-6 mt-2 text-xs font-sans text-stone-400">
          {saint.bornYear && <span>Born: {saint.bornYear}</span>}
          {saint.diedYear && <span>Died: {saint.diedYear}</span>}
        </div>
        {saint.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {saint.tags.map((tag) => (
              <span key={tag} className="text-[9px] bg-stone-100 text-stone-500 px-2 py-0.5 uppercase tracking-wide font-sans">
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="mt-6 h-px w-12 bg-catholic-gold" />
      </div>

      {/* Short Bio */}
      <blockquote className="mt-8 pl-6 border-l-2 border-catholic-gold font-serif text-lg text-stone-600 italic leading-relaxed">
        {saint.shortBio}
      </blockquote>

      {/* Full Bio */}
      <div className="mt-8 prose-catholic">
        <RichTextRenderer content={saint.fullBio} />
      </div>
    </div>
  );
}
