// Page-load / page-change curtain, driven off Astro's ClientRouter lifecycle.
// Fullscreen tier of the Pixel Motion System (see ./pixel-transition.ts) —
// the current page is progressively covered by chunky pixels, the
// destination becomes available underneath, then pixels progressively
// reveal it. Same origin both phases, so it reads as one continuous gesture
// connecting the two pages rather than a fade-to-black-and-back.
import type { TransitionBeforePreparationEvent } from 'astro:transitions/client';
import gsap from 'gsap';
import {
  buildPixelPlan,
  buildClipKeyframes,
  resolveTileSize,
  prefersReducedMotion,
  runAccentTrail,
  PIXEL_EASE,
  type Point,
  type PixelPlan,
} from './pixel-transition';

const veil = document.querySelector<HTMLElement>('[data-pt]');
const prefersReduced = prefersReducedMotion();

if (veil && !prefersReduced) {
  const layer = veil.querySelector<HTMLElement>('.pt-layer')!;
  const pixels = Array.from(veil.querySelectorAll<HTMLElement>('[data-pt-pixel]'));
  const DESKTOP_TILE = 24;
  const MOBILE_TILE = 16;
  const DURATION_MS = 1000;
  const BUCKETS = 40;

  // The curtain starts covering the viewport (see the component's CSS) so
  // there's no gap between first paint and the veil taking over — mark it
  // active immediately so it also blocks input for that opening stretch.
  veil.setAttribute('data-active', '');

  // Best-effort origin: the last internal link actually clicked. Astro's
  // before-preparation fires asynchronously after the click, so the click
  // itself is captured separately and hangs around only long enough to seed
  // the next cover(). Falls back to a fixed top-right origin — consistent
  // with the rest of the system's own bias — when nothing was clicked
  // (browser back/forward, programmatic navigation).
  let lastClick: Point | null = null;
  document.addEventListener(
    'click',
    (e) => {
      const link = (e.target as Element | null)?.closest?.('a[href]');
      if (link) lastClick = { x: e.clientX, y: e.clientY };
    },
    { capture: true },
  );

  let navigating = false;
  let currentPlan: PixelPlan | null = null;
  let currentAnim: Animation | null = null;

  const origin = (): Point => lastClick ?? { x: window.innerWidth, y: 0 };

  // Covers the viewport ahead of a navigation, so the outgoing DOM swap is
  // never visible mid-flight.
  const cover = () =>
    new Promise<void>((resolve) => {
      veil.setAttribute('data-active', '');
      currentAnim?.cancel();
      layer.style.opacity = ''; // clear a leftover initial-load fade, if any
      layer.removeAttribute('data-opposite'); // clear a leftover initial-load tone override, if any

      const tileSize = resolveTileSize(DESKTOP_TILE, MOBILE_TILE);
      const plan = buildPixelPlan({ width: window.innerWidth, height: window.innerHeight, origin: origin(), tileSize });
      currentPlan = plan;
      const keyframes = buildClipKeyframes(plan, { buckets: BUCKETS });

      const anim = layer.animate(keyframes, { duration: DURATION_MS, easing: PIXEL_EASE, fill: 'forwards' });
      currentAnim = anim;
      if (pixels.length) runAccentTrail(anim, plan, pixels, { samples: 8, gsap });
      anim.finished.then(() => resolve()).catch(() => resolve());
    });

  // Lifts the curtain once the page is actually ready to be seen. Mirrors
  // cover()'s own origin so the reveal reads as the same gesture undoing.
  const revealPixels = () => {
    const plan =
      currentPlan ??
      buildPixelPlan({
        width: window.innerWidth,
        height: window.innerHeight,
        origin: origin(),
        tileSize: resolveTileSize(DESKTOP_TILE, MOBILE_TILE),
      });
    const keyframes = buildClipKeyframes(plan, { buckets: BUCKETS, reverse: true });

    currentAnim?.cancel();
    const anim = layer.animate(keyframes, { duration: DURATION_MS, easing: PIXEL_EASE, fill: 'forwards' });
    currentAnim = anim;
    if (pixels.length) runAccentTrail(anim, plan, pixels, { samples: 8, gsap });
    anim.finished
      .then(() => {
        layer.style.clipPath = 'inset(0 0 0 100%)';
        anim.cancel();
        gsap.set(pixels, { opacity: 0 });
        veil.removeAttribute('data-active');
      })
      .catch(() => undefined);
  };

  // First paint only — bypasses the curtain entirely rather than replaying
  // it: the dedicated InitialPixelCurtain (src/scripts/initial-pixel-curtain.ts)
  // owns the first-load reveal now, so this just drops the pre-JS cover
  // instantly with no animation of its own.
  const clearVeil = () => {
    layer.style.clipPath = 'inset(0 0 0 100%)';
    gsap.set(pixels, { opacity: 0 });
    veil.removeAttribute('data-active');
  };

  // Outgoing navigation: hold the swap until the curtain has fully covered
  // the viewport. Only real ClientRouter navigations fire this — never the
  // initial load — so it's also what flags the next page-load as one.
  document.addEventListener('astro:before-preparation', (event: TransitionBeforePreparationEvent) => {
    navigating = true;
    const originalLoader = event.loader;
    event.loader = async () => {
      await cover();
      await originalLoader();
    };
  });

  // Fires on every real navigation's swap, and once on first paint.
  // `navigating` is only ever set by a real astro:before-preparation, so the
  // first-load branch never plays the navigation cascade — it just drops the
  // pre-JS cover and lets InitialPixelCurtain own the reveal instead.
  document.addEventListener('astro:page-load', () => {
    if (navigating) {
      revealPixels();
      navigating = false;
    } else {
      clearVeil();
    }
  });
}
