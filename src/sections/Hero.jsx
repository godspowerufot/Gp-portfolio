import { useEffect, useRef, useState } from 'react';
import Reveal from '../components/Reveal.jsx';

const CIRCLE_TEXT = 'PRODUCT  ·  FRONTEND  ·  EVM  ·  BUILD  ·  SHIP  ·  ';

function CircularScrollText() {
  const ref = useRef(null);
  const [rotation, setRotation] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const hero = ref.current?.closest('section');
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const total = Math.max(hero.offsetHeight, 1);
      const raw = Math.min(1, Math.max(0, -rect.top / (total * 0.85)));
      setProgress(raw);
      setRotation(raw * 220);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute right-[6%] top-[18%] z-10 size-[clamp(160px,18vw,220px)] max-md:right-6 max-md:top-28 max-md:size-[140px]"
      style={{
        opacity: 0.2 + progress * 0.75,
        transform: `scale(${0.92 + progress * 0.12})`,
        transition: 'opacity 0.2s linear, transform 0.2s linear',
      }}
      aria-hidden
    >
      <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
        <defs>
          <path
            id="hero-circle-path"
            d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
            fill="none"
          />
        </defs>
        <g style={{ transformOrigin: '100px 100px', transform: `rotate(${rotation}deg)` }}>
          <text
            className="fill-ink uppercase"
            style={{
              fontSize: '11.5px',
              letterSpacing: '0.22em',
              fontFamily: 'Inter Tight, system-ui, sans-serif',
              fontWeight: 500,
            }}
          >
            <textPath href="#hero-circle-path" startOffset="0%">
              {CIRCLE_TEXT.repeat(2)}
            </textPath>
          </text>
        </g>
        <circle cx="100" cy="100" r="78" fill="none" stroke="#EAEAEA" strokeWidth="1" />
        <circle cx="100" cy="100" r="3" fill="#0A0A0A" />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pt-40 pb-30 max-sm:min-h-0 max-sm:pt-22 max-sm:pb-20 overflow-hidden">
      <CircularScrollText />

      <div className="max-w-[1280px] w-full mx-auto px-10 max-sm:px-6 relative z-20">
        <div className="grid grid-cols-2 gap-20 items-end max-md:grid-cols-1 max-md:gap-10">
          <div>
            <Reveal>
              <h1 className="text-[clamp(40px,5.5vw,64px)] font-medium tracking-[-0.045em] leading-[1.05] text-ink max-w-[14ch]">
                Building products that people actually use.
              </h1>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-7 text-lg text-ink tracking-tight">
                Frontend Engineer &amp;<br />
                Blockchain developer.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 text-base text-muted max-w-[42ch] leading-relaxed">
                I design and build modern digital products, Web3/web2 applications and AI-powered experiences.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="flex flex-wrap gap-3 mt-10">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center text-[15px] font-medium px-7 py-3.5 rounded-full bg-black text-white hover:opacity-75 transition-opacity duration-250"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center text-[15px] font-medium px-7 py-3.5 rounded-full border border-line text-ink hover:bg-ink hover:text-white hover:border-ink transition-colors duration-250"
                >
                  Contact
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160} className="flex justify-end max-md:justify-center max-md:order-first">
            <div className="group relative w-full max-w-[420px] aspect-4/5 rounded-[18px] overflow-hidden border border-line bg-black max-md:max-w-[320px] max-md:mx-auto">
              <img
                src="/hero-portrait.png"
                alt="Godspower Ufot"
                className="w-full h-full object-cover object-bottom transition-transform duration-600 ease-out-expo group-hover:scale-[1.02]"
              />
              <p className="absolute bottom-5 left-5 right-5 text-[14px] font-medium tracking-tight text-white opacity-0 translate-y-1 transition-all duration-400 ease-(--ease-out-expo) group-hover:opacity-100 group-hover:translate-y-0">
                Godspower Ufot
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
