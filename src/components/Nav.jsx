import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ResumeModal from './ResumeModal.jsx';

const links = [
  { label: 'About', hash: '#about' },
  { label: 'Experience', hash: '#experience' },
  { label: 'Projects', hash: '#projects' },
  { label: 'Videos', hash: '#videos' },
  { label: 'Articles', hash: '#articles' },
  { label: 'Contact', hash: '#contact' },
];

export default function Nav({ solid = false }) {
  const [scrolled, setScrolled] = useState(solid);
  const [open, setOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    if (solid) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [solid]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isScrolled = solid || scrolled;

  function openResume() {
    setOpen(false);
    setResumeOpen(true);
  }

  return (
    <>
      <svg
        className="absolute w-0 h-0 overflow-hidden"
        aria-hidden
        focusable="false"
      >
        <filter id="nav-magnify" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.016"
            numOctaves="2"
            seed="7"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="1.4" result="softNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softNoise"
            scale="14"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <header
        className={`fixed inset-x-0 top-0 z-100 h-18 flex items-center border-b transition-all duration-300 ease-(--ease-out-expo) ${
          isScrolled
            ? 'glass-nav glass-nav-magnify border-line'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="w-full max-w-[1280px] mx-auto px-10 max-sm:px-6 flex items-center justify-between gap-8">
          <Link to="/" className="shrink-0" aria-label="Godspower Ufot home">
            <span className="flex size-10 items-center justify-center rounded-full border border-line bg-black overflow-hidden transition-colors duration-250 hover:border-ink">
              <img
                src="/logo.png"
                alt="Godspower Ufot"
                width={28}
                height={28}
                className="size-7 object-contain"
              />
            </span>
          </Link>

          <nav className="flex items-center gap-9 max-sm:hidden" aria-label="Primary">
            {links.map(({ label, hash }) => (
              <Link
                key={label}
                to={`/${hash}`}
                className="group relative text-sm text-muted hover:text-ink transition-colors duration-250"
              >
                {label}
                <span className="absolute left-0 -bottom-0.5 h-px w-full bg-ink scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-(--ease-out-expo)" />
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={openResume}
            className="text-sm font-medium text-white bg-black px-5 py-2.5 rounded-full hover:opacity-75 transition-opacity duration-250 shrink-0 max-sm:hidden"
          >
            Resume
          </button>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="hidden max-sm:flex size-10 items-center justify-center text-ink"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5">
              {open ? (
                <>
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      <nav
        aria-hidden={!open}
        className={`fixed inset-0 z-90 mobile-nav-drawer bg-white pt-28 px-6 pb-10 flex-col gap-2 hidden max-sm:flex transition-transform duration-450 ease-(--ease-out-expo) ${
          open ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {links.map(({ label, hash }) => (
          <Link
            key={label}
            to={`/${hash}`}
            onClick={() => setOpen(false)}
            className="text-[28px] font-medium tracking-tight py-3 border-b border-line text-ink"
          >
            {label}
          </Link>
        ))}
        <button
          type="button"
          onClick={openResume}
          className="text-left text-[28px] font-medium tracking-tight py-3 border-b border-line text-ink"
        >
          Resume
        </button>
      </nav>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
