import { Routes, Route } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home";
import EvangeliumPage from "./pages/evangelium/EvangeliumPage";
import SaintsPage from "./pages/saints/SaintsPage";
import SaintDetail from "./pages/saints/SaintDetail";
import VersesPage from "./pages/verses/VersesPage";
import PrayersPage from "./pages/prayers/PrayersPage";
import PrayerDetail from "./pages/prayers/PrayerDetail";
import ArticlesPage from "./pages/articles/ArticlesPage";
import ArticleDetail from "./pages/articles/ArticleDetail";
import FormulasPage from "./pages/formulas/FormulasPage";
import ReferencesPage from "./pages/references/ReferencesPage";
import AdminDashboard from "./pages/admin/AdminDashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="evangelium" element={<EvangeliumPage />} />
        <Route path="saints" element={<SaintsPage />} />
        <Route path="saints/:id" element={<SaintDetail />} />
        <Route path="verses" element={<VersesPage />} />
        <Route path="prayers" element={<PrayersPage />} />
        <Route path="prayers/:slug" element={<PrayerDetail />} />
        <Route path="information" element={<ArticlesPage />} />
        <Route path="information/:slug" element={<ArticleDetail />} />
        <Route path="formulas" element={<FormulasPage />} />
        <Route path="references" element={<ReferencesPage />} />
      </Route>
      {/* Admin has its own full-screen layout */}
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}
