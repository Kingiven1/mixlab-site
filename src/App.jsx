import { BrowserRouter, HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import StickyRegister from './components/StickyRegister';
import DraftBanner from './components/DraftBanner';
import Experience from './pages/Experience';
import Partners from './pages/Partners';
import Guide from './pages/Guide';
import LineupPage from './pages/LineupPage';
import Evolution from './pages/Evolution';
import { evolution } from './lib/content';
import NotFound from './pages/NotFound';

// Three main pages only. Everything else is a section, anchor or expandable detail.
// HashRouter is only used for the shareable preview build (VITE_HASH_ROUTER=1).
const Router = import.meta.env.VITE_HASH_ROUTER === '1' ? HashRouter : BrowserRouter;

// Preview-only build (VITE_PREVIEW_EVOLUTION=1) renders the exhibit at any path,
// so it can be reviewed on a static host. Never set this for production.
const PREVIEW_EVOLUTION = import.meta.env.VITE_PREVIEW_EVOLUTION === '1';

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // The exhibit page handles its own era anchors (sticky header offset).
    if (pathname === evolution.path || PREVIEW_EVOLUTION) return;
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { el.scrollIntoView(); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollManager />
      <a href="#main" style={{ position: 'absolute', left: '-9999px' }} onFocus={(e) => { e.target.style.left = '16px'; e.target.style.top = '16px'; e.target.style.zIndex = 100; }} onBlur={(e) => { e.target.style.left = '-9999px'; }}>
        Skip to content
      </a>
      <DraftBanner />
      <Nav />
      <main id="main">
        <Routes>
          <Route path="/" element={<Experience />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/lineup" element={<LineupPage />} />
          <Route path="/guide" element={<Guide />} />
          <Route path={evolution.path} element={<Evolution />} />
          <Route path="*" element={PREVIEW_EVOLUTION ? <Evolution /> : <NotFound />} />
        </Routes>
      </main>
      <Footer />
      {!PREVIEW_EVOLUTION && <StickyRegister />}
    </Router>
  );
}
