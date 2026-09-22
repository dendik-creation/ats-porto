// First-paint curtain — separate lifecycle from PageTransition's navigation
// curtain (see ./page-transition.ts). This module body runs exactly once
// per real document load: Astro's ClientRouter does not re-execute page
// <script> module bodies on client-side swaps, only the astro:page-load
// listeners they register — so a real navigation never replays this, and no
// extra "has it run yet" flag is needed on top of that guarantee. A hard
// browser refresh is a new document, so it runs again naturally.
//
// Each half-panel IS the pixel layer — same fullscreen-cascade mechanism as
// PageTransition (./pixel-transition.ts): the whole panel dissolves through
// a chunky, discretely-stepped clip-path, not a solid block riding a smooth
// CSS slide with pixelation confined to a thin fringe. The origin sits
// beyond each panel's outer edge, so the erosion front starts at the center
// seam (reading as the curtain "opening") and eats outward, tile by tile.
import { buildPixelPlan, buildClipKeyframes, resolveTileSize, prefersReducedMotion, PIXEL_EASE } from './pixel-transition';

const root = document.querySelector<HTMLElement>('[data-pixel-curtain]');

if (root) {
  try {
    const leftPanel = root.querySelector<HTMLElement>('[data-curtain-panel="left"]');
    const rightPanel = root.querySelector<HTMLElement>('[data-curtain-panel="right"]');
    if (!leftPanel || !rightPanel) throw new Error('curtain markup incomplete');

    const reduced = prefersReducedMotion();
    const MIN_CLOSED_MS = 400;
    const OPEN_MS = reduced ? 160 : 1000;
    const FAILSAFE_MS = 5000;
    const CLEANUP_DELAY_MS = 80;
    const DESKTOP_TILE = 24; // matches the rest of the Pixel Motion System (theme toggle, Hero, page nav)
    const MOBILE_TILE = 16;
    const MAX_TILES = 640; // caps each panel's tile count (auto-upscales tileSize if the viewport would exceed it) — a full-panel plan at 24px tiles runs ~1200 tiles/panel, and animating 45 keyframes of that size during initial load (competing with fonts/hero/hydration) stalls the animation's own start for seconds, so it never visibly plays; this keeps keyframe payload small enough to start on time regardless of viewport width
    const BUCKETS = 14; // fewer, bigger discrete jumps — reads as staccato/patah-patah rather than a smooth dissolve, and keeps keyframe payload light
    const FAR = 200000; // origin placed this far past each panel's outer edge — flattens the erosion front into a clean vertical sweep from seam to edge, independent of tile row

    document.documentElement.classList.add('is-initial-curtain-active');
    root.setAttribute('data-active', '');

    // Reduced motion: skip pixel erosion entirely, just an instant opacity
    // drop (see the component's prefers-reduced-motion block).
    let openPanels: (() => Animation[]) | null = null;
    if (!reduced) {
      const tileSize = resolveTileSize(DESKTOP_TILE, MOBILE_TILE);
      const height = window.innerHeight;
      const panelWidth = Math.ceil(window.innerWidth / 2) + 1; // matches the panel's own CSS width: calc(50% + 1px)

      const buildFrames = (side: 'left' | 'right', seed: number) => {
        // Origin placed far beyond the panel's OUTER edge (away from the
        // center seam): outer-edge tiles are nearest, seam tiles farthest.
        // Combined with reverse:true below (farthest-from-origin tiles
        // disappear first), the seam erodes first and the wave eats
        // outward toward each panel's outer edge — reads as the curtain
        // opening from the middle.
        const originX = side === 'left' ? -FAR : panelWidth + FAR;
        const plan = buildPixelPlan({
          width: panelWidth,
          height,
          origin: { x: originX + seed, y: height / 2 },
          direction: { x: side === 'left' ? 1 : -1, y: 0 },
          directionBias: 0.15,
          jitter: 0.12,
          tileSize,
          maxTiles: MAX_TILES,
        });
        return buildClipKeyframes(plan, { buckets: BUCKETS, reverse: true });
      };

      const leftFrames = buildFrames('left', 0);
      const rightFrames = buildFrames('right', 37); // different seed — a deliberately imperfect mirror
      leftPanel.style.clipPath = leftFrames[0].clipPath as string;
      rightPanel.style.clipPath = rightFrames[0].clipPath as string;

      openPanels = () => [
        leftPanel.animate(leftFrames, { duration: OPEN_MS, easing: PIXEL_EASE, fill: 'forwards' }),
        rightPanel.animate(rightFrames, { duration: OPEN_MS, easing: PIXEL_EASE, fill: 'forwards' }),
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
      const anims = openPanels?.() ?? [];
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
