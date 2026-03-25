import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import PageHeader from "../../components/ui/PageHeader";
import Spinner from "../../components/ui/Spinner";
import { ExternalLink } from "lucide-react";

const defaultRefs = [
  {
    title: "Catechism of the Catholic Church Reference",
    url: "https://cccref.com",
    description: "Complete Catechism of the Catholic Church with easy navigation and search.",
    site: "cccref.com",
    category: "Catechism",
  },
  {
    title: "Formed",
    url: "https://formed.org",
    description: "The Catholic faith on demand — audio, video, ebooks, and programs for adults, teens, and children.",
    site: "formed.org",
    category: "Formation",
  },
];

export default function ReferencesPage() {
  const refs = useQuery(api.references.listAll);

  const allRefs = refs && refs.length > 0 ? refs : defaultRefs;

  return (
    <div>
      <PageHeader
        title="References"
        subtitle="Trusted Resources for Study and Formation"
      />

      <div className="max-w-5xl mx-auto px-6 py-12">
        {refs === undefined ? (
          <Spinner />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 mb-12">
              {allRefs.map((ref, i) => (
                <a
                  key={i}
                  href={"url" in ref ? ref.url : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-6 hover:bg-catholic-cream transition-colors group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      {ref.category && (
                        <span className="text-[9px] tracking-[0.4em] uppercase text-stone-400 font-sans block mb-2">
                          {ref.category}
                        </span>
                      )}
                      <h3 className="font-serif text-xl text-stone-900 font-normal group-hover:text-stone-600">
                        {ref.title}
                      </h3>
                      <p className="text-[10px] text-stone-400 font-sans mt-1">{ref.site}</p>
                    </div>
                    <ExternalLink size={15} className="text-stone-400 group-hover:text-stone-700 shrink-0 mt-1 transition-colors" />
                  </div>
                  {ref.description && (
                    <p className="text-sm font-sans text-stone-500 mt-3 leading-relaxed">{ref.description}</p>
                  )}
                </a>
              ))}
            </div>

            <div className="border border-stone-200 bg-white p-8">
              <h2 className="font-serif text-2xl text-stone-900 font-light italic mb-4">About Our References</h2>
              <div className="h-px w-10 bg-catholic-gold mb-6" />
              <p className="text-stone-600 font-sans text-sm leading-relaxed">
                These external resources are curated to support your Catholic faith journey.
                They represent trusted sources aligned with the teachings of the Catholic Church.
                We recommend exploring these alongside your study of Scripture, the Catechism,
                and the writings of the Church Fathers.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
