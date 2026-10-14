import { useEffect, useRef } from 'react';

type RevealOptions = {
  /** Fraction of the element visible before trigger. Default: 0.12 */
  threshold?: number;
  /** Delay before adding the visible class, in ms. Default: 0 */
  delay?: number;
  /** Only trigger once (never hide again). Default: true */
  once?: boolean;
};

/**
 * Returns a ref to attach to a container element.
 * When the element scrolls into view, `data-revealed="true"` is set on it,
 * activating CSS `.reveal-*` animations declared in index.css.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {}
) {
  const { threshold = 0.12, delay = 0, once = true } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => {
            el.setAttribute('data-revealed', 'true');
          }, delay);

          if (once) observer.unobserve(el);
          return () => clearTimeout(timer);
        } else if (!once) {
          el.removeAttribute('data-revealed');
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, delay, once]);

  return ref;
}

/**
 * Returns a ref + a helper that generates staggered child reveal attributes.
 * Each direct child gets `data-reveal-child` + `data-reveal-index` for CSS nth-child staggering.
 */
export function useStaggerReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions & { staggerMs?: number } = {}
) {
  const { threshold = 0.1, staggerMs = 80, once = true } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    // Tag direct children with stagger index
    const children = Array.from(container.children) as HTMLElement[];
    children.forEach((child, i) => {
      child.setAttribute('data-reveal-child', 'true');
      child.style.setProperty('--reveal-delay', `${i * staggerMs}ms`);
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          container.setAttribute('data-revealed', 'true');
          if (once) observer.unobserve(container);
        } else if (!once) {
          container.removeAttribute('data-revealed');
        }
      },
      { threshold }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [threshold, staggerMs, once]);

  return ref;
}
