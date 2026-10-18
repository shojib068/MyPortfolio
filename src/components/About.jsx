import { profile, glance, education } from '../data/portfolio.js';
import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import Counter from './Counter.jsx';
import { ArrowUpRight, Pin } from './Icons.jsx';

export default function About() {
  return (
    <Section id="about">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <Reveal>
            <p className="eyebrow mb-2">About me</p>
            <h2 className="text-2xl leading-tight font-bold sm:text-[1.7rem]">
              Engineering software
              <br />
              for real-world problems
            </h2>
          </Reveal>

          <div className="mt-7 grid grid-cols-2 gap-3">
            {glance.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80} className="card card-hover p-4">
                <p className="font-display text-xl font-bold text-ink">
                  <Counter value={stat.value} decimals={stat.decimals} prefix={stat.prefix} />
                  {stat.suffix && <span className="text-sm font-medium text-muted">{stat.suffix}</span>}
                </p>
                <p className="mt-1 text-xs leading-snug text-muted">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center">
          {profile.about.map((para, i) => (
            <Reveal as="p" key={i} delay={i * 100} className="mb-4 text-[15px] leading-relaxed text-body">
              {para}
            </Reveal>
          ))}

          <Reveal delay={300} className="card mt-2 flex flex-wrap items-center justify-between gap-3 p-4">
            <div>
              <p className="font-display text-sm font-semibold text-ink">{education.degree}</p>
              <p className="text-xs text-muted">
                {education.school} · {education.period}
              </p>
            </div>
            <span className="chip">CGPA {education.cgpa}</span>
          </Reveal>

          <Reveal delay={380} className="mt-5 flex flex-wrap items-center gap-4">
            <a href="#experience" className="btn-ghost group">
              More About Me
              <ArrowUpRight className="transition-transform group-hover:rotate-45" />
            </a>
            <span className="inline-flex items-center gap-1.5 text-sm text-muted">
              <Pin /> {profile.location}
            </span>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
