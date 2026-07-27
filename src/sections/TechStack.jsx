import Reveal from '../components/Reveal.jsx';

const stack = [
  'Next.js', 'React', 'TypeScript', 'Tailwind',
  'Framer Motion', 'Node.js', 'Supabase', 
  'Solidity', 'Ethers.js', 'Vercel', 'GitHub',
];

export default function TechStack() {
  return (
    <section className="py-14 max-sm:py-12" id="stack">
      <div className="max-w-[1280px] mx-auto px-10 max-sm:px-6">
        <Reveal>
          <p className="text-sm text-muted mb-6">Tech Stack</p>
          <h2 className="text-[clamp(28px,3.2vw,32px)] font-medium tracking-tight leading-tight mb-12">
            Tools I work with.
          </h2>
        </Reveal>

        <div className="grid grid-cols-4 gap-3 max-md:grid-cols-3 max-sm:grid-cols-2">
          {stack.map((tool, i) => (
            <Reveal
              key={tool}
              delay={(i % 4) * 40}
              className="border border-line rounded-[18px] px-6 py-7 text-[15px] font-medium tracking-tight transition-colors duration-250 hover:border-ink hover:bg-[#FAFAFA]"
            >
              {tool}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
