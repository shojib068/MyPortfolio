import { useEffect, useRef, useState } from 'react';
import { projects, thesis, socials } from '../data/portfolio.js';
import Section from './Section.jsx';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import Counter from './Counter.jsx';
import MediaGallery from './MediaGallery.jsx';
import { ArrowUpRight, Close } from './Icons.jsx';
import './Projects.css';

const statusStyles = {
  Built: 'bg-emerald-50 text-emerald-700',
  Delivered: 'bg-emerald-50 text-emerald-700',
  'In Progress': 'bg-amber-50 text-amber-700',
  Ongoing: 'bg-violet-50 text-violet-700',
};

// Full project details in a native <dialog> (handles focus trapping and Escape)
function ProjectDialog({ project, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-labelledby="project-dialog-title"
      className="project-dialog"
    >
      {project && (
        <div className="relative p-5 sm:p-7">
          <button type="button" onClick={onClose} className="arrow-btn absolute top-4 right-4 z-10 !rotate-0" aria-label="Close">
            <Close />
          </button>

          <div className="grid gap-7 md:grid-cols-2">
            <MediaGallery media={project.media} title={project.title} />

            <div>
              <div className="flex flex-wrap items-center gap-3 pr-10">
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[project.status]}`}>
                  {project.status}
                </span>
                <span className="text-sm text-muted">{project.type}</span>
              </div>
              <h3 id="project-dialog-title" className="mt-4 text-2xl font-bold">
                {project.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-body">{project.description}</p>

              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-muted">
                    <span className="text-accent">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const github = socials.find((s) => s.label === 'GitHub');

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Featured projects"
        title="Selected Work"
        action={
          github && (
            <a href={github.url} target="_blank" rel="noreferrer" className="btn-ghost group !px-4 !py-2.5 text-[13px]">
              View All on GitHub
              <ArrowUpRight className="transition-transform group-hover:rotate-45" />
            </a>
          )
        }
      />

      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 90}>
            <button
              type="button"
              onClick={() => setSelected(p)}
              className="card card-hover group flex h-full w-full flex-col p-2.5 text-left"
              aria-haspopup="dialog"
            >
              <div className="project-cover">
                <img src={p.cover} alt="" loading="lazy" />
              </div>
              <div className="flex items-center justify-between gap-3 px-2.5 pt-4 pb-2">
                <div>
                  <h3 className="text-[15px] font-semibold">{p.title}</h3>
                  <p className="text-xs text-muted">{p.type}</p>
                </div>
                <span className="arrow-btn">
                  <ArrowUpRight />
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {/* Thesis */}
      <Reveal className="card mt-4 p-5 sm:p-7">
        <div className="grid gap-8 md:grid-cols-[1.3fr_1fr]">
          <div>
            <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700">Research</span>
            <p className="mt-4 text-xs text-muted">{thesis.label}</p>
            <h3 className="mt-2 text-lg leading-snug font-semibold">{thesis.title}</h3>
            <p className="mt-2 text-sm font-medium text-accent">Supervisor: {thesis.supervisor}</p>
            <p className="mt-3 text-sm leading-relaxed text-body">{thesis.summary}</p>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-3">
              {thesis.stats.map((s) => (
                <div key={s.label} className="rounded-2xl bg-white/80 p-4 ring-1 ring-line">
                  <p className="font-display text-lg font-bold text-ink">
                    <Counter value={s.value} decimals={s.decimals} prefix={s.prefix} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 text-xs leading-snug text-muted">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted">{thesis.note}</p>
          </div>
        </div>
      </Reveal>

      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
