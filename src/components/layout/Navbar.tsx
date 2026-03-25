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
    <nav className="bg-white border-b border-accent-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary-600 rounded flex items-center justify-center group-hover:bg-primary-700 transition-colors">
              <span className="text-sm text-white">✝</span>
            </div>
            <div>
              <div className="text-xs font-bold text-accent-500 leading-none">CATHOLIC</div>
              <div className="text-xs font-semibold text-primary-600 leading-none">FAITH</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-xs font-semibold tracking-wide uppercase transition-colors ${
                    isActive
                      ? "text-primary-600"
                      : "text-accent-400 hover:text-accent-500"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-accent-400 hover:text-accent-500 transition-colors"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-accent-100 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-3 text-xs font-semibold tracking-wide uppercase transition-colors border-b border-accent-100 ${
                    isActive
                      ? "text-primary-600"
                      : "text-accent-400 hover:text-accent-500"
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
