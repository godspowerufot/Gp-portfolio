import { useEffect, useRef, useState } from 'react';
import Reveal from '../components/Reveal.jsx';

const chapters = [
  {
    label: '01 , Who I am',
    text: "I'm Godspower Ufot, a frontend engineer. Most of the time I ship product interfaces people actually use. I also dabble deeply in blockchain , enough to write audited smart contracts and connect them cleanly to dApps ",
  },
  {
    label: '02 , What I build',
    text: "My work sits at the intersection of product and engineering. I build audited smart contracts that work hand in hand with dApps and clean frontend experiences. Over the past few years I've shipped AI tools, Web3 products, and internal platforms  from early prototypes through production releases.",
  },
  {
    label: '03 , What I build',
    text: "I've shipped real estate platforms, mentorship products, brand sites, and on-chain systems: audited contracts, presale flows, gas relayers, and the frontends that make them trustworthy. The same standards apply everywhere , readable UI, honest loading states, and engineering that holds up in production.",
  },
  {
    label: '04 , Off the clock',
    text: "Outside work I read, solve problems for fun, and play games. Reading keeps me curious. Problem solving is the same muscle I use in debugging and product decisions. Games taught me systems thinking , rules, feedback, and why small details change how something feels. That life shows up in how I build.",
  },
  {
    label: '05 , Why work with me',
    text: "If you need a frontend engineer who can own UI end to end, I bring craft and calm delivery. If you need someone who also understands EVM, wallets, and contract-to-dApp handoffs, that depth is already there. Either way: clear communication, ownership, and work that speaks for itself.",
  },
];

const entranceLines = [
  { text: 'Stepping into the work.', delay: 400 },
  { text: 'Godspower Ufot', delay: 1600, large: true },
  { text: 'Frontend engineer · Web2 & Web3', delay: 2800 },
  { text: 'A quiet walk through who I am, how I work, and what I enjoy.', delay: 3900 },
];

