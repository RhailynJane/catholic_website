import { Link } from "react-router-dom";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { getDayOfYear, formatReference } from "../lib/utils";

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

  return (
    <div>
      {/* Hero */}
      <section className="bg-white border-b border-stone-200 py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] tracking-[0.5em] uppercase text-stone-400 font-sans mb-6">
            A Guide to the Catholic Faith
          </p>
          <h1 className="font-serif text-6xl md:text-7xl text-stone-900 font-light italic leading-tight">
            Catholic Faith
          </h1>
          <div className="mt-6 flex justify-center">
            <div className="h-px w-16 bg-catholic-gold" />
          </div>
          <p className="mt-8 text-stone-500 font-sans text-base leading-relaxed max-w-xl mx-auto">
            A comprehensive resource rooted in Sacred Scripture and Apostolic Tradition,
            for those who seek to know, love, and serve God.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/evangelium" className="btn-primary">
              Explore the Faith
            </Link>
            <Link to="/saints" className="btn-outline">
              Saint of the Day
            </Link>
          </div>
        </div>
      </section>

      {/* Today's Saint Banner */}
      {saint && (
        <section className="border-b border-stone-200 bg-catholic-cream">
          <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="flex-1">
              <p className="text-[9px] tracking-[0.5em] uppercase text-stone-400 font-sans mb-2">
                Saint of the Day — {saint.feastDate}
              </p>
              <h2 className="font-serif text-2xl text-stone-900 font-light italic">{saint.name}</h2>
              <p className="text-stone-500 font-sans text-sm mt-2 line-clamp-2 leading-relaxed">{saint.shortBio}</p>
            </div>
            <Link to={`/saints/${saint._id}`} className="btn-outline shrink-0">
              Read Bio
            </Link>
          </div>
        </section>
      )}

      {/* Bible Verse of the Day */}
      {verseOfDay && (
        <section className="border-b border-stone-200 bg-white">
          <div className="max-w-5xl mx-auto px-6 py-8">
            <p className="text-[9px] tracking-[0.5em] uppercase text-stone-400 font-sans mb-4 text-center">
              Bible Verse of the Day
            </p>
            <blockquote className="font-serif text-2xl md:text-3xl text-stone-800 italic font-light leading-relaxed text-center">
              "{verseOfDay.text}"
            </blockquote>
            <p className="mt-4 text-center font-sans text-sm text-stone-500">
              — {formatReference(verseOfDay.book, verseOfDay.chapter, verseOfDay.verse, verseOfDay.verseEnd)}{" "}
              <span className="text-stone-400 text-xs">({verseOfDay.translation})</span>
            </p>
          </div>
        </section>
      )}

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[0.45em] uppercase text-stone-400 font-sans mb-4">Resources</p>
          <h2 className="font-serif text-4xl text-stone-900 font-light">Explore the Tradition</h2>
          <div className="mt-4 flex justify-center">
            <div className="h-px w-12 bg-catholic-gold" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
          {features.map((f) => (
            <Link
              key={f.to}
              to={f.to}
              className="bg-white p-8 hover:bg-catholic-cream transition-colors group"
            >
              <h3 className="font-serif text-xl text-stone-900 font-normal group-hover:text-stone-700 mb-3">
                {f.label}
              </h3>
              <p className="text-stone-500 font-sans text-sm leading-relaxed">{f.desc}</p>
              <p className="mt-4 text-[10px] tracking-[0.3em] uppercase text-stone-400 group-hover:text-stone-700 transition-colors">
                Explore
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Quote Banner */}
      <section className="border-y border-stone-200 bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-catholic-gold font-serif text-2xl mb-6">✝</div>
          <blockquote className="font-serif text-2xl md:text-3xl text-stone-800 italic font-light leading-relaxed">
            "For God so loved the world that he gave his only begotten Son,
            that whoever believes in him shall not perish but have eternal life."
          </blockquote>
          <cite className="block mt-6 text-[10px] tracking-[0.4em] uppercase text-stone-400 font-sans not-italic">
            John 3:16
          </cite>
        </div>
      </section>

      {/* External Resources */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-[10px] tracking-[0.45em] uppercase text-stone-400 font-sans mb-4">Further Study</p>
          <h2 className="font-serif text-3xl text-stone-900 font-light">External Resources</h2>
          <div className="mt-4 flex justify-center">
            <div className="h-px w-12 bg-catholic-gold" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 max-w-2xl mx-auto">
          <a
            href="https://cccref.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-8 hover:bg-catholic-cream transition-colors group text-center"
          >
            <h3 className="font-serif text-lg text-stone-900 font-normal group-hover:text-stone-700 mb-2">
              Catechism Reference
            </h3>
            <p className="text-stone-500 font-sans text-sm">cccref.com — Complete Catechism of the Catholic Church</p>
          </a>
          <a
            href="https://formed.org"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-8 hover:bg-catholic-cream transition-colors group text-center"
          >
            <h3 className="font-serif text-lg text-stone-900 font-normal group-hover:text-stone-700 mb-2">
              Formed
            </h3>
            <p className="text-stone-500 font-sans text-sm">formed.org — Catholic audio, video & ebooks</p>
          </a>
        </div>
      </section>
    </div>
  );
}
