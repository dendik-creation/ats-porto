// Project images → pixel reveal. The subtlest tier of the Pixel Motion
// System: each image reveals through its own bounding box (never a
// fullscreen surface) as it scrolls into view, replacing the old
// opacity/translateY entrance. Reuses the same IntersectionObserver-once
// pattern the rest of the site's scroll reveals already use (see
// scripts/animate.ts), just swapping the reveal technique.
import { buildPixelPlan, buildClipKeyframes, resolveTileSize, prefersReducedMotion, hash, PIXEL_EASE } from './pixel-transition';

const SELECTOR = '[data-pixel-reveal]';
const DURATION_MS = 650;
const BUCKETS = 22;
const MIN_TILE = 10;
const MAX_TILE = 40;
const TILE_RATIO = 0.055; // ~5.5% of the smaller box dimension
const MAX_DELAY_MS = 100; // spatial variation, not sequential stagger

function tileSizeFor(width: number, height: number): number {
  const base = Math.min(width, height) * TILE_RATIO;
  return Math.min(MAX_TILE, Math.max(MIN_TILE, base));
}

function reveal(el: HTMLElement): void {
  const rect = el.getBoundingClientRect();
  if (rect.width <= 0 || rect.height <= 0) return;
  el.style.opacity = '1';

  const tileSize = Math.min(tileSizeFor(rect.width, rect.height), resolveTileSize(28, 20));
  const plan = buildPixelPlan({ width: rect.width, height: rect.height, origin: { x: rect.width, y: 0 }, tileSize });
  const keyframes = buildClipKeyframes(plan, { buckets: BUCKETS });

  // Deterministic offset from the element's own scroll position — organic
  // spatial variation between images entering together, never a sequential
  // index * delay stagger.
  const delay = Math.round(hash(rect.left, rect.top + window.scrollY) * MAX_DELAY_MS);

  el.animate(keyframes, { duration: DURATION_MS, delay, easing: PIXEL_EASE, fill: 'none' });
}

function initAll(): void {
  const targets = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
  if (targets.length === 0) return;

  if (prefersReducedMotion()) {
    targets.forEach((el) => {
      el.style.opacity = '';
    });
    return;
  }

  // Hidden via opacity, not clip-path: an already-clipped-to-nothing target
  // reports a permanently zero intersection ratio in Chromium, so the
  // observer that's supposed to remove the clip-path never actually fires —
  // opacity is paint-only and doesn't affect intersection geometry.
  targets.forEach((el) => {
    el.style.opacity = '0';
  });

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        reveal(entry.target as HTMLElement);
      }
    },
    { threshold: 0.1, rootMargin: '0px 0px -10% 0px' },
  );

  targets.forEach((el) => observer.observe(el));
}

// astro:page-load fires on first paint and after every ClientRouter swap —
// re-querying here (rather than persisting observers) is correct since each
// swap brings a fresh set of target elements.
document.addEventListener('astro:page-load', initAll);
