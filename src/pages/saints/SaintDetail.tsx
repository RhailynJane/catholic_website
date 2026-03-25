import { useParams, Link } from "react-router-dom";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import type { Id } from "../../../convex/_generated/dataModel";
import RichTextRenderer from "../../components/ui/RichTextRenderer";
import Spinner from "../../components/ui/Spinner";

const LITURGICAL_COLOR_CLASSES: Record<string, string> = {
  White: "bg-stone-50 text-stone-700 border-stone-200",
  Red: "bg-red-50 text-red-800 border-red-200",
  Green: "bg-green-50 text-green-800 border-green-200",
  Purple: "bg-purple-50 text-purple-800 border-purple-200",
  Rose: "bg-pink-50 text-pink-700 border-pink-200",
  Gold: "bg-amber-50 text-amber-800 border-amber-200",
};

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

  const colorClass = saint.liturgicalColor
    ? LITURGICAL_COLOR_CLASSES[saint.liturgicalColor] ?? "bg-stone-50 text-stone-700 border-stone-200"
    : null;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link to="/saints" className="text-[10px] tracking-[0.3em] uppercase text-stone-400 hover:text-stone-700 font-sans transition-colors">
        ← Saints
      </Link>

      {/* Header */}
      <div className="mt-8 pb-8 border-b border-stone-200">
        <p className="text-[9px] tracking-[0.5em] uppercase text-catholic-gold font-sans mb-2">
          {saint.feastDate}{saint.feastType ? ` — ${saint.feastType}` : ""}
        </p>
        <h1 className="font-serif text-5xl text-stone-900 font-light italic leading-tight">
          {saint.name}
        </h1>

        {/* Years */}
        {(saint.bornYear || saint.diedYear) && (
          <p className="mt-3 text-stone-400 font-sans text-sm">
            {saint.bornYear && saint.diedYear
              ? `${saint.bornYear}–${saint.diedYear}`
              : saint.bornYear
              ? `b. ${saint.bornYear}`
              : `d. ${saint.diedYear}`}
          </p>
        )}

        <div className="mt-5 h-px w-12 bg-catholic-gold" />

        {/* Image */}
        {saint.imageUrl && (
          <div className="mt-8 mb-8">
            <img 
              src={saint.imageUrl} 
              alt={saint.name}
              className="max-w-md w-full h-auto rounded-lg shadow-lg"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        )}

        {/* Details grid */}
        <dl className="mt-6 space-y-2">
          {saint.patronOf && (
            <div className="flex gap-2 text-sm font-sans">
              <dt className="text-stone-400 shrink-0">Patron Saint of</dt>
              <dd className="text-stone-700">{saint.patronOf}</dd>
            </div>
          )}
          {saint.invokedAgainst && (
            <div className="flex gap-2 text-sm font-sans">
              <dt className="text-stone-400 shrink-0">Invoked against</dt>
              <dd className="text-stone-700">{saint.invokedAgainst}</dd>
            </div>
          )}
          {saint.canonizedBy && (
            <div className="flex gap-2 text-sm font-sans">
              <dt className="text-stone-400 shrink-0">Canonized by</dt>
              <dd className="text-stone-700">{saint.canonizedBy}</dd>
            </div>
          )}
          {saint.liturgicalColor && (
            <div className="flex gap-2 text-sm font-sans items-center">
              <dt className="text-stone-400 shrink-0">Liturgical Color</dt>
              <dd>
                <span className={`inline-block px-2 py-0.5 text-xs border font-sans ${colorClass}`}>
                  {saint.liturgicalColor}
                </span>
              </dd>
            </div>
          )}
        </dl>

        {/* Tags */}
        {saint.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-5">
            {saint.tags.map((tag) => (
              <span key={tag} className="text-[9px] bg-stone-100 text-stone-500 px-2 py-0.5 uppercase tracking-wide font-sans">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Quote */}
      {saint.quote && (
        <div className="mt-10">
          <p className="text-[9px] tracking-[0.45em] uppercase text-stone-400 font-sans mb-4">Quote</p>
          <blockquote className="pl-6 border-l-2 border-catholic-gold font-serif text-lg text-stone-600 italic leading-relaxed">
            {saint.quote}
          </blockquote>
        </div>
      )}

      {/* Reflection */}
      {saint.reflection ? (
        <div className="mt-10">
          <p className="text-[9px] tracking-[0.45em] uppercase text-stone-400 font-sans mb-4">Reflection</p>
          <div className="prose-catholic font-sans text-sm leading-relaxed text-stone-700 space-y-4">
            {saint.reflection.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-10">
          <p className="text-[9px] tracking-[0.45em] uppercase text-stone-400 font-sans mb-4">Biography</p>
          <blockquote className="pl-6 border-l-2 border-catholic-gold font-serif text-lg text-stone-600 italic leading-relaxed mb-8">
            {saint.shortBio}
          </blockquote>
          <div className="prose-catholic">
            <RichTextRenderer content={saint.fullBio} />
          </div>
        </div>
      )}

      {/* Full Bio (when reflection exists, show bio separately) */}
      {saint.reflection && (
        <div className="mt-10">
          <p className="text-[9px] tracking-[0.45em] uppercase text-stone-400 font-sans mb-4">Biography</p>
          <blockquote className="pl-6 border-l-2 border-catholic-gold font-serif text-lg text-stone-600 italic leading-relaxed mb-8">
            {saint.shortBio}
          </blockquote>
          <div className="prose-catholic">
            <RichTextRenderer content={saint.fullBio} />
          </div>
        </div>
      )}

      {/* Prayer */}
      {saint.prayerToSaint && (
        <div className="mt-10 border-t border-stone-100 pt-10">
          <p className="text-[9px] tracking-[0.45em] uppercase text-stone-400 font-sans mb-4">Prayer</p>
          <div className="bg-catholic-cream border-l-2 border-catholic-gold px-6 py-5">
            <p className="font-serif text-base text-stone-700 italic leading-relaxed">
              {saint.prayerToSaint}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
