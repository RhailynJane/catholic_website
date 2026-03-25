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
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <Link to="/prayers" className="text-[10px] tracking-[0.3em] uppercase text-accent-300 hover:text-primary-600 font-sans transition-colors inline-flex items-center gap-2 font-semibold">
          ← Back to Prayers
        </Link>
      </div>

      {/* Wavy Gradient Header Section */}
      <div className="wavy-gradient py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="pb-8">
            <div className="mb-6 text-4xl font-sans">✦</div>
            <p className="text-[9px] tracking-[0.5em] uppercase text-primary-600 font-sans mb-3 font-semibold">{prayer.category}</p>
            <h1 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl text-accent-500 leading-tight">{prayer.title}</h1>
            {prayer.origin && (
              <p className="mt-4 text-accent-400 font-sans text-lg">{prayer.origin}</p>
            )}
          </div>
        </div>
      </div>

      {/* Prayer Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Prayer Text */}
        <div className="mb-12 quote-card border-2 border-primary-200 shadow-lg">
          <RichTextRenderer content={prayer.text} className="prose-catholic font-sans text-lg leading-relaxed text-accent-500" />
        </div>

        {/* Latin Text */}
        {prayer.latinText && (
          <div className="mb-12">
            <h3 className="text-[10px] tracking-[0.4em] uppercase text-primary-600 font-sans mb-6 font-semibold">Latin Text</h3>
            <div className="feature-card border-l-4 border-primary-100">
              <p className="font-sans italic text-accent-400 leading-relaxed text-lg">
                {prayer.latinText}
              </p>
            </div>
          </div>
        )}

        {/* Notes */}
        {prayer.notes && (
          <div className="feature-card border-l-4 border-primary-600">
            <h4 className="text-[10px] tracking-[0.4em] uppercase text-primary-600 font-sans mb-4 font-semibold">Notes</h4>
            <p className="text-sm font-sans text-accent-400 leading-relaxed">{prayer.notes}</p>
          </div>
        )}
      </div>
    </div>
  );
}
