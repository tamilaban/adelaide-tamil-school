import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

/** Counts up to `value` when scrolled into view. Ported from the Skyrin Hero. */
export default function Counter({ value, suffix = '', duration = 1.4 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!inView) return;
    const end = Number(value);
    if (Number.isNaN(end)) return;
    const stepMs = 16;
    const steps = Math.max(Math.round((duration * 1000) / stepMs), 1);
    const inc = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += inc;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      setCount(Math.round(current));
    }, stepMs);
    return () => clearInterval(timer);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
