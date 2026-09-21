// Shared "Pixel Motion System" engine — the tile grid / threshold / keyframe
// math behind the theme toggle's Pixel Cascade (scripts/theme/pixel-cascade.ts),
// generalized so the menu, project images, page navigation, and the project
// lightbox can all reveal/consume through the same chunky, deterministic
// pixel mask instead of each inventing its own stagger/fade/sweep.
//
// Two building blocks:
//  - buildPixelPlan(): tiles + normalized reveal thresholds for a surface of
//    a given width/height, computed once and never touched again.
//  - buildClipKeyframes(): turns a plan into a small set of discrete
//    clip-path keyframes (binary tile flips, not per-pixel interpolation).
//
// Callers apply those keyframes with plain Element.animate() (or, for the
// theme toggle only, the pseudoElement option targeting a View Transition
// snapshot) — one Animation per surface, no per-tile DOM, no per-tile timer.
export interface Point {
  x: number;
  y: number;
}

export interface PixelTile {
  path: string;
  x: number;
  y: number;
  threshold: number;
}

export interface PixelPlan {
  tiles: PixelTile[]; // sorted ascending by threshold
  tileSize: number;
  width: number;
  height: number;
}

export interface PixelPlanOptions {
  width: number;
  height: number;
  origin: Point; // local coordinates — (0,0) is the surface's own top-left
  tileSize: number;
  maxTiles?: number;
  direction?: Point; // cascade bias direction; default bottom-left
  directionBias?: number; // how much direction can shorten/lengthen perceived distance
  jitter?: number; // fraction of the threshold range — widens the wave's boundary band
  cluster?: number; // tiles per jitter block edge — makes adjacent tiles flip together
}

/** Calmer than the site's usual ease-out — stays visually active through the
 *  middle of the animation instead of front-loading the motion. Shared by
 *  every surface in the Pixel Motion System. */
export const PIXEL_EASE = 'cubic-bezier(0.45, 0, 0.2, 1)';

const DEFAULT_DIRECTION: Point = { x: -Math.SQRT1_2, y: Math.SQRT1_2 }; // toward bottom-left
const DEFAULT_DIRECTION_BIAS = 0.22;
const DEFAULT_JITTER = 0.09;
const DEFAULT_CLUSTER = 2;
const DEFAULT_MAX_TILES = 4500;

/** Deterministic [0, 1) noise from two numbers — no Math.random, so a
 *  plan's shape (or a scroll-reveal's spatial offset) is stable and
 *  reproducible, never flickers. */
export function hash(x: number, y: number): number {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return s - Math.floor(s);
}

/** Picks a tile size for the current viewport width — the shared mobile/
 *  desktop split every surface in the system uses. */
export function resolveTileSize(desktop: number, mobile: number, breakpoint = 640): number {
  return window.innerWidth < breakpoint ? mobile : desktop;
}

export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Builds every tile's rect subpath plus a normalized reveal threshold:
 *  distance from origin, biased toward `direction`, plus a small
 *  deterministic jitter shared by each cluster of tiles. Runs once,
 *  synchronously — this is the entire "reveal computation"; nothing here
 *  ever re-runs inside a frame callback. */
export function buildPixelPlan(opts: PixelPlanOptions): PixelPlan {
  const {
    width,
    height,
    origin,
    direction = DEFAULT_DIRECTION,
    directionBias = DEFAULT_DIRECTION_BIAS,
    jitter = DEFAULT_JITTER,
    cluster = DEFAULT_CLUSTER,
    maxTiles = DEFAULT_MAX_TILES,
  } = opts;

  const estimatedCols = Math.ceil(width / opts.tileSize);
  const estimatedRows = Math.ceil(height / opts.tileSize);
  const estimated = Math.max(1, estimatedCols) * Math.max(1, estimatedRows);
  const size = estimated <= maxTiles ? opts.tileSize : opts.tileSize * Math.sqrt(estimated / maxTiles);

  const cols = Math.max(1, Math.ceil(width / size));
  const rows = Math.max(1, Math.ceil(height / size));

  const raw: { x: number; y: number; base: number; path: string; col: number; row: number }[] = [];
  let min = Infinity;
  let max = -Infinity;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * size;
      const y = row * size;
      const dx = x + size / 2 - origin.x;
      const dy = y + size / 2 - origin.y;
      const euclidean = Math.hypot(dx, dy);
      // Direction is a mild modulation of distance, not a competing term —
      // distance must stay dominant or far-but-aligned tiles jump ahead of
      // near-but-misaligned ones, producing a lopsided wedge instead of a
      // diagonally-elongated wave.
      const cosAngle = euclidean > 0 ? (dx * direction.x + dy * direction.y) / euclidean : 0;
      const base = euclidean * (1 - directionBias * cosAngle);
      if (base < min) min = base;
      if (base > max) max = base;
      raw.push({ x, y, base, col, row, path: `M${x} ${y}h${size}v${size}h${-size}Z` });
    }
  }

  const range = max - min || 1;
  const tiles = raw.map((t) => {
    const blockX = Math.floor(t.col / cluster);
    const blockY = Math.floor(t.row / cluster);
    const j = (hash(blockX, blockY) - 0.5) * jitter * 2;
    return { path: t.path, x: t.x, y: t.y, threshold: (t.base - min) / range + j };
  });
  tiles.sort((a, b) => a.threshold - b.threshold);

  return { tiles, tileSize: size, width, height };
}

