import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-stone-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 border border-stone-800 flex items-center justify-center">
                <span className="text-xs text-stone-800">✝</span>
              </div>
              <div>
                <div className="text-[9px] tracking-[0.45em] uppercase text-stone-400 font-sans leading-none">Catholic</div>
                <div className="text-[10px] tracking-[0.35em] uppercase font-semibold text-stone-900 font-sans leading-none mt-0.5">Faith</div>
              </div>
            </div>
            <p className="text-xs font-sans text-stone-400 leading-relaxed">
              A comprehensive guide to Catholic faith, tradition, and practice.
            </p>
          </div>

          <div>
            <h4 className="text-[9px] tracking-[0.4em] uppercase text-stone-400 font-sans mb-4">Faith & Doctrine</h4>
            <ul className="space-y-2">
              {[
                { to: "/evangelium", label: "Evangelium" },
                { to: "/formulas", label: "Doctrine" },
                { to: "/verses", label: "Bible Verses" },
              ].map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-xs font-sans text-stone-500 hover:text-stone-900 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[9px] tracking-[0.4em] uppercase text-stone-400 font-sans mb-4">Devotion</h4>
            <ul className="space-y-2">
              {[
                { to: "/saints", label: "Saint of the Day" },
                { to: "/prayers", label: "Catholic Prayers" },
                { to: "/information", label: "Catholic Info" },
              ].map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-xs font-sans text-stone-500 hover:text-stone-900 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[9px] tracking-[0.4em] uppercase text-stone-400 font-sans mb-4">Resources</h4>
            <ul className="space-y-2">
              {[
                { href: "https://cccref.com", label: "Catechism Reference" },
                { href: "https://formed.org", label: "Formed" },
              ].map(l => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer"
                    className="text-xs font-sans text-stone-500 hover:text-stone-900 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/references" className="text-xs font-sans text-stone-500 hover:text-stone-900 transition-colors">
                  All References
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-100 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[10px] font-sans text-stone-400 italic font-serif">
            "Ignorance of Scripture is ignorance of Christ." — St. Jerome
          </p>
          <p className="text-[10px] font-sans text-stone-400 tracking-wide">
            © {new Date().getFullYear()} Catholic Faith
          </p>
        </div>
      </div>
    </footer>
  );
}
