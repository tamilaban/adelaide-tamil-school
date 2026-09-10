/**
 * If a bundled image still fails to load (blocked, corrupt, offline), hide it
 * so the browser's broken-image glyph never shows, and detach the handler so a
 * failed fallback can't loop. Ported from the Skyrin design system.
 */
export function handleImageError(e) {
  const el = e?.currentTarget;
  if (!el) return;
  el.onerror = null;
  el.style.visibility = 'hidden';
}