/** Materializing sequence: bucket 0 is empty, the last bucket covers every
 *  tile. Each bucket only ever grows the accumulated path — a tile is
 *  appended once across the whole build, never re-scanned per bucket. */
// Two keyframes land on almost every bucket boundary: a hold of the
// previous tile set right up to the edge, then the new set. clip-path
// path() only interpolates smoothly between shapes with matching subpath
// counts — our accumulated paths rarely match between buckets, so without
// the hold the browser morphs mismatched vertices into stray connecting
// lines instead of snapping. Holding first means the only "interpolation"
// that ever happens is a value onto itself; the real jump is squeezed into
// an EPS-wide window, sub-frame at any real animation duration.
const STEP_EPS = 1e-4;

function buildMaterialize(plan: PixelPlan, buckets: number): Keyframe[] {
  const frames: Keyframe[] = [];
  let acc = '';
  let idx = 0;
  const tiles = plan.tiles;
  const clip = (path: string) => `path('${path || 'M0 0h0v0h0Z'}')`;

  for (let f = 0; f <= buckets; f++) {
    const progress = f / buckets;
    if (f > 0) frames.push({ clipPath: clip(acc), offset: progress - STEP_EPS });
    while (idx < tiles.length && tiles[idx].threshold <= progress) {
      acc += tiles[idx].path;
      idx++;
    }
    frames.push({ clipPath: clip(acc), offset: progress });
  }
  if (idx < tiles.length) {
    for (; idx < tiles.length; idx++) acc += tiles[idx].path;
    frames[frames.length - 1] = { clipPath: clip(acc), offset: 1 };
  }
  return frames;
}

/** Turns a plan into discrete clip-path keyframes. `reverse: true` plays the
 *  materializing sequence backward — full at t=0, empty at t=1 — so tiles
 *  nearest the origin are the last to disappear instead of the first to
 *  appear. Same tile math either way; only playback order differs. */
export function buildClipKeyframes(plan: PixelPlan, opts: { buckets?: number; reverse?: boolean } = {}): Keyframe[] {
  const { buckets = 36, reverse = false } = opts;
  const forward = buildMaterialize(plan, buckets);
  if (!reverse) return forward;
  // Mirror each offset (1 - offset), not just its index position — the
  // hold/jump pairs above are unevenly spaced (EPS-wide jumps between wide
  // holds), so re-indexing linearly would scatter them and reopen the same
  // morphing gap this function exists to close.
  const n = forward.length;
  return forward.map((_, i) => {
    const src = forward[n - 1 - i];
    return { clipPath: src.clipPath, offset: typeof src.offset === 'number' ? 1 - src.offset : i / (n - 1) };
  });
}

/** Animates a real DOM element's own clip-path through a plan — the
 *  element-level counterpart to the theme toggle's pseudo-element reveal.
 *  `fill: 'forwards'` is needed for `reverse` (consume) animations so the
 *  fully-clipped end state persists after `finished` until the caller hides
 *  the element for real and cancels the animation. */
export function animatePixelReveal(
  el: Element,
  plan: PixelPlan,
  opts: { duration: number; easing?: string; buckets?: number; reverse?: boolean },
): Animation {
  const { duration, easing = PIXEL_EASE, buckets, reverse } = opts;
  const keyframes = buildClipKeyframes(plan, { buckets, reverse });
  return el.animate(keyframes, { duration, easing, fill: reverse ? 'forwards' : 'none' });
}

/** Flashes a handful of boundary tiles with the accent color as a cascade
 *  passes them, cycling through a small reused DOM pool — never one node per
 *  tile, never more nodes than the pool. Shared by any surface that wants
 *  the theme toggle's accent-trail detail. */
export function runAccentTrail(
  animation: Animation,
  plan: PixelPlan,
  pixels: HTMLElement[],
  opts: { samples?: number; fadeS?: number; gsap: typeof import('gsap').default },
): void {
  const { samples = 6, fadeS = 0.08, gsap } = opts;
  const tiles = plan.tiles;
  if (pixels.length === 0 || tiles.length === 0) return;

  let raf = 0;
  let poolIndex = 0;
  let lastSample = -1;

  const stop = () => cancelAnimationFrame(raf);
  animation.finished.then(stop, stop);

  const tick = () => {
    const progress = animation.effect?.getComputedTiming().progress;
    if (typeof progress !== 'number') return;

    const sampleIndex = Math.floor(progress * samples);
    if (sampleIndex !== lastSample) {
      lastSample = sampleIndex;
      const tileIdx = Math.min(tiles.length - 1, Math.floor(progress * tiles.length));
      const tile = tiles[tileIdx];
      const node = pixels[poolIndex % pixels.length];
      poolIndex++;
      gsap.killTweensOf(node);
      gsap.set(node, { left: tile.x, top: tile.y, width: plan.tileSize, height: plan.tileSize, opacity: 0.9 });
      gsap.to(node, { opacity: 0, duration: fadeS, ease: 'power1.in' });
    }

    if (animation.playState === 'running') raf = requestAnimationFrame(tick);
  };

  raf = requestAnimationFrame(tick);
}
