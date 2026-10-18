import { skills, focus } from '../data/portfolio.js';
import Section from './Section.jsx';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';

// Highlighted tools shown as icon tiles (monogram + brand-ish colour).
// Edit freely — `mark` is the 1–3 letter badge, `tone` the tile colours.
const featured = [
  { name: 'Flutter', mark: 'Fl', tone: 'bg-sky-100 text-sky-600' },
  { name: 'Dart', mark: 'Da', tone: 'bg-cyan-100 text-cyan-700' },
  { name: 'Java', mark: 'Jv', tone: 'bg-orange-100 text-orange-600' },
  { name: 'Python', mark: 'Py', tone: 'bg-yellow-100 text-yellow-700' },
  { name: 'SQL', mark: 'SQL', tone: 'bg-indigo-100 text-indigo-600' },
  { name: 'Temenos T24', mark: 'T24', tone: 'bg-violet-100 text-violet-600' },
  { name: 'Git', mark: 'Git', tone: 'bg-rose-100 text-rose-600' },
  { name: 'Linux', mark: '>_', tone: 'bg-slate-200 text-slate-700' },
];

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading eyebrow="Tools & skills" title="Technologies I Use" />

      <ul className="grid grid-cols-4 gap-3 sm:grid-cols-8">
        {featured.map((t, i) => (
          <Reveal as="li" key={t.name} delay={i * 50} className="card card-hover flex flex-col items-center gap-2 px-1 py-3">
            <span className={`icon-tile ${t.tone}`} aria-hidden="true">
              {t.mark}
            </span>
            <span className="text-center text-[11px] leading-tight text-muted">{t.name}</span>
          </Reveal>
        ))}
      </ul>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={i * 70} className="card p-5">
            <h3 className="mb-3 text-[15px] font-semibold">{group.group}</h3>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span key={item} className="chip transition-colors hover:text-accent">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}

        <Reveal delay={skills.length * 70} className="card p-5">
          <h3 className="mb-3 text-[15px] font-semibold">Current Focus</h3>
          <ol className="space-y-2">
            {focus.map((item, j) => (
              <li key={item} className="flex gap-2 text-[13px] leading-relaxed text-muted">
                <span className="font-semibold text-accent">{String(j + 1).padStart(2, '0')}</span>
                {item}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  );
}
