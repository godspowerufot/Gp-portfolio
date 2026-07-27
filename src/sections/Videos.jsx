import { useEffect, useRef, useState } from 'react';
import Reveal from '../components/Reveal.jsx';

const videos = [
  {
    id: 'sparkgas',
    title: 'Sparkgas',
    description:
      'Monad gas sponsorship demo: claim free gas with a signature, sponsor-funded vault, and paymaster-style relayer flow.',
    videoUrl: '/video/video1.mp4',
    tag: 'Web3',
  },
  {
    id: 'somnia-reactivity',
    title: 'Somnia On-chain Reactivity',
    description:
      'How fast on-chain data can be read on Somnia: reactive blockchain reads in real time.',
    videoUrl: '/video/video2.mp4',
    tag: 'Web3',
  },
  {
    id: 'predictos',
    title: 'PredictOS Copy Trading',
    description:
      'Hackathon build: copy trading tool I contributed to PredictOS for mirroring trades and following strategies.',
    videoUrl: '/video/video3.mp4',
    tag: 'Hackathon',
  },
  {
    id: 'project-showreel',
    title: 'Project Showreel',
    description:
      'A compilation of shipped work across Web2 and Web3: interfaces, dashboards, and on-chain products in motion.',
    videoUrl: '/video/video4.mp4',
    tag: 'Showreel',
  },
];

function VideoPoster({ src }) {
  return (
    <video
      src={src}
      muted
      playsInline
      preload="metadata"
      aria-hidden
      className="absolute inset-0 w-full h-full object-cover grayscale transition-[filter] duration-500 group-hover:grayscale-0"
    />
  );
}

function VideoModal({ video, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-200 flex items-center justify-center p-6 max-sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
    >
      <button
        type="button"
        aria-label="Close video"
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-[960px] bg-white border border-line rounded-[18px] overflow-hidden">
        <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-line">
          <div className="min-w-0">
            <p className="text-[11px] tracking-[0.16em] uppercase text-muted mb-1">Product video</p>
            <h3 className="text-[15px] font-medium tracking-tight truncate">{video.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="size-10 shrink-0 flex items-center justify-center rounded-full border border-line text-ink hover:bg-ink hover:text-white hover:border-ink transition-colors duration-250"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4.5">
              <line x1="5" y1="5" x2="19" y2="19" />
              <line x1="19" y1="5" x2="5" y2="19" />
            </svg>
          </button>
        </div>

        <div className="aspect-video bg-ink">
          <video
            key={video.id}
            className="w-full h-full"
            controls
            autoPlay
            playsInline
            src={video.videoUrl}
          >
            Your browser does not support video playback.
          </video>
        </div>
      </div>
    </div>
  );
}

export default function Videos() {
  const [active, setActive] = useState(null);
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  function updateButtons() {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanPrev(track.scrollLeft > 4);
    setCanNext(maxScroll > 0 && track.scrollLeft < maxScroll - 4);
  }

  useEffect(() => {
    updateButtons();
    window.addEventListener('resize', updateButtons);
    return () => window.removeEventListener('resize', updateButtons);
  }, []);

  function scrollByCard(direction) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('article');
    const step = card ? card.offsetWidth + 24 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * step, behavior: 'smooth' });
  }

  return (
    <section className="py-14 max-sm:py-12" id="videos">
      <div className="max-w-7xl mx-auto px-10 max-sm:px-5">
        <Reveal duration={1200}>
          <p className="text-sm text-muted mb-6">Videos</p>
          <h2 className="text-[clamp(28px,3.2vw,32px)] font-medium tracking-tight leading-tight mb-4">
            Watch some of the work.
          </h2>
          <p className="text-[15px] text-muted mb-14 max-w-[42ch]">
            Short demos and walkthroughs. Press play to see the products in motion.
          </p>
        </Reveal>

        <Reveal>
          <div
            ref={trackRef}
            onScroll={updateButtons}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {videos.map((video) => (
              <article
                key={video.id}
                className="group flex-none w-[min(420px,82vw)] snap-start border border-line rounded-[18px] overflow-hidden bg-white transition-colors duration-300 ease-(--ease-out-expo) hover:border-ink max-sm:w-[min(340px,88vw)]"
              >
                <button
                  type="button"
                  onClick={() => setActive(video)}
                  className="w-full text-left focus-visible:outline-none"
                >
                  <div className="relative aspect-video bg-[#F5F5F5] border-b border-line overflow-hidden">
                    <VideoPoster src={video.videoUrl} />

                    <span className="absolute inset-0 flex items-center justify-center bg-ink/10 transition-colors duration-300 group-hover:bg-ink/5">
                      <span className="size-14 rounded-full border border-line bg-white flex items-center justify-center transition-transform duration-300 ease-(--ease-out-expo) group-hover:scale-105">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="size-5 ml-0.5 text-ink">
                          <path d="M8 5.5v13l11-6.5L8 5.5z" />
                        </svg>
                      </span>
                    </span>

                    <span className="absolute top-4 left-4 text-[12px] font-medium bg-white border border-line rounded-full px-3 py-1.5 text-ink capitalize">
                      {video.tag}
                    </span>

                    <span className="absolute bottom-4 left-4 text-[12px] font-medium bg-white border border-line rounded-full px-3 py-1.5 text-ink">
                      Play
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="text-[17px] font-medium tracking-tight mb-2">{video.title}</h3>
                    <p className="text-[14px] text-muted leading-relaxed">{video.description}</p>
                  </div>
                </button>
              </article>
            ))}
          </div>

          <div className="flex items-center justify-end gap-2.5 mt-7">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={!canPrev}
              aria-label="Previous videos"
              className="inline-flex items-center justify-center h-11 min-w-11 px-4 border border-line rounded-full text-ink text-sm font-medium bg-white transition-colors duration-250 enabled:hover:bg-ink enabled:hover:text-white enabled:hover:border-ink disabled:opacity-35"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4.5">
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={!canNext}
              aria-label="Next videos"
              className="inline-flex items-center justify-center gap-2 h-11 min-w-11 px-4 border border-line rounded-full text-ink text-sm font-medium bg-white transition-colors duration-250 enabled:hover:bg-ink enabled:hover:text-white enabled:hover:border-ink disabled:opacity-35"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4.5">
                <path d="M9 6l6 6-6 6" />
              </svg>
              <span>Next</span>
            </button>
          </div>
        </Reveal>
      </div>

      {active && <VideoModal video={active} onClose={() => setActive(null)} />}
    </section>
  );
}
