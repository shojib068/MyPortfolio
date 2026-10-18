import { awards, certifications } from '../data/portfolio.js';
import Section from './Section.jsx';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';

// Numbered step cards, styled after the reference "Design Process" row
export default function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeading eyebrow="Achievements" title="Awards & Recognition" />

      <ol className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {awards.map((a, i) => (
          <Reveal as="li" key={a.title} delay={i * 90} className="card card-hover p-5">
            <div className="flex items-center gap-3">
              <span className="icon-tile bg-violet-100 text-lg" aria-hidden="true">
                {a.icon}
              </span>
              <span className={`font-display text-2xl font-semibold ${i === 0 ? 'text-accent' : 'text-slate-300'}`}>
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            <h3 className="mt-4 text-[15px] font-semibold">{a.title}</h3>
            <p className="text-xs text-muted">
              {a.org}
              {a.year && ` · ${a.year}`}
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">{a.text}</p>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-4 flex flex-wrap items-center gap-3">
        <span className="text-xs font-medium text-muted">Certifications</span>
        {certifications.map((c) => (
          <span key={c.title} className="card inline-flex items-center gap-2 !rounded-full py-2 pr-4 pl-2">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-violet-100 text-xs text-accent">✓</span>
            <span className="text-sm font-medium text-ink">{c.title}</span>
            <span className="text-xs text-muted">· {c.org}</span>
          </span>
        ))}
      </Reveal>
    </Section>
  );
}
