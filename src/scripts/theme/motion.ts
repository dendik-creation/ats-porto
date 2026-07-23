// Shared timing for every theme-transition variant. Reads the site's own
// --ease/--dur-2 tokens from computed style rather than hardcoding a second
// curve, so the cinematic toggle moves with the same hand as the rest of the
// site (Nav's stagger, the page curtain) instead of inventing new motion.

export interface PointOrigin {
  x: number;
  y: number;
}

let cached: { ease: string; durationMs: number; blurStart: string } | null = null;

/** --ease/--dur-2/--blur-start read once and memoized — they're static
 *  design tokens, not runtime state, so there's no need to re-read computed
 *  style per click. */
function readTokens(): { ease: string; durationMs: number; blurStart: string } {
  if (cached) return cached;
  const styles = getComputedStyle(document.documentElement);
  const ease = styles.getPropertyValue('--ease').trim() || 'cubic-bezier(0.22, 1, 0.36, 1)';
  const durRaw = styles.getPropertyValue('--dur-2').trim() || '0.6s';
  const durationMs = durRaw.endsWith('ms') ? parseFloat(durRaw) : parseFloat(durRaw) * 1000;
  const blurStart = styles.getPropertyValue('--blur-start').trim() || '8px';
  cached = { ease, durationMs, blurStart };
  return cached;
}

/** The site's cubic-bezier, as a valid WAAPI easing string — used to animate
 *  the View Transition pseudo-elements, which only WAAPI/CSS can reach. */
export function siteEaseCss(): string {
  return readTokens().ease;
}

/** The site's --dur-2 in milliseconds, for both GSAP (seconds) and WAAPI
 *  (milliseconds) callers. */
export function siteDurationMs(): number {
  return readTokens().durationMs;
}

/** GSAP duration is expressed in seconds. */
export function siteDurationS(): number {
  return readTokens().durationMs / 1000;
}

/** The circle-blur variant's start blur (--blur-start), e.g. "8px". */
export function siteBlurStart(): string {
  return readTokens().blurStart;
}

/** Same eased curve, expressed as a GSAP-native easing token. GSAP can't
 *  parse a raw cubic-bezier() string, so this is a fixed equivalent to
 *  --ease (cubic-bezier(0.22, 1, 0.36, 1)) rather than a re-derivation. */
export const GSAP_EASE = 'expo.out';

/** Farthest distance from a point to any of the viewport's four corners —
 *  the radius a circular reveal needs to fully cover the screen from that
 *  origin. */
export function distanceToFarthestCorner(origin: PointOrigin): number {
  const { innerWidth, innerHeight } = window;
  const corners: PointOrigin[] = [
    { x: 0, y: 0 },
    { x: innerWidth, y: 0 },
    { x: 0, y: innerHeight },
    { x: innerWidth, y: innerHeight },
  ];
  return Math.max(...corners.map((c) => Math.hypot(c.x - origin.x, c.y - origin.y)));
}

export function circleClipPath(origin: PointOrigin, radiusPx: number): string {
  return `circle(${radiusPx}px at ${origin.x}px ${origin.y}px)`;
}
