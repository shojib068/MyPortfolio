import { useEffect, useState } from 'react';
import { profile, workedWith } from '../data/portfolio.js';
import { ArrowUpRight, Mail, Sparkle } from './Icons.jsx';

// Types each role out, pauses, deletes, then moves to the next.
function useTypewriter(words, { typeSpeed = 70, deleteSpeed = 40, pause = 1600 } = {}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let timeout;
    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? deleteSpeed : typeSpeed,
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);
  const [photoFailed, setPhotoFailed] = useState(false);
  // start entrance transitions one frame after mount so they actually animate
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);
  // fade-up props for hero items, timed to start after the preloader
  const fade = (d, className = '') => ({
    className: `${className} reveal ${ready ? 'is-visible' : ''}`,
    style: { '--reveal-delay': `${d}ms` },
  });

  const [first, ...rest] = profile.name.split(' ');

  return (
    <section id="top" className="relative pt-28 pb-3">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="panel overflow-hidden">
          <div className="grid items-center gap-10 md:grid-cols-[1.15fr_1fr]">
            <div>
              <p {...fade(700, 'eyebrow mb-3')}>
                Hello, I'm
              </p>

              <h1 className="text-[2.6rem] leading-[1.05] font-bold sm:text-6xl">
                <span className="line-mask"><span style={{ '--d': '750ms' }}>{first}</span></span>
                <span className="line-mask"><span style={{ '--d': '850ms' }}>{rest.join(' ')}</span></span>
              </h1>

              <p {...fade(950, 'mt-3 min-h-[2.2rem] font-display text-xl font-semibold sm:text-[1.7rem]')}>
                <span className="text-gradient">{typed}</span>
                <span className="ml-0.5 inline-block h-6 w-[2px] translate-y-1 animate-pulse bg-accent" />
              </p>

              <p {...fade(1050, 'mt-4 max-w-md text-[15px] leading-relaxed text-body')}>
                {profile.tagline}
              </p>

              <div {...fade(1150, 'mt-7 flex flex-wrap gap-3')}>
                <a href="#projects" className="btn-dark group">
                  View My Work
                  <ArrowUpRight className="transition-transform group-hover:rotate-45" />
                </a>
                <a href="#contact" className="btn-ghost">
                  Get in Touch <Mail />
                </a>
              </div>

              <div {...fade(1250, 'mt-9')}>
                <p className="mb-3 text-xs font-medium text-muted">Worked with</p>
                <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  {workedWith.map((name) => (
                    <li key={name} className="font-display text-sm font-semibold text-slate-400">
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Photo in a glass frame with floating stat cards */}
            <div {...fade(900, 'relative mx-auto w-full max-w-[380px] py-6')}>
              <div className="glass relative aspect-[4/5] overflow-hidden rounded-[44px] p-2.5">
                <div className="h-full w-full overflow-hidden rounded-[36px] bg-gradient-to-br from-violet-200 via-indigo-100 to-sky-100">
                  {profile.photo && !photoFailed ? (
                    <img
                      src={profile.photo}
                      alt={`Portrait of ${profile.name}`}
                      className="h-full w-full object-cover object-top"
                      onError={() => setPhotoFailed(true)}
                    />
                  ) : (
                    <span className="grid h-full place-items-center font-display text-7xl font-bold text-white">
                      {profile.initials}
                    </span>
                  )}
                </div>
              </div>

              <div className="glass absolute top-0 -right-2 animate-float rounded-2xl px-4 py-3 text-center sm:-right-6">
                <p className="font-display text-3xl font-bold text-ink">3.68</p>
                <p className="text-[11px] leading-tight text-muted">CGPA<br />CSE, CU</p>
              </div>

              <div
                className="glass absolute -right-2 bottom-10 w-40 rounded-2xl px-4 py-3 sm:-right-8"
                style={{ animation: 'float 8s ease-in-out 1s infinite' }}
              >
                <p className="text-[11px] text-muted">Hackathon</p>
                <p className="font-display text-xl font-bold text-ink">#1 Champion</p>
                <svg viewBox="0 0 120 28" className="mt-1 h-6 w-full" aria-hidden="true">
                  <path d="M2 24 C20 22 26 12 42 16 S66 6 80 10 104 2 118 4" fill="none" stroke="url(#spark)" strokeWidth="2.5" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="spark" x1="0" x2="1">
                      <stop offset="0" stopColor="#8b5cf6" />
                      <stop offset="1" stopColor="#7c9cf8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <span className="glass absolute top-1/2 -left-3 grid h-14 w-14 animate-float place-items-center rounded-full text-accent sm:-left-7">
                <Sparkle width={22} height={22} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
