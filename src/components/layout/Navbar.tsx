import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/evangelium", label: "Evangelium" },
  { to: "/saints", label: "Saint a Day" },
  { to: "/verses", label: "All Verses" },
  { to: "/prayers", label: "Prayers" },
  { to: "/information", label: "Catholic Info" },
  { to: "/formulas", label: "Doctrine" },
  { to: "/references", label: "References" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-stone-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 border border-stone-800 flex items-center justify-center group-hover:border-catholic-gold group-hover:text-catholic-gold transition-colors">
              <span className="text-sm">✝</span>
            </div>
            <div>
              <div className="text-[9px] tracking-[0.45em] uppercase text-stone-400 font-sans leading-none">Catholic</div>
              <div className="text-[11px] tracking-[0.35em] uppercase font-semibold text-stone-900 font-sans leading-none mt-0.5">Faith</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-[10px] tracking-[0.25em] uppercase font-sans transition-colors ${
                    isActive
                      ? "text-stone-900 border-b border-stone-900 pb-0.5"
                      : "text-stone-400 hover:text-stone-900"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-stone-600 hover:text-stone-900 transition-colors"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-stone-100 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-3 text-[10px] tracking-[0.3em] uppercase font-sans transition-colors border-b border-stone-100 ${
                    isActive
                      ? "text-stone-900"
                      : "text-stone-400 hover:text-stone-900"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
