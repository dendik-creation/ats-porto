// "Pixel Cascade" reveal variant: the destination theme is revealed through a
// grid of square tiles that cascade diagonally from the toggle's position
// toward the bottom-left, each tile switching binarily (never blended)
// between the old and new theme snapshots.
//
// Technique: a single clip-path on ::view-transition-new(root), stepped
// through discrete keyframes via WAAPI — the one case in the Pixel Motion
// System that targets a View Transition pseudo-element instead of a real
// DOM element (see ../pixel-transition.ts for the shared tile/keyframe math
// every other pixel reveal in the system builds on).
//
// Duration/easing are hardcoded here rather than reusing the shared
// --dur-2/--ease tokens — this variant is intentionally slower and flatter
// than the site's other UI motion.
import gsap from 'gsap';
import { supportsViewTransition } from './view-transition';
import type { PointOrigin } from './motion';
import type { OverlayNodes } from './animation';
import { buildPixelPlan, buildClipKeyframes, resolveTileSize, runAccentTrail, PIXEL_EASE } from '../pixel-transition';

const DESKTOP_TILE = 24;
const MOBILE_TILE = 16;
const DURATION_MS = 1200;
const BUCKETS = 40; // discrete reveal steps across the full duration (~30ms apart)
const ACCENT_SAMPLES = 6; // trail flashes sampled across the whole cascade — kept well under 1% of tiles

export function revealPixelCascade(origin: PointOrigin, overlay: OverlayNodes | null): Promise<void> {
  const tileSize = resolveTileSize(DESKTOP_TILE, MOBILE_TILE);
  const plan = buildPixelPlan({ width: window.innerWidth, height: window.innerHeight, origin, tileSize });
  const keyframes = buildClipKeyframes(plan, { buckets: BUCKETS });

  const animation = document.documentElement.animate(keyframes, {
    duration: DURATION_MS,
    easing: PIXEL_EASE,
    pseudoElement: '::view-transition-new(root)',
  });

  // The accent trail is a real DOM overlay, not a pseudo-element — without
  // native View Transition support the theme has already swapped instantly
  // (see view-transition.ts's fallback), so skip it rather than flash stray
  // squares over a page that isn't otherwise animating.
  if (overlay?.pixels.length && supportsViewTransition()) {
    runAccentTrail(animation, plan, overlay.pixels, { samples: ACCENT_SAMPLES, gsap });
  }

  return animation.finished.then(() => undefined);
}
