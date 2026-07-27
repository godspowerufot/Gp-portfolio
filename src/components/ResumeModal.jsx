import { useEffect } from 'react';
import { resume, resumeFile } from '../data/resume.js';

function SectionTitle({ children }) {
  return (
    <h3 className="text-[12px] font-semibold tracking-[0.14em] uppercase text-ink border-b border-ink pb-1.5 mb-3 mt-6 first:mt-0">
      {children}
    </h3>
  );
}

export default function ResumeModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-200 flex items-end sm:items-center justify-center p-0 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Resume preview"
    >
      <button
        type="button"
        aria-label="Close resume preview"
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-[820px] max-h-[92vh] flex flex-col bg-white border border-line rounded-t-[18px] sm:rounded-[18px] overflow-hidden">
        <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-line shrink-0">
          <div className="min-w-0">
            <p className="text-[11px] tracking-[0.16em] uppercase text-muted mb-1">Resume</p>
            <h2 className="text-[15px] font-medium tracking-tight truncate">Godspower Ufot</h2>
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

        <div className="overflow-y-auto px-6 py-7 sm:px-10 sm:py-9 text-ink">
          <header className="text-center mb-7">
            <h1 className="text-[clamp(26px,4vw,34px)] font-medium tracking-tight">{resume.name}</h1>
            <p className="mt-1.5 text-[14px] text-muted">{resume.title}</p>
            <p className="mt-3 text-[12px] text-muted leading-relaxed">{resume.contact}</p>
            <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1">
              {resume.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] text-ink underline underline-offset-2 hover:opacity-70"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </header>

          <SectionTitle>Professional Summary</SectionTitle>
          <p className="text-[13.5px] text-muted leading-relaxed">{resume.summary}</p>

          <SectionTitle>Technical Skills</SectionTitle>
          <ul className="flex flex-col gap-1.5">
            {resume.skills.map((skill) => (
              <li key={skill} className="text-[13.5px] text-muted leading-relaxed">
                {skill}
              </li>
            ))}
          </ul>

          <SectionTitle>Professional Experience</SectionTitle>
          <div className="flex flex-col gap-6">
            {resume.experience.map((job) => (
              <article key={job.company}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                  <h4 className="text-[14.5px] font-medium tracking-tight">
                    {job.company} <span className="text-muted font-normal">| {job.location}</span>
                  </h4>
                  <p className="text-[12px] text-muted">{job.dates}</p>
                </div>
                <p className="text-[13.5px] text-ink mb-2.5">{job.role}</p>
                <ul className="flex flex-col gap-1.5">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="relative pl-4 text-[13.5px] text-muted leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-px before:bg-ink"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <SectionTitle>Education</SectionTitle>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h4 className="text-[14.5px] font-medium tracking-tight">
              {resume.education.school}{' '}
              <span className="text-muted font-normal">| {resume.education.location}</span>
            </h4>
            <p className="text-[12px] text-muted">{resume.education.dates}</p>
          </div>
          <p className="text-[13.5px] text-muted mt-1">{resume.education.degree}</p>

          <SectionTitle>Leadership & Volunteer</SectionTitle>
          <div className="flex flex-col gap-4">
            {resume.leadership.map((item) => (
              <div key={item.title}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h4 className="text-[14.5px] font-medium tracking-tight">{item.title}</h4>
                  {item.dates ? <p className="text-[12px] text-muted">{item.dates}</p> : null}
                </div>
                <p className="text-[13.5px] text-muted leading-relaxed mt-1">{item.text}</p>
              </div>
            ))}
          </div>

          <SectionTitle>Selected Projects</SectionTitle>
          <ul className="flex flex-col gap-2">
            {resume.projects.map((project) => (
              <li
                key={project}
                className="relative pl-4 text-[13.5px] text-muted leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-px before:bg-ink"
              >
                {project}
              </li>
            ))}
          </ul>
        </div>

        <div className="shrink-0 border-t border-line px-5 py-4 flex flex-wrap items-center justify-between gap-3 bg-white">
          <p className="text-[12px] text-muted">Preview of the Word resume · ATS-ready DOCX</p>
          <a
            href={resumeFile}
            download="Godspower-Ufot-Resume.docx"
            className="inline-flex items-center justify-center gap-2 text-[14px] font-medium px-6 py-3 rounded-full bg-black text-white hover:opacity-75 transition-opacity duration-250"
          >
            Download
            <span aria-hidden>↓</span>
          </a>
        </div>
      </div>
    </div>
  );
}
