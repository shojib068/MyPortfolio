import { experience } from '../data/portfolio.js';
import Section from './Section.jsx';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import { Briefcase } from './Icons.jsx';

// Pastel icon-tile colours, cycled per card (as in the reference "Services" row)
const tones = [
  'bg-amber-100 text-amber-600',
  'bg-violet-100 text-violet-600',
  'bg-indigo-100 text-indigo-600',
  'bg-teal-100 text-teal-600',
];

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've Worked"
        subtitle="From core banking systems for Janata Bank PLC to mobile apps for iOS and Android."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {experience.map((job, i) => (
          <Reveal key={job.role + job.company} delay={i * 90} className="card card-hover flex flex-col p-5">
            <div className="flex items-start justify-between gap-3">
              <span className={`icon-tile ${tones[i % tones.length]}`}>
                <Briefcase width={18} height={18} />
              </span>
              <span
                className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                  job.current ? 'bg-emerald-50 text-emerald-700' : 'bg-white text-muted ring-1 ring-line'
                }`}
              >
                {job.period}
              </span>
            </div>

            <h3 className="mt-5 text-base font-semibold">{job.role}</h3>
            <p className="text-sm font-medium text-accent">{job.company}</p>
            <p className="mt-3 text-[13px] leading-relaxed text-muted">{job.summary}</p>

            {job.points.length > 0 && (
              <ul className="mt-3 space-y-1.5">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-2 text-[13px] leading-relaxed text-muted">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
              {job.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
