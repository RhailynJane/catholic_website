import { useParams, Link } from "react-router-dom";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import type { Id } from "../../../convex/_generated/dataModel";
import RichTextRenderer from "../../components/ui/RichTextRenderer";
import Spinner from "../../components/ui/Spinner";

const LITURGICAL_COLOR_CLASSES: Record<string, string> = {
  White: "bg-accent-50 text-accent-500 border-accent-100",
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
      <p className="text-accent-300 font-sans text-sm">Saint not found.</p>
      <Link to="/saints" className="btn-outline mt-6 inline-block">Back to Saints</Link>
    </div>
  );

  const colorClass = saint.liturgicalColor
    ? LITURGICAL_COLOR_CLASSES[saint.liturgicalColor] ?? "bg-accent-50 text-accent-500 border-accent-100"
    : null;

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <Link to="/saints" className="text-[10px] tracking-[0.3em] uppercase text-accent-300 hover:text-primary-600 font-sans transition-colors inline-flex items-center gap-2 font-semibold">
          ← Back to Saints
        </Link>
      </div>

      {/* Wavy Gradient Header Section */}
      <div className="wavy-gradient py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="pb-8">
            <div className="mb-6 text-4xl font-sans">✦</div>
            <p className="text-[9px] tracking-[0.5em] uppercase text-primary-600 font-sans mb-3 font-semibold">
              {saint.feastDate}{saint.feastType ? ` — ${saint.feastType}` : ""}
            </p>
            <h1 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl text-accent-500 leading-tight">
              {saint.name}
            </h1>

            {/* Years */}
            {(saint.bornYear || saint.diedYear) && (
              <p className="mt-4 text-accent-300 font-sans text-base">
                {saint.bornYear && saint.diedYear
                  ? `${saint.bornYear}–${saint.diedYear}`
                  : saint.bornYear
                  ? `b. ${saint.bornYear}`
                  : `d. ${saint.diedYear}`}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Image */}
        {saint.imageUrl && (
          <div className="mb-12">
            <img 
              src={saint.imageUrl} 
              alt={saint.name}
              className="max-w-lg w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        )}

        {/* Details grid */}
        <div className="feature-card border-l-4 border-primary-600 mb-12">
          <p className="text-[10px] tracking-[0.4em] uppercase text-primary-600 font-sans mb-6 font-semibold">Key Details</p>
          <dl className="space-y-4">
            {saint.patronOf && (
              <div className="flex gap-2 text-base font-sans">
                <dt className="text-accent-300 shrink-0">Patron Saint of</dt>
                <dd className="text-accent-500">{saint.patronOf}</dd>
              </div>
            )}
            {saint.invokedAgainst && (
              <div className="flex gap-2 text-sm font-sans">
                <dt className="text-accent-300 shrink-0">Invoked against</dt>
                <dd className="text-accent-500">{saint.invokedAgainst}</dd>
              </div>
            )}
            {saint.canonizedBy && (
              <div className="flex gap-2 text-sm font-sans">
                <dt className="text-accent-300 shrink-0">Canonized by</dt>
                <dd className="text-accent-500">{saint.canonizedBy}</dd>
              </div>
            )}
            {saint.liturgicalColor && (
              <div className="flex gap-2 text-sm font-sans items-center">
                <dt className="text-accent-300 shrink-0">Liturgical Color</dt>
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
            <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-accent-50">
              {saint.tags.map((tag) => (
                <span key={tag} className="text-[9px] bg-accent-50 text-accent-400 px-2 py-0.5 uppercase tracking-wide font-sans">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Additional Sections - Properly Constrained */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Quote */}
        {saint.quote && (
          <div className="mt-10">
            <p className="text-[9px] tracking-[0.45em] uppercase text-accent-300 font-sans mb-4">Quote</p>
            <div className="quote-card">
              <blockquote className="font-sans text-lg text-accent-500 leading-relaxed italic">
                "{saint.quote}"
              </blockquote>
            </div>
          </div>
        )}

        {/* Reflection */}
        {saint.reflection ? (
          <div className="mt-10">
            <p className="text-[9px] tracking-[0.45em] uppercase text-accent-300 font-sans mb-4">Reflection</p>
            <div className="prose-catholic font-sans text-sm leading-relaxed text-accent-500 space-y-4">
              {saint.reflection.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-10">
            <p className="text-[9px] tracking-[0.45em] uppercase text-accent-300 font-sans mb-4">Biography</p>
            <div className="quote-card mb-8">
              <blockquote className="font-sans text-lg text-accent-500 leading-relaxed italic">
                "{saint.shortBio}"
              </blockquote>
            </div>
            <div className="prose-catholic">
              <RichTextRenderer content={saint.fullBio} />
            </div>
          </div>
        )}

        {/* Full Bio (when reflection exists, show bio separately) */}
        {saint.reflection && (
          <div className="mt-10">
            <p className="text-[9px] tracking-[0.45em] uppercase text-accent-300 font-sans mb-4">Biography</p>
            <div className="quote-card mb-8">
              <blockquote className="font-sans text-lg text-accent-500 leading-relaxed italic">
                "{saint.shortBio}"
              </blockquote>
            </div>
            <div className="prose-catholic">
              <RichTextRenderer content={saint.fullBio} />
            </div>
          </div>
        )}

        {/* Prayer */}
        {saint.prayerToSaint && (
          <div className="mt-10">
            <p className="text-[9px] tracking-[0.45em] uppercase text-accent-300 font-sans mb-4">Prayer</p>
            <div className="quote-card">
              <p className="font-sans text-lg text-accent-500 italic leading-relaxed">
                "{saint.prayerToSaint}"
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
