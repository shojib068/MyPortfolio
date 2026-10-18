import { useEffect, useState } from 'react';
import { useReveal } from '../hooks/useReveal.js';

// Counts up from 0 to `value` once the number scrolls into view.
export default function Counter({ value, decimals = 0, prefix = '', suffix = '', duration = 1800 }) {
  const [ref, visible] = useReveal({ threshold: 0.5 });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(value * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, value, duration]);

  const formatted = current.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