function AboutExperience({ onClose }) {
  // veil → threshold (walk-in) → story (teleprompter)
  const [phase, setPhase] = useState('veil');
  const [lineIndex, setLineIndex] = useState(-1);
  const [leaving, setLeaving] = useState(false);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

  const viewportRef = useRef(null);
  const rafRef = useRef(null);
  const autoScrollingRef = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [pausedByUser, setPausedByUser] = useState(false);
  const [chromeHidden, setChromeHidden] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const show = requestAnimationFrame(() => setVisible(true));
    const t1 = setTimeout(() => setPhase('threshold'), 700);
    return () => {
      document.body.style.overflow = '';
      cancelAnimationFrame(show);
      clearTimeout(t1);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    if (phase !== 'threshold') return;

    const timers = entranceLines.map((line, i) =>
      setTimeout(() => setLineIndex(i), line.delay)
    );

    const toStory = setTimeout(() => {
      setPhase('story');
      setTimeout(() => {
        setReady(true);
        setPlaying(true);
      }, 900);
    }, 5600);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(toStory);
    };
  }, [phase]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setLeaving(true);
        setPlaying(false);
        setTimeout(onClose, 520);
      }
      if (phase === 'story' && (e.key === ' ' || e.code === 'Space')) {
        e.preventDefault();
        setPlaying((p) => !p);
        setPausedByUser(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [phase, onClose]);

  useEffect(() => {
    if (phase !== 'story' || !ready) return;
    const viewport = viewportRef.current;
    if (!viewport) return;

    const isMobile = window.matchMedia('(max-width: 640px)').matches;
    const speed = isMobile ? 0.72 : 0.68;

    const tick = () => {
      if (playing && !pausedByUser) {
        autoScrollingRef.current = true;
        viewport.scrollTop += speed;
        const max = viewport.scrollHeight - viewport.clientHeight;
        const pct = max > 0 ? Math.min(100, (viewport.scrollTop / max) * 100) : 100;
        setProgress(pct);
        if (viewport.scrollTop >= max - 1) {
          setPlaying(false);
          setProgress(100);
        }
        requestAnimationFrame(() => {
          autoScrollingRef.current = false;
        });
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [phase, ready, playing, pausedByUser]);

  function takeManualControl() {
    if (autoScrollingRef.current) return;
    setPlaying(false);
    setPausedByUser(true);
    setChromeHidden(true);
  }

  function handleClose() {
    setLeaving(true);
    setPlaying(false);
    setTimeout(onClose, 520);
  }

  function handleScroll() {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const max = viewport.scrollHeight - viewport.clientHeight;
    setProgress(max > 0 ? Math.min(100, (viewport.scrollTop / max) * 100) : 0);
    if (!autoScrollingRef.current) takeManualControl();
  }

  function skipToStory() {
    setPhase('story');
    setTimeout(() => {
      setReady(true);
      setPlaying(true);
      setPausedByUser(false);
      setChromeHidden(false);
    }, 400);
  }

  function restart() {
    const viewport = viewportRef.current;
    if (viewport) {
      autoScrollingRef.current = true;
      viewport.scrollTop = 0;
      autoScrollingRef.current = false;
    }
    setProgress(0);
    setPausedByUser(false);
    setChromeHidden(false);
    setPlaying(true);
  }

  return (
    <div
      className={`fixed inset-0 z-200 about-modal bg-white text-ink transition-all duration-700 ease-(--ease-out-expo) ${
        leaving || !visible ? 'opacity-0' : 'opacity-100'
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-modal-title"
    >
      {/* Close always available after veil */}
      <button
        type="button"
        onClick={handleClose}
        aria-label="Close"
        className={`absolute top-5 right-5 z-30 size-10 flex items-center justify-center rounded-full border border-line text-ink hover:bg-ink hover:text-white hover:border-ink transition-all duration-500 ${
          phase === 'veil' ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4.5">
          <line x1="5" y1="5" x2="19" y2="19" />
          <line x1="19" y1="5" x2="5" y2="19" />
        </svg>
      </button>

      {/* THRESHOLD , walking into a life */}
      {phase !== 'story' && (
        <div
          className={`absolute inset-0 z-20 flex flex-col items-center justify-center px-8 transition-opacity duration-700 ease-(--ease-out-expo) ${
            phase === 'threshold' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="max-w-[640px] w-full text-center">
            <div className="mx-auto mb-14 flex items-center justify-center gap-4">
              <span
                className={`h-px bg-line transition-all duration-[1200ms] ease-(--ease-out-expo) ${
                  phase === 'threshold' ? 'w-16 opacity-100' : 'w-0 opacity-0'
                }`}
              />
              <span
                className={`text-[11px] tracking-[0.22em] uppercase text-muted transition-all duration-700 delay-150 ${
                  phase === 'threshold' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
              >
                Entering
              </span>
              <span
                className={`h-px bg-line transition-all duration-[1200ms] ease-(--ease-out-expo) ${
                  phase === 'threshold' ? 'w-16 opacity-100' : 'w-0 opacity-0'
                }`}
              />
            </div>

            <div className="relative min-h-[240px] flex flex-col items-center justify-center gap-5">
              {entranceLines.map((line, i) => {
                const visible = lineIndex >= i;
                return (
                  <p
                    key={line.text}
                    className={`transition-all duration-1000 ease-(--ease-out-expo) ${
                      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    } ${
                      line.large
                        ? 'text-[clamp(36px,6vw,64px)] font-medium tracking-[-0.045em] leading-[1.05] text-ink'
                        : i === 0
                          ? 'text-[15px] text-muted tracking-tight'
                          : 'text-[clamp(16px,2vw,20px)] text-muted leading-relaxed max-w-[36ch]'
                    }`}
                  >
                    {line.text}
                  </p>
                );
              })}
            </div>

            <button
              type="button"
              onClick={skipToStory}
              className={`mt-16 text-[13px] text-muted hover:text-ink transition-all duration-700 ${
                lineIndex >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              Skip intro →
            </button>
          </div>
        </div>
      )}

      {/* STORY , teleprompter */}
      <div
        className={`absolute inset-0 flex flex-col transition-all duration-1000 ease-(--ease-out-expo) ${
          phase === 'story' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
      >
        <div className="relative z-10 flex items-center justify-between gap-4 px-8 py-5 max-sm:px-5 border-b border-line pr-20">
          <div>
            <p className="text-[11px] tracking-[0.18em] uppercase text-muted mb-1">About</p>
            <h2 id="about-modal-title" className="text-[15px] font-medium tracking-tight text-ink">
              A walk through my work
            </h2>
          </div>
          <div
            className={`flex items-center gap-2 max-sm:hidden transition-opacity duration-300 ${
              chromeHidden ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <button
              type="button"
              onClick={restart}
              className="h-10 px-4 rounded-full border border-line text-[13px] font-medium text-ink hover:bg-ink hover:text-white hover:border-ink transition-colors duration-250"
            >
              Restart
            </button>
            <button
              type="button"
              onClick={() => {
                setChromeHidden(false);
                setPausedByUser(false);
                setPlaying((p) => !p);
              }}
              className="h-10 px-4 rounded-full border border-line text-[13px] font-medium text-ink hover:bg-ink hover:text-white hover:border-ink transition-colors duration-250"
            >
              {playing && !pausedByUser ? 'Pause' : 'Play'}
            </button>
          </div>
        </div>

        <div
          className={`relative z-10 h-px w-full bg-line transition-opacity duration-300 ${
            chromeHidden ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div
            className="h-full bg-ink transition-[width] duration-150 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="relative flex-1 min-h-0">
          <div
            className={`pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 z-10 flex justify-center transition-opacity duration-300 max-sm:hidden ${
              chromeHidden ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <div className="w-full max-w-[720px] px-8 max-sm:px-5">
              <div className="h-px bg-line" />
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 top-0 h-36 z-10 bg-linear-to-b from-white via-white/80 to-transparent max-sm:h-24" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 z-10 bg-linear-to-t from-white via-white/85 to-transparent max-sm:h-28" />

          <div
            ref={viewportRef}
            onScroll={handleScroll}
            onWheel={takeManualControl}
            onTouchMove={takeManualControl}
            className="h-full overflow-y-auto overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="mx-auto max-w-[720px] px-8 max-sm:px-5 pt-[20vh] pb-[45vh]">
              <p className="text-[13px] tracking-[0.16em] uppercase text-muted mb-10 text-center max-sm:mb-8">
                <span className="max-sm:hidden">Take your time · Space to pause · Esc to leave</span>
                <span className="hidden max-sm:inline">Scroll anytime to take control</span>
              </p>

              <div className="flex flex-col gap-16 max-sm:gap-12">
                {chapters.map((chapter) => (
                  <article key={chapter.label} className="text-center">
                    <p className="text-[12px] tracking-[0.2em] uppercase text-muted mb-5">
                      {chapter.label}
                    </p>
                    <p className="text-[clamp(22px,3.2vw,34px)] font-medium tracking-tight leading-[1.35] text-ink">
                      {chapter.text}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-24 text-center">
                <p className="text-[13px] tracking-[0.16em] uppercase text-muted mb-6">Thanks for walking through</p>
                <a
                  href="#contact"
                  onClick={handleClose}
                  className="inline-flex items-center justify-center text-[15px] font-medium px-7 py-3.5 rounded-full bg-black text-white hover:opacity-75 transition-opacity duration-250"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`relative z-10 flex items-center justify-between gap-4 px-8 py-4 max-sm:px-5 border-t border-line text-[12px] text-muted transition-opacity duration-300 ${
            chromeHidden ? 'opacity-40' : 'opacity-100'
          }`}
        >
          <span>{Math.round(progress)}% read</span>
          <span className="max-sm:hidden">{chromeHidden ? 'Manual scroll' : 'Scroll anytime to take control'}</span>
          <span>{playing && !pausedByUser ? 'Auto-playing' : 'Paused'}</span>
        </div>
      </div>
    </div>
  );
}

function FadeWords({ text, className = '', delay = 0, wordDelay = 45 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const words = text.split(' ');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className={`inline-block transition-[opacity,transform] duration-700 ease-(--ease-out-expo) ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
          style={{
            transitionDelay: inView ? `${delay + i * wordDelay}ms` : '0ms',
            marginRight: i === words.length - 1 ? 0 : '0.28em',
          }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}

function CartoonFrame() {
  const cards = [
    {
      tilt: '-10deg',
      z: 1,
      pos: 'left-2 top-6',
      art: (
        <svg viewBox="0 0 160 160" className="w-full h-full" aria-hidden>
          <rect width="160" height="160" fill="#F5F5F5" />
          <circle cx="80" cy="68" r="28" fill="#E8E8E8" stroke="#0A0A0A" strokeWidth="2" />
          <path d="M52 68c0-20 12-34 28-34s28 14 28 34" fill="none" stroke="#0A0A0A" strokeWidth="2" />
          <circle cx="70" cy="66" r="3" fill="#0A0A0A" />
          <circle cx="90" cy="66" r="3" fill="#0A0A0A" />
          <path d="M72 80c4 6 12 6 16 0" fill="none" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" />
          <path d="M48 118c10-16 54-16 64 0" fill="#EDEDED" stroke="#0A0A0A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      tilt: '7deg',
      z: 3,
      pos: 'right-0 top-0',
      art: (
        <svg viewBox="0 0 160 160" className="w-full h-full" aria-hidden>
          <rect width="160" height="160" fill="#FAFAFA" />
          <rect x="46" y="40" width="68" height="58" rx="28" fill="#EAEAEA" stroke="#0A0A0A" strokeWidth="2" />
          <path d="M54 52h52M54 52c0-10 10-16 26-16s26 6 26 16" fill="none" stroke="#0A0A0A" strokeWidth="2" />
          <circle cx="68" cy="66" r="2.5" fill="#0A0A0A" />
          <circle cx="92" cy="66" r="2.5" fill="#0A0A0A" />
          <rect x="74" y="74" width="12" height="3" rx="1.5" fill="#0A0A0A" />
          <path d="M50 116c12-18 48-18 60 0" fill="#F0F0F0" stroke="#0A0A0A" strokeWidth="2" />
          <circle cx="118" cy="48" r="8" fill="none" stroke="#0A0A0A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      tilt: '-4deg',
      z: 2,
      pos: 'left-8 bottom-2',
      art: (
        <svg viewBox="0 0 160 160" className="w-full h-full" aria-hidden>
          <rect width="160" height="160" fill="#F7F7F7" />
          <ellipse cx="80" cy="70" rx="30" ry="32" fill="#EDEDED" stroke="#0A0A0A" strokeWidth="2" />
          <path d="M55 58c8-18 42-18 50 0" fill="#0A0A0A" />
          <circle cx="68" cy="70" r="3" fill="#0A0A0A" />
          <circle cx="92" cy="70" r="3" fill="#0A0A0A" />
          <path d="M70 86c5 4 15 4 20 0" fill="none" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" />
          <path d="M45 122c14-20 56-20 70 0" fill="#E8E8E8" stroke="#0A0A0A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      tilt: '9deg',
      z: 4,
      pos: 'right-4 bottom-8',
      art: (
        <svg viewBox="0 0 160 160" className="w-full h-full" aria-hidden>
          <rect width="160" height="160" fill="#F3F3F3" />
          <circle cx="80" cy="66" r="26" fill="#EAEAEA" stroke="#0A0A0A" strokeWidth="2" />
          <path d="M58 55h44v8c0 4-4 8-8 8H66c-4 0-8-4-8-8z" fill="#0A0A0A" />
          <circle cx="70" cy="68" r="2.5" fill="#0A0A0A" />
          <circle cx="90" cy="68" r="2.5" fill="#0A0A0A" />
          <path d="M74 78h12" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" />
          <path d="M52 118c10-14 46-14 56 0" fill="#EDEDED" stroke="#0A0A0A" strokeWidth="2" />
          <path d="M108 42l6-10M114 48l10-4" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <div className="group/frame w-full max-w-[520px] ml-auto max-md:mx-auto">
      <div className="cartoon-stack relative w-full aspect-square" aria-hidden>
        {/* outer frame */}
        <div className="absolute inset-0 border border-line rounded-[26px] pointer-events-none" />
        <div className="absolute inset-4 border border-line/70 rounded-[22px] pointer-events-none" />

        {cards.map((card, i) => (
          <div
            key={i}
            className={`cartoon-card absolute ${card.pos} w-[44%] aspect-square rounded-[18px] overflow-hidden border border-line bg-white shadow-[0_10px_30px_rgba(10,10,10,0.07)]`}
            style={{
              zIndex: card.z,
              '--tilt': card.tilt,
              animationDelay: `${i * 0.35}s`,
            }}
          >
            <div className="absolute inset-[8px] rounded-[12px] overflow-hidden border border-line">
              {card.art}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-5 text-center text-[14px] font-medium tracking-tight text-ink opacity-0 translate-y-1 transition-all duration-400 ease-(--ease-out-expo) group-hover/frame:opacity-100 group-hover/frame:translate-y-0">
        Godspower Ufot
      </p>
    </div>
  );
}

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-14 max-sm:py-12" id="about">
      <div className="max-w-[1280px] mx-auto px-10 max-sm:px-6">
        <div className="grid grid-cols-[1fr_520px] gap-20 items-center max-lg:grid-cols-[1fr_420px] max-lg:gap-12 max-md:grid-cols-1">
          <div className="min-w-0 max-w-[560px]">
            <FadeWords text="About" className="text-sm text-muted mb-6" wordDelay={60} />

            <FadeWords
              text="I'm Godspower Ufot, a frontend engineer. I build interfaces people actually use , and I often dabble in blockchain so products stay seamless from UI to on-chain."
              className="text-[clamp(22px,2.8vw,32px)] font-medium tracking-tight leading-snug text-ink"
              delay={100}
              wordDelay={38}
            />

            <FadeWords
              text="Whether it's a Web2 product or a dApp with audited contracts, I care about clear communication, ownership, and making complex systems feel simple."
              className="mt-7 text-[clamp(16px,1.7vw,18px)] text-muted leading-relaxed"
              delay={180}
              wordDelay={30}
            />

            <FadeWords
              text="Off the clock I read, solve problems, and play games , habits that keep me curious and sharp when I ship."
              className="mt-5 text-[clamp(16px,1.7vw,18px)] text-muted leading-relaxed"
              delay={240}
              wordDelay={36}
            />

            <div className="mt-9">
              <Reveal delay={360} duration={1000}>
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="group relative text-[15px] font-medium text-ink pb-0.5"
                >
                  Read more →
                  <span className="absolute left-0 bottom-0 h-px w-full bg-ink origin-left transition-transform duration-300 ease-(--ease-out-expo) group-hover:scale-x-40" />
                </button>
              </Reveal>
            </div>
          </div>

          <Reveal duration={1100} className="max-md:order-last">
            <CartoonFrame />
          </Reveal>
        </div>
      </div>

      {open && <AboutExperience onClose={() => setOpen(false)} />}
    </section>
  );
}
