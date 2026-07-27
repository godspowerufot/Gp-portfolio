import Reveal from '../components/Reveal.jsx';

const EMAIL = 'ufotgodspower8@gmail.com';

const links = [
  { label: 'Email', href: `mailto:${EMAIL}` },
  { label: 'X', href: 'https://x.com/ufotgodspower8' },
  { label: 'Medium', href: 'https://medium.com/@ufotgodspower8' },
  { label: 'Github', href: 'https://github.com/godspowerufot' },
];

export default function Contact() {
  return (
    <section className="py-14 max-sm:py-12" id="contact">
      <div className="max-w-[1280px] mx-auto px-10 max-sm:px-6">
        <div className="max-w-[720px]">
          <Reveal>
            <h2 className="text-[clamp(40px,5.5vw,64px)] font-medium tracking-[-0.045em] leading-[1.05] mb-12">
              Let's build something meaningful.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex flex-wrap gap-x-9 gap-y-3 mb-12">
              {links.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="group relative text-base text-muted hover:text-ink transition-colors duration-250"
                >
                  {label}
                  <span className="absolute left-0 -bottom-0.5 h-px w-full bg-ink scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-(--ease-out-expo)" />
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal delay={160}>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center text-[15px] font-medium px-7 py-3.5 rounded-full bg-black text-white hover:opacity-75 transition-opacity duration-250"
            >
              Contact Us
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
