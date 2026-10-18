import { useRef } from 'react';
import { socialServices } from '../data/portfolio.js';
import Section from './Section.jsx';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import { ChevronLeft, ChevronRight, Quote } from './Icons.jsx';

// Horizontal scroll-snap carousel, styled after the reference "Testimonials" row
export default function SocialServices() {
  const track = useRef(null);

  const scroll = (dir) => {
    const el = track.current;
    const card = el.firstElementChild;
    el.scrollBy({ left: dir * (card ? card.offsetWidth + 16 : el.clientWidth), behavior: 'smooth' });
  };

  return (
    <Section id="social-services">
      <SectionHeading
        eyebrow="Social services"
        title="Community & Leadership"
        action={
          <div className="flex gap-2">
            <button type="button" onClick={() => scroll(-1)} className="arrow-btn !rotate-0" aria-label="Previous">
              <ChevronLeft />
            </button>
            <button type="button" onClick={() => scroll(1)} className="arrow-btn !rotate-0" aria-label="Next">
              <ChevronRight />
            </button>
          </div>
        }
      />

      <ul
        ref={track}
        className="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-3 [scrollbar-width:none]"
        aria-label="Social services"
      >
        {socialServices.map((s, i) => (
          <Reveal
            as="li"
            key={s.title}
            delay={i * 90}
            className="card card-hover w-[82%] shrink-0 snap-start p-2.5 sm:w-[46%] md:w-[calc((100%-2rem)/3)]"
          >
            <div className="aspect-[16/10] overflow-hidden rounded-[14px] bg-gradient-to-br from-violet-200 to-indigo-200">
              <img src={s.image} alt={`${s.title} — ${s.org}`} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="p-3">
              <div className="flex items-start justify-between gap-3">
                <p className="text-[13px] leading-relaxed text-body">“{s.text}”</p>
                <Quote className="shrink-0 text-violet-300" width={20} height={20} />
              </div>
              <div className="mt-4 border-t border-line pt-3">
                <h3 className="text-sm font-semibold">{s.title}</h3>
                <p className="text-xs text-muted">
                  {s.org}
                  {s.period && ` · ${s.period}`}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
