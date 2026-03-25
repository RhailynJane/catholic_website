import { Link } from "react-router-dom";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { getDayOfYear, formatReference } from "../lib/utils";
import { useEffect } from "react";

const features = [
  {
    label: "Evangelium",
    desc: "Creed, Sacraments, Morals & Prayer — the four pillars of Catholic faith.",
    to: "/evangelium",
  },
  {
    label: "Saint a Day",
    desc: "365 stories of faith and heroism from the great saints of the Church.",
    to: "/saints",
  },
  {
    label: "Sacred Verses",
    desc: "A curated collection of Scripture for meditation, study, and prayer.",
    to: "/verses",
  },
  {
    label: "Catholic Prayers",
    desc: "Traditional prayers for every occasion in Catholic life.",
    to: "/prayers",
  },
  {
    label: "Catholic Information",
    desc: "Articles on the Mass, liturgical seasons, symbols, and history.",
    to: "/information",
  },
  {
    label: "Formulas of Doctrine",
    desc: "Essential statements and formulations of the Catholic faith.",
    to: "/formulas",
  },
];

export default function Home() {
  const dayOfYear = getDayOfYear();
  const saint = useQuery(api.saints.getByDayOfYear, { dayOfYear });
  const verseOfDay = useQuery(api.verses.getVerseOfDay, { dayOfYear });
  const updateCommandments = useMutation(api.updateCommandments.updateTenCommandments);

  useEffect(() => {
    updateCommandments({}).catch(() => {
      // Mutation may fail silently if article is being created
    });
  }, [updateCommandments]);

  return (
    <div className="space-y-16 sm:space-y-20">
      {/* Hero with Wavy Gradient */}
      <section className="wavy-gradient py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="text-5xl font-sans">✦</div>
          </div>
          <p className="text-[10px] tracking-[0.5em] uppercase text-primary-600 font-sans mb-6 font-semibold">
            A Guide to the Catholic Faith
          </p>
          <h1 className="font-sans font-bold text-4xl sm:text-5xl lg:text-7xl text-accent-500 leading-tight\">
            Catholic Faith
          </h1>
          <p className="mt-8 text-accent-400 font-sans text-lg leading-relaxed max-w-2xl mx-auto">
            A comprehensive resource rooted in Sacred Scripture and Apostolic Tradition,
            for those who seek to know, love, and serve God.
          </p>
          <div className="mt-14 flex flex-wrap gap-4 justify-center">
            <Link to="/evangelium" className="btn-modern shadow-lg hover:shadow-xl transition-shadow">
              Explore the Faith
            </Link>
            <Link to="/saints" className="btn-modern-secondary shadow-md hover:shadow-lg transition-shadow">
              Saint of the Day
            </Link>
          </div>
        </div>
      </section>

      {/* Today's Saint Card */}
      {saint && (
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="feature-card border-l-4 border-primary-600 hover:shadow-xl transition-all flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[9px] tracking-[0.5em] uppercase text-primary-600 font-sans font-semibold">
                    Saint of the Day
                  </span>
                  <span className="text-[9px] tracking-[0.5em] uppercase text-accent-300 font-sans">
                    {saint.feastDate}
                  </span>
                </div>
                <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-4xl text-accent-500 mb-3">{saint.name}</h2>
                <p className="text-accent-400 font-sans text-base leading-relaxed">{saint.shortBio}</p>
              </div>
              <Link to={`/saints/${saint._id}`} className="btn-modern-tertiary shrink-0 whitespace-nowrap shadow-md hover:shadow-lg transition-shadow">
                Read Full Bio
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Bible Verse Card */}
      {verseOfDay && (
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="quote-card relative border border-primary-100 shadow-lg hover:shadow-xl transition-all">
              <div className="absolute -top-3 left-6 text-4xl text-primary-600">✦</div>
              <p className="text-[9px] tracking-[0.5em] uppercase text-primary-600 font-sans mb-6 text-center font-semibold pt-4">
                Bible Verse of the Day
              </p>
              <blockquote className="font-sans text-2xl md:text-3xl text-accent-500 font-semibold leading-relaxed text-center">
                "{verseOfDay.text}"
              </blockquote>
              <p className="mt-6 text-center font-sans text-sm text-accent-400">
                — {formatReference(verseOfDay.book, verseOfDay.chapter, verseOfDay.verse, verseOfDay.verseEnd)}{" "}
                <span className="text-accent-300 text-xs">({verseOfDay.translation})</span>
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Features Grid */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.45em] uppercase text-primary-600 font-sans mb-4 font-semibold">Resources</p>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-accent-500">Explore the Tradition</h2>
            <div className="mt-4 w-12 h-1 bg-primary-600 mx-auto rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, idx) => (
              <Link
                key={f.to}
                to={f.to}
                className="feature-card hover:shadow-xl transition-all group border-t-2 border-primary-100 hover:border-primary-600"
              >
                <div className="mb-4 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all text-lg">
                  {["⛪", "✞", "📖", "🙏", "📚", "⛰️"][idx % 6]}
                </div>
                <h3 className="font-sans font-bold text-xl text-accent-500 group-hover:text-primary-600 mb-2 transition-colors">
                  {f.label}
                </h3>
                <p className="text-accent-400 font-sans text-sm leading-relaxed flex-1">{f.desc}</p>
                <p className="mt-4 text-[10px] tracking-[0.3em] uppercase text-primary-600 group-hover:text-primary-700 transition-colors font-semibold">
                  Explore →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Card */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="quote-card relative border-2 border-primary-200 shadow-lg hover:shadow-xl transition-all">
            <div className="text-center">
              <div className="text-5xl font-sans text-primary-600 mb-8">†</div>
              <blockquote className="font-sans text-2xl md:text-3xl text-accent-500 font-semibold leading-relaxed mb-8">
                "For God so loved the world that he gave his only begotten Son,
                that whoever believes in him shall not perish but have eternal life."
              </blockquote>
              <cite className="block text-[10px] tracking-[0.4em] uppercase text-accent-300 font-sans not-italic font-semibold">
                John 3:16
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[10px] tracking-[0.45em] uppercase text-primary-600 font-sans mb-4 font-semibold">Further Study</p>
            <h2 className="font-sans font-bold text-3xl text-accent-500">External Resources</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://cccref.com"
              target="_blank"
              rel="noopener noreferrer"
              className="feature-card text-center hover:shadow-lg transition-all border-b-2 border-primary-100 hover:border-primary-600 group"
            >
              <div className="text-3xl text-primary-600 mb-4 group-hover:scale-110 transition-transform">📖</div>
              <h3 className="font-sans font-bold text-lg text-accent-500 mb-3 group-hover:text-primary-600 transition-colors">
                Catechism Reference
              </h3>
              <p className="text-accent-400 font-sans text-sm">cccref.com — Complete Catechism of the Catholic Church</p>
            </a>
            <a
              href="https://formed.org"
              target="_blank"
              rel="noopener noreferrer"
              className="feature-card text-center hover:shadow-lg transition-all border-b-2 border-primary-100 hover:border-primary-600 group"
            >
              <div className="text-3xl text-primary-600 mb-4 group-hover:scale-110 transition-transform">🎬</div>
              <h3 className="font-sans font-bold text-lg text-accent-500 mb-3 group-hover:text-primary-600 transition-colors">
                Formed
              </h3>
              <p className="text-accent-400 font-sans text-sm">formed.org — Catholic audio, video & ebooks</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
