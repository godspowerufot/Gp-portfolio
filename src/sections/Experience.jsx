import { useState } from 'react';
import Reveal from '../components/Reveal.jsx';

const experience = [
  {
    id: 'quirvox',
    year: '2025 — Present',
    role: 'Frontend Engineer',
    company: 'Quirvox',
    track: 'Web2',
    summary:
      'Shipped multiple production applications for Quirvox — a customer-facing real estate platform, an internal admin dashboard, and the marketing site that brought users in.',
    did: [
      'Built the company\'s real estate application end to end — property search, listing detail, and enquiry flows that turned browsing into qualified leads.',
      'Designed and shipped the admin dashboard the team uses to monitor internal systems, giving non-engineers live visibility instead of waiting on developers.',
      'Built the landing page that became the company\'s main acquisition channel, driving a significant lift in signups and inbound interest.',
      'Delivered several products on one shared component system, so each new app shipped faster and stayed visually consistent across the brand.',
    ],
  },
  {
    id: 'traders-mentors-hub',
    year: '2025 — 2026',
    role: 'Frontend Lead — Contract',
    company: 'Traders Mentors Hub',
    track: 'Web2',
    summary:
      'Led the frontend for a trading mentorship platform — chat, live sessions, trade views, and Stripe-powered subscriptions.',
    did: [
      'Built a real-time chat system and a clean landing page that made it easy for traders to discover the platform and talk to mentors.',
      'Shipped the traders view for reviewing live and past trades, plus financial tools so users could track subscriptions and transactions.',
      'Integrated YouTube, Zoom, and Stripe payments so learning, live sessions, and subscriptions worked as one smooth experience.',
      'Reviewed PRs and set frontend standards, helping the team ship consistent UI without slowing delivery.',
    ],
  },
  {
    id: 'ilabs',
    year: '2025 — 2026',
    role: 'Frontend Engineer',
    company: 'iLabs',
    track: 'Web2',
    summary:
      'Led frontend delivery across client products and iLabs’ education platform, serving users and students across global markets.',
    did: [
      'Led frontend development for multiple client projects, delivering accessible and reliable products for audiences across different markets.',
      'Built Faith Point AI, a faith-based application serving more than 444 active users and adopted by churches across Africa.',
      'Developed the iLabs website, helping attract and convert students into the company’s quarterly EdTech programs.',
      'Coordinated a team of frontend developers, reviewed code, and kept project quality and delivery deadlines on track.',
    ],
  },
  {
    id: 'luxgroup',
    year: 'Jun 2025 — Sep 2025',
    role: 'Frontend Developer — Contract',
    company: 'Luxgroup',
    track: 'Web2',
    summary:
      'Built several real estate brand websites for a UK company, taking each one from UI design through to a production-ready application.',
    did: [
      'Developed 3 major brand websites end to end — from UI design to full functionality and production release.',
      'Built a series of real estate websites with clean, responsive interfaces tailored to each brand.',
      'Worked closely with a Forbes-recognised backend engineer to integrate AI features into a clear, usable product.',
      'Turned design mockups into production-ready frontend applications, collaborating across cross-functional teams.',
    ],
  },
  {
    id: 'mdao',
    year: '2024 — 2025',
    role: 'Blockchain Engineer — Contract',
    company: 'MDAO',
    track: 'Web3',
    summary:
      'Delivered the token presale end to end for a China-based client — the Solidity contracts and the presale website that raised over $32k on-chain.',
    did: [
      'Wrote and deployed the EVM presale smart contract that handled over $32,000 in on-chain contributions safely and transparently.',
      'Implemented the token allocation logic in-contract, so every contributor received the correct amount without manual reconciliation.',
      'Built the presale website and wallet connection flow, giving buyers a clear path from connecting a wallet to a confirmed transaction.',
      'Handled pending, failed, and edge-case transaction states so contributors always knew exactly where their funds stood.',
    ],
  },
];

export default function Experience() {
  const [openId, setOpenId] = useState(null);

  function toggle(id) {
    setOpenId((current) => (current === id ? null : id));
  }

  return (
    <section className="py-14 max-sm:py-12" id="experience">
      <div className="max-w-[1280px] mx-auto px-10 max-sm:px-6">
        <Reveal>
          <p className="text-sm text-muted mb-6">Experience</p>
          <h2 className="text-[clamp(28px,3.2vw,32px)] font-medium tracking-tight leading-tight mb-4">
            Where I've been.
          </h2>
          <p className="text-[15px] text-muted mb-12 max-w-[42ch]">
            Click a role to see what I shipped.
          </p>
        </Reveal>

        <div className="flex flex-col border-t border-line">
          {experience.map((item, i) => {
            const isOpen = openId === item.id;

            return (
              <Reveal key={item.id} delay={i * 60} className="border-b border-line">
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  className="w-full grid grid-cols-[120px_1fr_auto] gap-8 py-5 items-center text-left max-md:grid-cols-[72px_1fr_auto] max-md:gap-4 max-sm:py-4"
                >
                  <span className="text-sm text-muted">{item.year}</span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-1">
                      <h3 className="text-xl font-medium tracking-tight max-sm:text-lg">{item.role}</h3>
                      <span className="text-[12px] text-muted border border-line rounded-full px-2.5 py-0.5">
                        {item.track}
                      </span>
                    </div>
                    <p className="text-[15px] text-muted">{item.company}</p>
                  </div>
                  <span
                    className={`size-9 shrink-0 flex items-center justify-center rounded-full border border-line text-ink transition-transform duration-300 ease-(--ease-out-expo) ${
                      isOpen ? 'rotate-45 bg-ink text-white border-ink' : ''
                    }`}
                    aria-hidden
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-400 ease-(--ease-out-expo) ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-6 pr-5 max-md:pr-0 max-sm:pb-5">
                      <div className="max-w-[720px] md:ml-[150px] max-md:ml-[75px] max-sm:ml-0">
                        <p className="text-[16px] text-ink leading-relaxed mb-5 tracking-tight">
                          {item.summary}
                        </p>

                        <p className="text-[12px] tracking-[0.16em] uppercase text-muted mb-3">
                          What I did
                        </p>
                        <ul className="flex flex-col gap-2">
                          {item.did.map((point) => (
                            <li
                              key={point}
                              className="relative pl-4.5 text-[15px] text-muted leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[0.65em] before:w-1.5 before:h-px before:bg-ink"
                            >
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
