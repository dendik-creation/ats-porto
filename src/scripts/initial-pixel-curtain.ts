// First-paint curtain — separate lifecycle from PageTransition's navigation
// curtain (see ./page-transition.ts). This module body runs exactly once
// per real document load: Astro's ClientRouter does not re-execute page
// <script> module bodies on client-side swaps, only the astro:page-load
// listeners they register — so a real navigation never replays this, and no
// extra "has it run yet" flag is needed on top of that guarantee. A hard
// browser refresh is a new document, so it runs again naturally.
//
// The pixelated edges reuse the project's generic Pixel Motion System
// (./pixel-transition.ts, already isolated from PageTransition's own
// lifecycle) — same tile/threshold engine the navigation curtain and Hero's
// entrance use, just applied to a narrow strip at each panel's inner edge
// instead of the whole viewport.
import { buildPixelPlan, buildClipKeyframes, resolveTileSize, prefersReducedMotion } from './pixel-transition';

const root = document.querySelector<HTMLElement>('[data-pixel-curtain]');

if (root) {
  try {
    const leftEdge = root.querySelector<HTMLElement>('[data-curtain-edge="left"]');
    const rightEdge = root.querySelector<HTMLElement>('[data-curtain-edge="right"]');
    if (!leftEdge || !rightEdge) throw new Error('curtain markup incomplete');

    const reduced = prefersReducedMotion();
    const MIN_CLOSED_MS = 400;
    const OPEN_MS = reduced ? 160 : 1000;
    const FAILSAFE_MS = 5000;
    const CLEANUP_DELAY_MS = 80;
    const EASE = 'cubic-bezier(0.76, 0, 0.24, 1)';
    const COLS = 10; // wide enough that the pixel erosion reads at a glance, not just at the panel's inner edge
    const DESKTOP_TILE = 12; // 8-16px desktop
    const MOBILE_TILE = 14; // 10-18px mobile
    const FAR = 200000; // flattens the erosion front across the strip's height

    document.documentElement.classList.add('is-initial-curtain-active');
    root.setAttribute('data-active', '');

    // Reduced motion: no pixel erosion, just the panels' own fast CSS
    // transition (see the component's prefers-reduced-motion block) — the
    // edge strips stay solid and ride along with their panel unanimated.
    let openEdges: (() => Animation[]) | null = null;
    if (!reduced) {
      const tileSize = resolveTileSize(DESKTOP_TILE, MOBILE_TILE);
      const edgeWidth = COLS * tileSize;
      root.style.setProperty('--curtain-edge-w', `${edgeWidth}px`);

      const buildFrames = (tip: 'left' | 'right', seed: number) => {
        const height = window.innerHeight;
        // Origin placed far to the side opposite the tip: distance from a
        // point that far away is ~flat across this narrow strip's height,
        // so tiles order by which end they're on (tip vs. bulk-attached
        // side) rather than by vertical position.
        const originX = tip === 'left' ? -FAR : edgeWidth + FAR;
        const plan = buildPixelPlan({
          width: edgeWidth,
          height,
          origin: { x: originX + seed, y: height / 2 },
          direction: { x: tip === 'left' ? 1 : -1, y: 0 },
          directionBias: 0.15,
          jitter: 0.12,
          tileSize,
        });
        // reverse: true -> solid strip at progress 0, shrinking as the
        // farthest-from-origin tiles (the tip) drop out first, so each
        // edge peels from its outer tip back toward the solid bulk.
        return buildClipKeyframes(plan, { buckets: 26, reverse: true });
      };

      const leftFrames = buildFrames('left', 0);
      const rightFrames = buildFrames('right', 37); // different seed — a deliberately imperfect mirror
      leftEdge.style.clipPath = leftFrames[0].clipPath as string;
      rightEdge.style.clipPath = rightFrames[0].clipPath as string;

      openEdges = () => [
        leftEdge.animate(leftFrames, { duration: OPEN_MS, easing: EASE, fill: 'forwards' }),
        rightEdge.animate(rightFrames, { duration: OPEN_MS, easing: EASE, fill: 'forwards' }),
      ];
    }

    // ---- Page readiness: DOM + fonts + hero image, capped by a failsafe ----
    const withTimeout = <T>(p: Promise<T>, ms: number): Promise<T | void> =>
      Promise.race([p, new Promise<void>((resolve) => setTimeout(resolve, ms))]);

    const domReady = (): Promise<void> =>
      document.readyState === 'loading'
        ? new Promise((resolve) => document.addEventListener('DOMContentLoaded', () => resolve(), { once: true }))
        : Promise.resolve();

    const heroReady = (): Promise<void> =>
      new Promise((resolve) => {
        const img = document.querySelector<HTMLImageElement>('img[fetchpriority="high"]');
        if (!img || img.complete) return resolve();
        img.addEventListener('load', () => resolve(), { once: true });
        img.addEventListener('error', () => resolve(), { once: true });
      });

    const startTime = performance.now();
    let opened = false;

    const openCurtain = () => {
      if (opened) return;
      opened = true;
      clearTimeout(failsafe);

      root.setAttribute('data-opening', '');
      const anims = openEdges?.() ?? [];
      window.dispatchEvent(new CustomEvent('initial-curtain-opening'));

      const done =
        anims.length > 0
          ? Promise.all(anims.map((a) => a.finished.catch(() => undefined)))
          : new Promise<void>((resolve) => setTimeout(resolve, OPEN_MS));

      done.then(() => {
        root.setAttribute('data-complete', '');
        document.documentElement.classList.remove('is-initial-curtain-active');
        window.setTimeout(() => root.remove(), CLEANUP_DELAY_MS);
      });
    };

    const failsafe = window.setTimeout(openCurtain, FAILSAFE_MS);

    Promise.all([
      domReady(),
      withTimeout(heroReady(), 2500),
      'fonts' in document ? withTimeout(document.fonts.ready, 2000) : Promise.resolve(),
    ]).then(() => {
      const elapsed = performance.now() - startTime;
      window.setTimeout(openCurtain, Math.max(0, MIN_CLOSED_MS - elapsed));
    });
  } catch {
    // Progressive-enhancement failsafe: never leave the overlay stuck covering the site.
    root.remove();
    document.documentElement.classList.remove('is-initial-curtain-active');
  }
}
