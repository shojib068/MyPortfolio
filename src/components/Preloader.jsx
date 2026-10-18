import { useEffect, useState } from 'react';
import { profile } from '../data/portfolio.js';

// Brief branded splash that fades out once the app has mounted.
export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`preloader ${done ? 'preloader--done' : ''}`} aria-hidden="true">
      <span className="preloader__mark grid h-14 w-14 place-items-center rounded-2xl bg-ink font-display text-lg font-bold text-white shadow-xl">
        {profile.initials}
      </span>
    </div>
  );
}
