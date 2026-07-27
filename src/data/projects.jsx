/* Central project data: cards on the home page + full case study content. */

function Cover({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover object-top"
      loading="lazy"
    />
  );
}

export const projects = [
  {
    slug: 'traders-hub',
    name: 'Traders Mentors Hub',
    category: 'web2',
    description:
      'We connect retail traders to verified mentors in Forex, Crypto, brokers, and give mentors the tools to grow.',
    tags: ['React', 'TypeScript', 'Stripe',  'YouTube'],
    cover: <Cover src="/projects/traders-mentors-hub.jpg" alt="Traders Mentors Hub landing page" />,
    liveUrl: 'https://tradersmentorshub.com/',
    githubUrl: '',
    meta: {
      role: 'Frontend Lead (Contract)',
      duration: '2025 to 2026',
      year: '2025',
      stack: 'Next.js · TypeScript · Tailwindcss ',
    },
    sections: [
      {
        title: 'Overview',
        text: [
          'Traders Mentors Hub is a platform that connects retail traders to verified trading mentors across Forex, Crypto, Stocks, and Futures. Traders come to find the right mentor. Mentors come for tools that help them grow: courses, communities, live sessions, and reach.',
          'The product sits between education and marketplace: discovery on one side, real-time learning and commerce on the other. Live site: tradersmentorshub.com.',
        ],
      },
      {
        title: 'What I built',
        text: [
          'As Frontend Lead I owned the interfaces that make the platform usable day to day for traders, mentors, brokers, and admins.',
        ],
        list: [
          'Landing page that explains the value clearly and converts visitors into traders or mentors',
          'Real-time chat so mentors and traders and student  can communicate without leaving the product',
          'Traders view for reviewing live  trades in context',
          'YouTube and Zoom integrations so learners can watch lessons and join live sessions inside the platform',
          'Financial surfaces for subscriptions and transactions, with Stripe / Paystack checkout from the frontend',
          'Brokers dashboard where brokers can advertise and manage their presence on the platform',
          'Admin page so operators can see what is happening across the platform: users, activity, and health at a glance',
          'API integrations for advertisement placement and live pricing data',
        ],
      },
      {
        title: 'Challenges',
        text: [
          'Two hard problems defined this build: media and realtime.',
          'YouTube integration was not a simple embed. Embedding, playback control, and keeping the learning flow intact took careful reading of the docs and several iteration passes before video felt native to the product.',
          'WebSockets were another constraint: keeping chat and live status reliable under reconnects and edge cases. I worked through the documentation until the connection model was clear, then wired the UI around solid open, message, and recovery states so realtime communication stayed trustworthy.',
          'On payments, I learned how to drive Stripe and Paystack checkout from the frontend, then implemented a checkout system for brokers so advertising and subscriptions could settle without a clunky handoff. Several advertisement and pricing APIs were integrated so brokers and traders always saw current offers.',
        ],
      },
      {
        title: 'Outcome',
        text: [
          'The interfaces I shipped let traders do more without leaving the platform: chat with mentors, watch video, join sessions, track trades, and pay, while brokers can advertise and admins can monitor the system in real time.',
          'Realtime communication and in-product media turned the hub from a brochure into a place people actually work inside: end-to-end frontend ownership across marketplace UI, dashboards, payments, and live systems.',
        ],
      },
    ],
  },
  {
    slug: 'ilabs',
    name: 'iLabs',
    category: 'web2',
    description:
      'Company website for an innovation Labs : services, EdTech programs, and a payment flow for student enrollment.',
    tags: ['React', 'TypeScript', 'Payments', 'Tailwind'],
    cover: <Cover src="/projects/ilabs.jpg" alt="iLabs company website" />,
    liveUrl: 'https://ilabs.world/',
    githubUrl: '',
    meta: { role: 'Frontend Engineer', duration: 'Ongoing', year: '2024 to 2025', stack: 'React · TypeScript · Tailwind · Payments' },
    sections: [
      {
        title: 'Overview',
        text: [
          'iLabs is a full-stack innovation Labs. The website presents services, products, and an EdTech initiative that trains students, with clear information and a payment gateway for enrollment.',
        ],
      },
      {
        title: 'What I built',
        list: [
          'The company website from design to production',
          'EdTech program pages that explain courses and cohorts',
          'Payment gateway flow for student enrollment',
          'Clear service and product sections for global audiences',
        ],
      },
      {
        title: 'Outcome',
        text: [
          'The site became the main channel for attracting students into quarterly EdTech programs and explaining what iLabs offers to clients.',
        ],
      },
    ],
  },
  {
    slug: 'nurtura-africa',
    name: 'Nurtura Africa',
    category: 'web2',
    description:
      'A clean mental wellness landing page for African enterprises, shaped with AI-assisted prompts and simple motion.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Motion'],
    cover: <Cover src="/projects/nurtura-africa.jpg" alt="Nurtura Africa landing page" />,
    liveUrl: '',
    githubUrl: '',
    meta: { role: 'Frontend Developer', duration: 'Contract', year: '2025', stack: 'React · TypeScript · Tailwind' },
    sections: [
      {
        title: 'Overview',
        text: [
          'Nurtura Africa designs intelligent mental wellness systems for modern African enterprises. The brand needed a calm, credible landing page that elevates psychological resilience at work, reduces burnout, and points visitors toward the right next step.',
        ],
      },
      {
        title: 'What I built',
        text: [
          'I used AI to craft prompts and explore layout directions until I could clearly envision the page, then built a clean landing experience with smooth scrolling and simple animations. A contact page sits alongside it so enquiry feels natural, not bolted on.',
        ],
        list: [
          'Clean landing page from concept to production',
          'AI-assisted prompting to shape the visual direction and page structure before coding',
          'Smooth scrolling and light animations that keep the story calm and readable',
          'Contact page with a clear path for enterprises to reach out',
        ],
      },
      {
        title: 'Outcome',
        text: [
          'The result is a polished first impression: visitors understand the brand quickly, move through the page without friction, and can contact Nurtura without hunting for a form.',
        ],
      },
    ],
  },
  {
    slug: 'hoydoon',
    name: 'Hoydoon',
    category: 'web2',
    description:
      'A modern property platform for buyers, renters, investors, agents, and homeowners, with fast search and clear listing flows.',
    tags: ['React', 'TypeScript', 'Maps', 'SEO'],
    cover: <Cover src="/projects/hoydoon.jpg" alt="Hoydoon real estate platform" />,
    liveUrl: '',
    githubUrl: '',
    meta: { role: 'Frontend Engineer', duration: 'Product build', year: '2025', stack: 'React · TypeScript · Tailwind' },
    sections: [
      {
        title: 'Overview',
        text: [
          'Hoydoon is a modern property platform for everyone in real estate: first-time buyers and renters, investors, agents, and homeowners. The goal is to make finding and listing property approachable, whatever your experience level.',
        ],
      },
      {
        title: 'What I built',
        text: [
          'I owned the core product surfaces that make search, browsing, and operations work together.',
        ],
        list: [
          'Property search algorithm with a strong filter system and debounce for fast, responsive results',
          'Hoydoon admin dashboard for monitoring platform activity',
          'Listing pages for houses, including map integration',
          'Clean gallery modal for viewing property photos',
          'Support agent chat so users can talk to an agent when they hit an issue',
        ],
      },
      {
        title: 'Challenges',
        text: [
          'iOS memory pressure was a real constraint. Large galleries and map views made pages feel heavy, so I focused on making the experience faster and lighter without cutting features users needed.',
          'SEO and performance for the marketing and listing pages also needed work. Page breaks and unstable layouts showed up under real content. I fixed them by reading documentation, pairing with the team, and staying in close communication with my lead until each break was resolved.',
        ],
      },
      {
        title: 'Outcome',
        text: [
          'Users can search, filter, and explore homes quickly in one place, with maps, galleries, and agent chat available without leaving the flow. Admins get visibility into activity, and the frontend is more stable on mobile with better performance and SEO foundations.',
        ],
      },
    ],
  },
  {
    slug: 'sparkgas',
    name: 'Sparkgas',
    category: 'web3',
    description:
      'A Monad gas relayer that lets new wallets claim gas for free. Sponsors fund the vault; users sign once and transact without holding MON.',
    tags: ['Solidity', 'Monad', 'Ethers.js', 'Relayer'],
    cover: <Cover src="/projects/sparkgas.jpg" alt="Sparkgas gas claim app on Monad" />,
    liveUrl: 'https://sparkgas-sigma.vercel.app/',
    githubUrl: 'https://github.com/godspowerufot/spark-hackathon',
    contractUrl: 'https://testnet.monadvision.com/address/0x2Bb64B2EfAFE10691BAcaa7E7915075705E9E4f2',
    meta: {
      role: 'Blockchain Engineer',
      duration: 'Hackathon build',
      year: '2025',
      stack: 'Solidity · Monad · Ethers.js · React',
    },
    sections: [
      {
        title: 'Overview',
        text: [
          'Sparkgas solves a real onboarding problem on Monad: new wallets cannot transact without MON for gas. Sparkgas works like a paymaster. Sponsors fund a treasury vault, and eligible wallets claim free gas once by signing a message, no balance required.',
          'Built for the Monad hackathon, the product ships a clear claim flow, sponsor onboarding, and on-chain guardrails so gas distribution stays safe and auditable.',
        ],
      },
      {
        title: 'What I built',
        list: [
          'Smart contract vault with one claim per wallet, pausable treasury, and event-audited flows',
          'Gas relayer that sponsors transactions so users can interact on Monad without paying gas upfront',
          'Claim UI: connect wallet, sign the free claim message, and receive gas in one flow',
          'Sponsor path for funding the vault and supporting new users on the network',
        ],
      },
      {
        title: 'Challenges',
        text: [
          'The hard part was making sponsorship feel simple while keeping abuse out. One claim per wallet, pause controls, and clear wallet states (pending, signed, confirmed) kept the relayer trustworthy under real hackathon usage.',
        ],
      },
      {
        title: 'Outcome',
        text: [
          'Sparkgas gives Monad newcomers a frictionless first transaction. Sponsors fund onboarding at scale, and users get gas without needing MON in the wallet first. A practical paymaster pattern on a live L2.',
        ],
      },
    ],
  },
  {
    slug: 'mdao',
    name: 'MDAO',
    category: 'web3',
    description:
      'BEP-20 governance token on BNB Smart Chain. I built the partnership and presale smart contracts, deployed to mainnet, and onboarded 12 companies.',
    tags: ['Solidity', 'BNB Chain', 'OpenZeppelin', 'Presale'],
    cover: <Cover src="/projects/mdao.jpg" alt="MDAO presale and partnership platform" />,
    liveUrl: 'https://www.mleedao.com/presale',
    githubUrl: '',
    contractUrl: 'https://bscscan.com/address/0xb5E33474E4FC6D2521C57Bb40C62622E49Dd9d4A#readContract',
    meta: {
      role: 'Blockchain Engineer (Contract)',
      duration: '2024 to 2025',
      year: '2025',
      stack: 'Solidity · OpenZeppelin · BNB Smart Chain · Ethers.js',
    },
    sections: [
      {
        title: 'Overview',
        text: [
          'MDAO is a community-owned BEP-20 governance token on BNB Smart Chain. I built the on-chain systems behind company and individual onboarding, presale allocation, vesting, and treasury logic that powers the partnership program and presale claim dashboard.',
          'Contract verified on BNB Smart Chain. Independent audit returned no vulnerabilities. Deployed to mainnet and used in production.',
        ],
      },
      {
        title: 'What I built',
        list: [
          'MDAOPartnership contract: company and individual onboarding with lock tiers, bonus MDAO, and linear vesting',
          'Presale allocation and claim flows tied to wallet records and whitelist controls',
          'On-chain fee split (LP, community, investment wallets) and burn mechanism on each payment',
          'Admin controls: pausable contract, timelocked price and wallet updates, partner reward allocation',
          'Presale website and wallet connection so buyers can connect, contribute, and claim MDAO',
        ],
      },
      {
        title: 'Challenges',
        text: [
          'Partnership logic had to handle free slots for early companies, paid onboarding after, minimum payment rules, and vesting schedules across five lock tiers without double-claims or reentrancy risk. OpenZeppelin patterns (Ownable, ReentrancyGuard, Pausable, SafeERC20) and custom errors kept the contract auditable and safe.',
          'Wallet UX had to stay clear through pending, failed, and edge-case transaction states so contributors always knew where their funds and allocation stood.',
        ],
      },
      {
        title: 'Outcome',
        text: [
          '12 companies onboarded on mainnet with $20k+ raised on-chain through the partnership contract. Every participant gets a verifiable path from payment to vested claim.',
          'Independent audit: no vulnerabilities found. Deployed to BNB Smart Chain mainnet. End-to-end ownership from Solidity through the presale frontend.',
        ],
      },
    ],
  },
  {
    slug: 'zama-recognition',
    name: 'Zama Creators Recognition',
    category: 'web3',
    description:
      'Privacy-first creator recognition on Zama. VIPs nominate creators anonymously; creators register and mint NFT badges. Won an airdrop and ~$2k at token listing.',
    tags: ['Solidity', 'Zama', 'NFT', 'Privacy'],
    cover: <Cover src="/projects/zama-recognition.jpg" alt="Zama Creators Recognition System dApp" />,
    liveUrl: 'https://zamarecognized-3lvt.vercel.app/',
    githubUrl: '',
    meta: {
      role: 'Blockchain Engineer',
      duration: 'Hackathon / grant build',
      year: '2025',
      stack: 'Solidity · Zama FHE · React · Ethers.js',
    },
    sections: [
      {
        title: 'Overview',
        text: [
          'Zama Creators Recognition is a privacy-focused "Creators of the Month" system on Zama. VIPs reward creators with encrypted identities. Creators register, receive recognition, and mint NFT badges. The product combines FHE privacy with a full dApp dashboard.',
        ],
      },
      {
        title: 'What I built',
        list: [
          'Smart contracts for VIP nominations, creator registration, and NFT badge minting',
          'dApp dashboard: VIP access flow, creator profile, and recognition history',
          'Encrypted VIP identity so nominators stay private while votes stay on-chain',
          'One nomination per week limit and wallet-gated flows for VIPs and creators',
        ],
      },
      {
        title: 'Challenges',
        text: [
          'Balancing privacy with verifiable recognition was the core constraint. VIP identity had to stay encrypted while the system still enforced nomination limits and minted badges creators could show publicly. The contract and frontend had to agree on state at every step.',
        ],
      },
      {
        title: 'Outcome',
        text: [
          'The project won a Zama ecosystem airdrop and generated roughly $2,000 at token listing. It proved a real use case for privacy-preserving social recognition: vote for your best creator, mint the proof, and keep VIP identity private.',
        ],
      },
    ],
  },
];
