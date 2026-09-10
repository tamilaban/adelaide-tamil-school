import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SPA routing doesn't reset scroll on navigation. Jump to the top on path
 * change, or smooth-scroll to an in-page anchor when the URL carries a hash.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
