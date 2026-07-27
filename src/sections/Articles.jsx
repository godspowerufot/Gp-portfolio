import Reveal from '../components/Reveal.jsx';

const articles = [
  {
    title: 'From 36% to 97%: My Wild Journey Optimizing a Real Estate Website',
    excerpt:
      'How I took a real estate site from a failing PageSpeed score to 97%, and what that taught me about frontend performance in production.',
    date: '2025',
    href: 'https://medium.com/@ufotgodspower8/from-36-to-97-my-wild-journey-optimizing-a-real-estate-website-f52d6edfd5a3',
  },
  {
    title: 'Margin and Capital Efficiency: What DeepBook Actually Unlocks for the Ecosystem',
    excerpt:
      'A look at how DeepBook changes margin and capital efficiency, and what that unlocks for builders and the broader DeFi stack.',
    date: '2025',
    href: 'https://medium.com/@ufotgodspower8/margin-and-capital-efficiency-what-deepbook-actually-unlocks-for-the-ecosystem-c457666d16b1',
  },
  {
    title: 'The Liquidity Paradox: When Money Talks, Does Democracy Listen Better?',
    excerpt:
      'Exploring the tension between capital-weighted influence and democratic coordination in on-chain systems.',
    date: '2025',
    href: 'https://medium.com/@ufotgodspower8/the-liquidity-paradox-when-money-talks-does-democracy-listen-better-74bf7c8b6e8f',
  },
  {
    title: 'Composability of DeFi',
    excerpt:
      'Why composability is DeFi’s real superpower, and how protocols unlock more value when they work as building blocks.',
    date: '2025',
    href: 'https://medium.com/@ufotgodspower8/composability-of-defi-300963f9ce52',
  },
];

export default function Articles() {
  return (
    <section className="py-14 max-sm:py-12" id="articles">
      <div className="max-w-[1280px] mx-auto px-10 max-sm:px-6">
        <Reveal duration={1200}>
          <p className="text-sm text-muted mb-6">Articles</p>
          <h2 className="text-[clamp(28px,3.2vw,32px)] font-medium tracking-tight leading-tight mb-4">
            Writing.
          </h2>
          <p className="text-[15px] text-muted mb-14 max-w-[40ch]">
            Notes on frontend performance, DeFi, and building on-chain systems.
          </p>
        </Reveal>

        <div className="flex flex-col border-t border-line">
          {articles.map((article, i) => (
            <Reveal key={article.title} delay={i * 160} duration={1400}>
              <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[72px_1fr_auto] gap-8 py-7 items-baseline border-b border-line max-sm:grid-cols-1 max-sm:gap-2 max-sm:py-6"
              >
                <span className="text-sm text-muted">{article.date}</span>
                <div className="min-w-0">
                  <h3 className="text-[clamp(18px,2vw,22px)] font-medium tracking-tight text-ink mb-2 group-hover:opacity-70 transition-opacity duration-300">
                    {article.title}
                  </h3>
                  <p className="text-[15px] text-muted leading-relaxed max-w-[52ch]">
                    {article.excerpt}
                  </p>
                </div>
                <span className="text-[14px] font-medium text-ink inline-flex items-center gap-2 max-sm:mt-2">
                  Read
                  <span className="transition-transform duration-300 ease-(--ease-out-expo) group-hover:translate-x-0.5">
                    ↗
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
