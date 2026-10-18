import Reveal from './Reveal.jsx';

// Eyebrow + title, with an optional element (e.g. a "View all" button) on the right.
export default function SectionHeading({ eyebrow, title, subtitle, action }) {
  return (
    <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div className="max-w-2xl">
        <p className="eyebrow mb-2">{eyebrow}</p>
        <h2 className="text-2xl font-bold sm:text-[1.7rem]">{title}</h2>
        {subtitle && <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{subtitle}</p>}
      </div>
      {action}
    </Reveal>
  );
}
