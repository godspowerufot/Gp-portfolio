import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import { projects } from '../data/projects.jsx';

const tabs = [
  { id: 'web2', label: 'Web2' },
  { id: 'web3', label: 'Web3' },
];

export default function Projects() {
  const [filter, setFilter] = useState('web2');
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const visible = projects.filter((p) => p.category === filter);

  function updateButtons() {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanPrev(track.scrollLeft > 4);
    setCanNext(maxScroll > 0 && track.scrollLeft < maxScroll - 4);
  }

  useEffect(() => {
    trackRef.current?.scrollTo({ left: 0 });
    updateButtons();
  }, [filter]);

  useEffect(() => {
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
    <section className="py-14 max-sm:py-12" id="projects">
      <div className="max-w-[1280px] mx-auto px-10 max-sm:px-5">
        <Reveal>
          <div className="flex items-end justify-between gap-6 mb-12 flex-wrap max-sm:mb-8">
            <div>
              <p className="text-sm text-muted mb-6">Selected Projects</p>
              <h2 className="text-[clamp(28px,3.2vw,32px)] font-medium tracking-tight leading-tight mb-3">
                Work that shipped.
              </h2>
              <p className="text-[15px] text-muted max-w-[42ch]">
                Open the live product, or read the case study — your choice.
              </p>
            </div>

            <div className="inline-flex items-center gap-1 p-1 border border-line rounded-full bg-white" role="tablist" aria-label="Project category">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={filter === tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`text-sm font-medium px-4.5 py-2 rounded-full transition-colors duration-250 ${
                    filter === tab.id ? 'bg-black text-white' : 'text-muted hover:text-ink'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div
            ref={trackRef}
            onScroll={updateButtons}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {visible.map((project) => (
              <article
                key={project.slug}
                className="group flex-none w-[min(520px,82vw)] snap-start border border-line rounded-[18px] overflow-hidden bg-white transition-colors duration-300 ease-(--ease-out-expo) hover:border-ink max-sm:w-[min(420px,88vw)]"
              >
                <Link
                  to={`/project/${project.slug}`}
                  className="block focus-visible:outline-none"
                  aria-label={`Read case study: ${project.name}`}
                >
                  <div className="relative overflow-hidden bg-[#F5F5F5] aspect-16/10 border-b border-line">
                    <div className="w-full h-full grayscale transition-[filter,transform] duration-600 ease-(--ease-out-expo) group-hover:grayscale-0 group-hover:scale-[1.02]">
                      {project.cover}
                    </div>
                    <span className="absolute top-4 left-4 text-[12px] font-medium tracking-tight bg-white border border-line text-ink rounded-full px-3 py-1.5 capitalize">
                      {project.category}
                    </span>
                  </div>
                </Link>

                <div className="p-7 pb-8 max-sm:p-5.5 max-sm:pb-6.5">
                  <Link to={`/project/${project.slug}`} className="block focus-visible:outline-none">
                    <h3 className="text-[clamp(22px,2.4vw,28px)] font-medium tracking-tight leading-tight mb-3 hover:opacity-70 transition-opacity duration-250">
                      {project.name}
                    </h3>
                    <p className="text-[15px] text-muted leading-relaxed mb-5">{project.description}</p>
                  </Link>

                  <div className="flex flex-wrap gap-2 mb-7">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[13px] text-muted border border-line rounded-full px-3.5 py-1.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-1 border-t border-line">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/live inline-flex items-center gap-2 text-[15px] font-medium text-ink pt-5"
                      >
                        Live project
                        <span className="transition-transform duration-300 ease-(--ease-out-expo) group-hover/live:translate-x-0.5">
                          ↗
                        </span>
                      </a>
                    ) : null}
                    <Link
                      to={`/project/${project.slug}`}
                      className="group/case inline-flex items-center gap-2 text-[15px] font-medium text-muted hover:text-ink transition-colors duration-250 pt-5"
                    >
                      Case study
                      <span className="transition-transform duration-300 ease-(--ease-out-expo) group-hover/case:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="flex items-center justify-between gap-4 mt-7 flex-wrap">
            <p className="text-[13px] text-muted">
              Live project opens the product · Case study explains how it was built.
            </p>
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                disabled={!canPrev}
                aria-label="Previous projects"
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
                aria-label="Next projects"
                className="inline-flex items-center justify-center gap-2 h-11 min-w-11 px-4 border border-line rounded-full text-ink text-sm font-medium bg-white transition-colors duration-250 enabled:hover:bg-ink enabled:hover:text-white enabled:hover:border-ink disabled:opacity-35"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4.5">
                  <path d="M9 6l6 6-6 6" />
                </svg>
                <span>Next</span>
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
