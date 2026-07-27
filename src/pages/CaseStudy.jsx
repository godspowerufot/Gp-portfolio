import { Link, Navigate, useParams } from 'react-router-dom';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import Reveal from '../components/Reveal.jsx';
import Seo from '../components/Seo.jsx';
import { SITE_URL } from '../config/seo.js';
import { projects } from '../data/projects.jsx';

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/" replace />;

  const meta = [
    { label: 'Role', value: project.meta.role },
    { label: 'Duration', value: project.meta.duration },
    { label: 'Year', value: project.meta.year },
    { label: 'Stack', value: project.meta.stack },
  ];

  return (
    <>
      <Seo
        title={`${project.name} Case Study`}
        description={project.description}
        path={`/project/${project.slug}`}
        type="article"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: `${project.name} Case Study`,
          description: project.description,
          author: { '@type': 'Person', name: 'Godspower Ufot', url: SITE_URL },
          url: `${SITE_URL}/project/${project.slug}`,
        }}
      />
      <Nav solid />
      <main>
        <section className="pt-38 pb-16 max-sm:pt-28">
          <div className="max-w-[1280px] mx-auto px-10 max-sm:px-6">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors duration-250 mb-10"
            >
              ← Back to projects
            </Link>

            <Reveal>
              <p className="text-[12px] tracking-[0.16em] uppercase text-muted mb-4">Case study</p>
              <h1 className="text-[clamp(40px,5.5vw,64px)] font-medium tracking-[-0.045em] leading-[1.05] max-w-[16ch] mb-6">
                {project.name}
              </h1>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-lg text-muted max-w-[48ch] leading-relaxed mb-10">{project.description}</p>
            </Reveal>

            <Reveal delay={160}>
              <dl className="flex flex-wrap gap-10 py-8 border-y border-line mb-16 max-sm:gap-6">
                {meta.map(({ label, value }) => (
                  <div key={label}>
                    <dt className="text-[13px] text-muted mb-1.5">{label}</dt>
                    <dd className="text-[15px] font-medium">{value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal>
              <div className="rounded-[18px] overflow-hidden border border-line aspect-video bg-[#F5F5F5] mb-20">
                {project.cover}
              </div>
            </Reveal>
          </div>
        </section>

        <div className="max-w-[1280px] mx-auto px-10 max-sm:px-6 pb-35 max-sm:pb-24">
          <div className="max-w-[720px]">
            {project.sections.map((section) => (
              <Reveal key={section.title} className="mb-16">
                <h2 className="text-2xl font-medium tracking-tight mb-4">{section.title}</h2>
                {section.text?.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="text-base text-muted leading-relaxed [&+&]:mt-4">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-3 flex flex-col gap-2">
                    {section.list.map((item) => (
                      <li
                        key={item}
                        className="relative pl-4.5 text-base text-muted leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[0.65em] before:w-1.5 before:h-px before:bg-ink"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}

            <Reveal className="flex flex-wrap gap-3 mt-12 pt-12 border-t border-line">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-[15px] font-medium px-7 py-3.5 rounded-full bg-black text-white hover:opacity-75 transition-opacity duration-250"
                >
                  Live project
                </a>
              ) : null}
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-[15px] font-medium px-7 py-3.5 rounded-full border border-line text-ink hover:bg-ink hover:text-white hover:border-ink transition-colors duration-250"
                >
                  Github
                </a>
              ) : null}
              {project.contractUrl ? (
                <a
                  href={project.contractUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-[15px] font-medium px-7 py-3.5 rounded-full border border-line text-ink hover:bg-ink hover:text-white hover:border-ink transition-colors duration-250"
                >
                  Contract
                </a>
              ) : null}
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
