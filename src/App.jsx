import { BrowserRouter, HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import StickyRegister from './components/StickyRegister';
import DraftBanner from './components/DraftBanner';
import Experience from './pages/Experience';
import Partners from './pages/Partners';
import Guide from './pages/Guide';
import NotFound from './pages/NotFound';

// Three main pages only. Everything else is a section, anchor or expandable detail.
// HashRouter is only used for the shareable preview build (VITE_HASH_ROUTER=1).
const Router = import.meta.env.VITE_HASH_ROUTER === '1' ? HashRouter : BrowserRouter;

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
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
          <Route path="/guide" element={<Guide />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <StickyRegister />
    </Router>
  );
}
