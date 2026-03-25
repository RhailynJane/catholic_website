import { useParams, Link } from "react-router-dom";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import RichTextRenderer from "../../components/ui/RichTextRenderer";
import Spinner from "../../components/ui/Spinner";

export default function PrayerDetail() {
  const { slug } = useParams<{ slug: string }>();
  const prayer = useQuery(api.prayers.getBySlug, { slug: slug! });

  if (prayer === undefined) return <Spinner />;
  if (!prayer) return (
    <div className="text-center py-20">
      <p className="text-stone-400 font-sans text-sm">Prayer not found.</p>
      <Link to="/prayers" className="btn-outline mt-6 inline-block">Back to Prayers</Link>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <Link to="/prayers" className="text-[10px] tracking-[0.3em] uppercase text-stone-400 hover:text-stone-700 font-sans transition-colors">
        ← Prayers
      </Link>

      {/* Header */}
      <div className="mt-8 pb-8 border-b border-stone-200">
        <p className="text-[9px] tracking-[0.5em] uppercase text-stone-400 font-sans mb-3">{prayer.category}</p>
        <h1 className="font-serif text-5xl text-stone-900 font-light italic leading-tight">{prayer.title}</h1>
        {prayer.origin && (
          <p className="mt-3 text-stone-500 font-sans text-sm">{prayer.origin}</p>
        )}
        <div className="mt-6 h-px w-12 bg-catholic-gold" />
      </div>

      {/* Prayer Text */}
      <div className="mt-8 bg-catholic-cream border-l-2 border-catholic-gold px-8 py-6">
        <RichTextRenderer content={prayer.text} className="prose-catholic font-serif text-lg leading-loose text-stone-800" />
      </div>

      {/* Latin Text */}
      {prayer.latinText && (
        <div className="mt-8">
          <h3 className="text-[10px] tracking-[0.4em] uppercase text-stone-400 font-sans mb-4">Latin Text</h3>
          <p className="font-serif italic text-stone-600 leading-relaxed border border-stone-200 px-6 py-4 bg-white">
            {prayer.latinText}
          </p>
        </div>
      )}

      {/* Notes */}
      {prayer.notes && (
        <div className="mt-8 border-t border-stone-100 pt-6">
          <h4 className="text-[10px] tracking-[0.4em] uppercase text-stone-400 font-sans mb-3">Notes</h4>
          <p className="text-sm font-sans text-stone-600 leading-relaxed">{prayer.notes}</p>
        </div>
      )}
    </div>
  );
}
