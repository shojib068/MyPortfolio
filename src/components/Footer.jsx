import { profile, socials } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer className="relative z-10 px-4 pt-3 pb-6 sm:px-6">
      <div className="glass mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 rounded-[22px] px-5 py-4 text-sm sm:flex-row">
        <a href="#top" className="flex items-center gap-3" aria-label="Back to top">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink font-display text-xs font-bold text-white">
            {profile.initials}
          </span>
          <span className="font-display font-semibold text-ink">{profile.name}</span>
        </a>

        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.url} target="_blank" rel="noreferrer" className="text-muted transition-colors hover:text-accent">
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
