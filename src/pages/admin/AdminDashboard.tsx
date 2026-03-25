import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useAdminAuth } from "../../hooks/useAdminAuth";
import AdminSaints from "./sections/AdminSaints";
import AdminVerses from "./sections/AdminVerses";
import AdminPrayers from "./sections/AdminPrayers";
import AdminArticles from "./sections/AdminArticles";
import AdminFormulas from "./sections/AdminFormulas";
import AdminReferences from "./sections/AdminReferences";
import AdminEvangelium from "./sections/AdminEvangelium";
import { LogOut, Lock } from "lucide-react";

type Section = "saints" | "verses" | "prayers" | "articles" | "formulas" | "references" | "evangelium";

const sections: { id: Section; label: string; icon: string }[] = [
  { id: "evangelium", label: "Evangelium", icon: "✝" },
  { id: "saints", label: "Saints", icon: "✨" },
  { id: "verses", label: "Verses", icon: "📜" },
  { id: "prayers", label: "Prayers", icon: "🙏" },
  { id: "articles", label: "Articles", icon: "⛪" },
  { id: "formulas", label: "Formulas", icon: "📋" },
  { id: "references", label: "References", icon: "🔗" },
];

function LoginScreen({ onLogin }: { onLogin: (pw: string) => Promise<boolean> }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const seedMutation = useMutation(api.admin.seedAdmin);
  const isConfigured = useQuery(api.admin.isConfigured);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const ok = await onLogin(password);
    if (!ok) setError("Invalid password. Please try again.");
    setLoading(false);
  };

  const handleSeed = async () => {
    if (!password) { setError("Enter a password to set as admin password."); return; }
    try {
      await seedMutation({ password });
      alert("Admin password set! You can now log in.");
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <div className="min-h-screen bg-catholic-cream flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">🔐</div>
          <h1 className="font-serif text-3xl font-bold text-catholic-burgundy">Admin Access</h1>
          <p className="text-gray-500 text-sm mt-2">Enter your admin password to continue</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-catholic-burgundy"
              placeholder="Admin password"
              required
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary py-3 flex items-center justify-center gap-2"
          >
            <Lock size={16} />
            {loading ? "Checking..." : "Login"}
          </button>
        </form>

        {isConfigured === false && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 mb-3">
              No admin configured yet. Enter a password above and click below to set it:
            </p>
            <button
              onClick={handleSeed}
              className="w-full btn-outline py-2 text-sm"
            >
              Set as Admin Password (First Time Only)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const { isAdmin, token, login, logout } = useAdminAuth();
  const [activeSection, setActiveSection] = useState<Section>("evangelium");

  if (!isAdmin) {
    return <LoginScreen onLogin={login} />;
  }

  const renderSection = () => {
    switch (activeSection) {
      case "evangelium": return <AdminEvangelium token={token!} />;
      case "saints": return <AdminSaints token={token!} />;
      case "verses": return <AdminVerses token={token!} />;
      case "prayers": return <AdminPrayers token={token!} />;
      case "articles": return <AdminArticles token={token!} />;
      case "formulas": return <AdminFormulas token={token!} />;
      case "references": return <AdminReferences token={token!} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-56 bg-catholic-burgundy-dark text-white flex flex-col shrink-0">
        <div className="p-5 border-b border-catholic-burgundy">
          <h1 className="font-serif text-lg font-bold text-catholic-gold">✝ Admin Panel</h1>
          <p className="text-xs text-white/60 mt-1">Catholic Faith</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                activeSection === s.id
                  ? "bg-catholic-burgundy text-catholic-gold"
                  : "text-white/70 hover:bg-catholic-burgundy hover:text-white"
              }`}
            >
              <span>{s.icon}</span>
              {s.label}
            </button>
          ))}
        </nav>
        <div className="p-3 border-t border-catholic-burgundy">
          <button
            onClick={logout}
            className="w-full flex items-center gap-2 px-3 py-2 rounded text-sm text-white/70 hover:text-white hover:bg-catholic-burgundy transition-colors"
          >
            <LogOut size={14} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-6">
          {renderSection()}
        </div>
      </main>
    </div>
  );
}
