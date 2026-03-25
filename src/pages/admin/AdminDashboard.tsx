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
import AdminImages from "./sections/AdminImages";
import { LogOut, Lock, Key } from "lucide-react";

type Section = "saints" | "verses" | "prayers" | "articles" | "formulas" | "references" | "evangelium" | "images";

const sections: { id: Section; label: string; icon: string }[] = [
  { id: "evangelium", label: "Evangelium", icon: "✝" },
  { id: "saints", label: "Saints", icon: "✨" },
  { id: "verses", label: "Verses", icon: "📜" },
  { id: "prayers", label: "Prayers", icon: "🙏" },
  { id: "articles", label: "Articles", icon: "⛪" },
  { id: "formulas", label: "Formulas", icon: "📋" },
  { id: "references", label: "References", icon: "🔗" },
  { id: "images", label: "Images", icon: "🖼️" },
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
    try {
      await seedMutation({});
      alert("Admin initialized successfully! You can now log in with your password.");
      setPassword("");
    } catch (e: unknown) {
      const error = e instanceof Error ? e.message : "Failed to initialize admin";
      setError(error);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md border border-accent-100">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">🔐</div>
          <h1 className="text-3xl font-bold text-primary-600">Admin Access</h1>
          <p className="text-gray-500 text-sm mt-2">Enter your admin password to continue</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-accent-100 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100"
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
              No admin configured yet. Click below to initialize with default credentials:
            </p>
            <button
              onClick={handleSeed}
              className="w-full btn-outline py-2 text-sm"
            >
              Initialize Admin (First Time Only)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function ChangePasswordModal({ token, onClose, onSuccess }: { token: string; onClose: () => void; onSuccess: () => void }) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const changePasswordMutation = useMutation(api.admin.changePassword);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!currentPassword) {
      setError("Current password is required");
      return;
    }

    if (!newPassword) {
      setError("New password is required");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (newPassword.length < 8) {
      setError("New password must be at least 8 characters");
      return;
    }

    setLoading(true);
    try {
      const result = await changePasswordMutation({
        token,
        currentPassword,
        newPassword,
      });
      if (result.success) {
        alert(result.message);
        onSuccess();
        onClose();
      }
    } catch (err: unknown) {
      const error = err instanceof Error ? err.message : "Failed to change password";
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <div className="text-4xl mb-2">🔑</div>
          <h2 className="text-2xl font-bold text-primary-600">Change Password</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full border border-accent-100 rounded-lg px-4 py-2 focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100"
              placeholder="Enter current password"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border border-accent-100 rounded-lg px-4 py-2 focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100"
              placeholder="Enter new password"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-accent-100 rounded-lg px-4 py-2 focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100"
              placeholder="Confirm new password"
              required
            />
          </div>

          <div className="text-sm text-gray-500">
            Password must be at least 8 characters long
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 btn-outline py-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 btn-primary py-2"
            >
              {loading ? "Changing..." : "Change Password"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const { isAdmin, token, login, logout } = useAdminAuth();
  const [activeSection, setActiveSection] = useState<Section>("evangelium");
  const [showChangePassword, setShowChangePassword] = useState(false);

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
      case "images": return <AdminImages />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-56 bg-primary-800 text-white flex flex-col shrink-0">
        <div className="p-5 border-b border-primary-700">
          <h1 className="text-lg font-bold text-accent-100">✝ Admin Panel</h1>
          <p className="text-xs text-white/60 mt-1">Catholic Faith</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                activeSection === s.id
                  ? "bg-primary-700 text-white"
                  : "text-white/70 hover:bg-primary-700 hover:text-white"
              }`}
            >
              <span>{s.icon}</span>
              {s.label}
            </button>
          ))}
        </nav>
        <div className="p-3 border-t border-primary-700 space-y-2">
          <button
            onClick={() => setShowChangePassword(true)}
            className="w-full flex items-center gap-2 px-3 py-2 rounded text-sm text-white/70 hover:text-white hover:bg-catholic-burgundy transition-colors"
          >
            <Key size={14} />
            Change Password
          </button>
          <button
            onClick={logout}
            className="w-full flex items-center gap-2 px-3 py-2 rounded text-sm text-white/70 hover:text-white hover:bg-primary-700 transition-colors"
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

      {/* Change Password Modal */}
      {showChangePassword && (
        <ChangePasswordModal 
          token={token!} 
          onClose={() => setShowChangePassword(false)}
          onSuccess={logout}
        />
      )}
    </div>
  );
}
