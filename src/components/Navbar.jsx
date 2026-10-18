import { useEffect, useState } from 'react';
import { navLinks, profile } from '../data/portfolio.js';
import { ArrowUpRight } from './Icons.jsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('top');

  useEffect(() => {
    // highlight the section currently in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ['top', ...navLinks.map((l) => l.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // close the mobile menu with Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <nav
          aria-label="Main"
          className="glass mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-[22px] !bg-white/80 py-2.5 pr-2.5 pl-3"
        >
          <a href="#top" className="flex items-center gap-3" aria-label="Back to top">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink font-display text-sm font-bold text-white">
              {profile.initials}
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block font-display text-sm font-semibold text-ink">{profile.name}</span>
              <span className="block text-[11px] text-muted">{profile.roles[0]}</span>
            </span>
          </a>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'true' : undefined}
                  className={`rounded-full px-3 py-2 text-[13px] font-medium transition-all xl:px-3.5 ${
                    active === id ? 'bg-white text-ink shadow-sm' : 'text-muted hover:text-ink'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a href="#contact" className="group hidden items-center gap-2 rounded-full bg-white/80 px-4 py-2.5 font-display text-[13px] font-semibold text-ink ring-1 ring-line transition hover:bg-ink hover:text-white sm:inline-flex">
              Let's Talk
              <ArrowUpRight className="transition-transform group-hover:rotate-45" />
            </a>
            <button
              type="button"
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full bg-white/80 ring-1 ring-line lg:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <span className={`h-0.5 w-5 bg-ink transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`h-0.5 w-5 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-5 bg-ink transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu lives outside <header>: a backdrop-filter there would trap this fixed overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-5 bg-canvas/90 backdrop-blur-xl transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none invisible opacity-0'
        }`}
      >
        {navLinks.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setOpen(false)}
            className="font-display text-2xl font-semibold text-ink hover:text-accent"
          >
            {label}
          </a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)} className="btn-dark mt-4">
          Let's Talk <ArrowUpRight />
        </a>
      </div>
    </>
  );
}
