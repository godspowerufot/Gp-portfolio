import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CaseStudy from './pages/CaseStudy.jsx';
import CursorFollower from './components/CursorFollower.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ThemeToggle />
      <CursorFollower />
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<CaseStudy />} />
      </Routes>
    </>
  );
}
