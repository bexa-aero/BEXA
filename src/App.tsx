import { lazy, Suspense } from "react";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";

// Portable single-file builds are opened via file://, where history-based
// routing can't work, so fall back to hash routing there.
const Router = import.meta.env.VITE_PORTABLE ? HashRouter : BrowserRouter;
import PageWrapper from "@/components/layout/PageWrapper";
import ScrollToTop from "@/components/layout/ScrollToTop";
import HomePage from "@/pages/HomePage";

// Home ships in the main bundle; the rest load on demand so phones don't
// download and parse the whole site just to read the landing page.
// (Portable single-file builds collapse these back into one chunk via
// inlineDynamicImports in vite.config.ts.)
const TeamsPage = lazy(() => import("@/pages/TeamsPage"));
const EffortsPage = lazy(() => import("@/pages/EffortsPage"));
const JoinPage = lazy(() => import("@/pages/JoinPage"));
const SponsorPage = lazy(() => import("@/pages/SponsorPage"));
const ProjectPage = lazy(() => import("@/pages/ProjectPage"));

function App() {
  return (
    <Router>
      <MotionConfig reducedMotion="user">
      <ScrollToTop />
      <PageWrapper>
        {/* Dark, full-height fallback so a chunk fetch never flashes white */}
        <Suspense fallback={<div className="min-h-screen bg-bg" />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/efforts" element={<EffortsPage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/sponsor" element={<SponsorPage />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />
            {/* TODO: Future pages */}
            {/* <Route path="/news" element={<NewsPage />} /> */}
            {/* <Route path="/resources" element={<ResourcesPage />} /> */}
          </Routes>
        </Suspense>
      </PageWrapper>
      </MotionConfig>
    </Router>
  );
}

export default App;
