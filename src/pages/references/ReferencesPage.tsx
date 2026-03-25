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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {refs === undefined ? (
          <Spinner />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {allRefs.map((ref, i) => (
                <a
                  key={i}
                  href={"url" in ref ? ref.url : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="feature-card group flex flex-col border-b-2 border-primary-100 hover:border-primary-600 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex-1">
                      {ref.category && (
                        <span className="text-[9px] tracking-[0.4em] uppercase text-primary-600 font-sans font-semibold block mb-2">
                          {ref.category}
                        </span>
                      )}
                      <h3 className="font-sans font-bold text-lg text-accent-500 group-hover:text-primary-600 transition-colors">
                        {ref.title}
                      </h3>
                      <p className="text-[10px] text-accent-300 font-sans mt-2">{ref.site}</p>
                    </div>
                    <ExternalLink size={18} className="text-accent-300 group-hover:text-primary-600 shrink-0 mt-1 transition-colors" />
                  </div>
                  {ref.description && (
                    <p className="text-sm font-sans text-accent-400 leading-relaxed flex-1">{ref.description}</p>
                  )}
                </a>
              ))}
            </div>

            <div className="feature-card border-l-4 border-primary-600">
              <h2 className="font-sans font-bold text-2xl text-accent-500 mb-4">About Our References</h2>
              <p className="text-accent-400 font-sans text-base leading-relaxed">
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
