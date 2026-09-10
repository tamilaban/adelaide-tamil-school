import { useEffect, useRef } from 'react';
import { useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

/**
 * Parallax helper, ported from the Skyrin design system.
 *
 * Nothing runs on touch / no-hover devices or under prefers-reduced-motion, so
 * the mobile and low-power experience is untouched. Pointer handlers are passive
 * and rAF-batched; the springs idle at rest.
 */
function inertEnvironment() {
  if (typeof window === 'undefined') return true;
  if (typeof navigator !== 'undefined' && navigator.webdriver) return true;
  return !window.matchMedia?.('(hover: hover) and (pointer: fine)').matches;
}

/**
 * Normalised pointer position over a container, as two springs in roughly
 * [-1, 1]. Put `ref` on the container; feed `nx` / `ny` through `useTransform`
 * at the call site to drive parallax on decorative layers.
 */
export function useParallax() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const enabled = !inertEnvironment() && !reduce;

  const nxRaw = useMotionValue(0);
  const nyRaw = useMotionValue(0);
  const nx = useSpring(nxRaw, { stiffness: 60, damping: 18, mass: 0.6 });
  const ny = useSpring(nyRaw, { stiffness: 60, damping: 18, mass: 0.6 });

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;
    let raf = 0;
    const onMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        nxRaw.set(((e.clientX - r.left) / r.width - 0.5) * 2);
        nyRaw.set(((e.clientY - r.top) / r.height - 0.5) * 2);
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      nxRaw.set(0);
      nyRaw.set(0);
    };
    el.addEventListener('pointermove', onMove, { passive: true });
    el.addEventListener('pointerleave', onLeave, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, [enabled, nxRaw, nyRaw]);

  return { ref, enabled, nx, ny };
}
