// GSAP choreography for the cinematic theme toggle.
//
// Platform note (see the plan/README): the browser's own
// ::view-transition-old(root) / ::view-transition-new(root) pseudo-elements
// have no Element handle, so no DOM-based library — GSAP included — can
// query or tween them. The only way to animate them is the Web Animations
// API with { pseudoElement }. So the "reveal" variants below (which clip the
// new-theme snapshot) run on WAAPI, timed with the site's own eased curve
// (motion.ts). Everything that IS a real DOM node — the icon, the overlay's
// ring/aurora layers — is driven entirely by GSAP. runReveal() is the one
// place that dispatches between the two.
import gsap from 'gsap';
import {
  circleClipPath,
  distanceToFarthestCorner,
  siteBlurStart,
  siteDurationMs,
  siteEaseCss,
  siteDurationS,
  GSAP_EASE,
  type PointOrigin,
} from './motion';

export type RevealVariant =
  | 'circle-reveal'
  | 'circle-blur'
  | 'rectangle-sweep'
  | 'polygon-reveal'
  | 'ripple-reveal'
  | 'aurora-reveal';

export interface OverlayNodes {
  root: HTMLElement;
  ringA: HTMLElement;
  ringB: HTMLElement;
  aurora: HTMLElement;
}

export function queryOverlay(): OverlayNodes | null {
  const root = document.querySelector<HTMLElement>('[data-tt-overlay]');
  if (!root) return null;
  const ringA = root.querySelector<HTMLElement>('[data-tt-ring="1"]');
  const ringB = root.querySelector<HTMLElement>('[data-tt-ring="2"]');
  const aurora = root.querySelector<HTMLElement>('[data-tt-aurora]');
  if (!ringA || !ringB || !aurora) return null;
  return { root, ringA, ringB, aurora };
}

// ---- Reveal variants (mutually exclusive — how the new theme appears) ----

/** Straight expanding-circle clip on the new-theme snapshot, from 0 to just
 *  past the farthest viewport corner from the click. */
function revealCircle(origin: PointOrigin, blur: boolean): Promise<void> {
  const target = distanceToFarthestCorner(origin) * getRevealScale();
  const keyframes: Keyframe[] = blur
    ? [
        { clipPath: circleClipPath(origin, 0), filter: `blur(${siteBlurStart()})` },
        { clipPath: circleClipPath(origin, target), filter: 'blur(0px)' },
      ]
    : [{ clipPath: circleClipPath(origin, 0) }, { clipPath: circleClipPath(origin, target) }];

  const animation = document.documentElement.animate(keyframes, {
    duration: siteDurationMs(),
    easing: siteEaseCss(),
    pseudoElement: '::view-transition-new(root)',
  });
  return animation.finished.then(() => undefined);
}

function getRevealScale(): number {
  const raw = getComputedStyle(document.documentElement).getPropertyValue('--reveal-scale').trim();
  return parseFloat(raw) || 1.02;
}

/** Four-direction inset() sweep. Direction is chosen from which edge the
 *  click sits closest to, so the wipe always grows away from the click. */
function revealRectangleSweep(origin: PointOrigin): Promise<void> {
  const { innerWidth: w, innerHeight: h } = window;
  const distTop = origin.y;
  const distBottom = h - origin.y;
  const distLeft = origin.x;
  const distRight = w - origin.x;
  const min = Math.min(distTop, distBottom, distLeft, distRight);

  let from: string;
  if (min === distBottom) from = 'inset(100% 0 0 0)'; // bottom-up
  else if (min === distTop) from = 'inset(0 0 100% 0)'; // top-down
  else if (min === distLeft) from = 'inset(0 100% 0 0)'; // left-right
  else from = 'inset(0 0 0 100%)'; // right-left

  const animation = document.documentElement.animate(
    [{ clipPath: from }, { clipPath: 'inset(0 0 0 0)' }],
    { duration: siteDurationMs(), easing: siteEaseCss(), pseudoElement: '::view-transition-new(root)' },
  );
  return animation.finished.then(() => undefined);
}

/** Organic polygon growth: a fixed ring of points around the click, each
 *  reaching full coverage radius by the final keyframe (guaranteeing the
 *  screen ends fully revealed) but wobbling to slightly different radii at
 *  the midpoint so the growth reads as organic rather than a perfect circle. */
function revealPolygon(origin: PointOrigin): Promise<void> {
  const POINTS = 10;
  const target = distanceToFarthestCorner(origin) * getRevealScale();
  const jitter = [0.55, 0.85, 0.7, 1, 0.6, 0.9, 0.75, 1, 0.65, 0.8];

  const polygonAt = (progress: number, wobble: boolean) => {
    const pts: string[] = [];
    for (let i = 0; i < POINTS; i++) {
      const angle = (i / POINTS) * Math.PI * 2;
      const r = target * progress * (wobble ? jitter[i] : 1);
      const x = origin.x + Math.cos(angle) * r;
      const y = origin.y + Math.sin(angle) * r;
      pts.push(`${x}px ${y}px`);
    }
    return `polygon(${pts.join(', ')})`;
  };

  const animation = document.documentElement.animate(
    [
      { clipPath: polygonAt(0, false), offset: 0 },
      { clipPath: polygonAt(0.55, true), offset: 0.55 },
      { clipPath: polygonAt(1, false), offset: 1 },
    ],
    { duration: siteDurationMs(), easing: siteEaseCss(), pseudoElement: '::view-transition-new(root)' },
  );
  return animation.finished.then(() => undefined);
}

/** Base circle reveal plus a couple of GSAP-driven concentric echo rings on
 *  the overlay, for a liquid feel rather than a hard geometric edge. */
async function revealRipple(origin: PointOrigin, overlay: OverlayNodes | null): Promise<void> {
  const base = revealCircle(origin, false);
  if (overlay) {
    const duration = siteDurationS();
    [overlay.ringA, overlay.ringB].forEach((ring, i) => {
      gsap.set(ring, {
        left: origin.x,
        top: origin.y,
        opacity: 0.3,
        scale: 0,
        xPercent: -50,
        yPercent: -50,
      });
      gsap.to(ring, {
        scale: 3.4,
        opacity: 0,
        duration: duration * 0.85,
        delay: i * 0.12,
        ease: GSAP_EASE,
      });
    });
  }
  await base;
}

/** No clip-path at all — the DOM swap is instant (transition.css disables the
 *  browser's default cross-fade), masked entirely by a brief moving gradient
 *  glow on the overlay. */
function revealAurora(origin: PointOrigin, overlay: OverlayNodes | null): Promise<void> {
  if (!overlay) return Promise.resolve();
  const tl = gsap.timeline();
  gsap.set(overlay.aurora, { left: origin.x, top: origin.y, opacity: 0, xPercent: -50, yPercent: -50, scale: 0.6 });
  tl.to(overlay.aurora, { opacity: 0.55, scale: 1.6, duration: 0.12, ease: 'power2.out' }).to(
    overlay.aurora,
    { opacity: 0, duration: 0.13, ease: 'power1.in' },
    '>',
  );
  return new Promise((resolve) => {
    tl.eventCallback('onComplete', () => resolve());
  });
}

export function runReveal(variant: RevealVariant, origin: PointOrigin, overlay: OverlayNodes | null): Promise<void> {
  switch (variant) {
    case 'circle-reveal':
      return revealCircle(origin, false);
    case 'circle-blur':
      return revealCircle(origin, true);
    case 'rectangle-sweep':
      return revealRectangleSweep(origin);
    case 'polygon-reveal':
      return revealPolygon(origin);
    case 'ripple-reveal':
      return revealRipple(origin, overlay);
    case 'aurora-reveal':
      return revealAurora(origin, overlay);
  }
}

export interface IconRefs {
  sun: SVGElement;
  moon: SVGElement;
}

/** Crossfades sun/moon with a rotation + small bounce. Runs regardless of
 *  which reveal variant is active — it's the one constant in the sequence. */
export function animateIcon(icon: IconRefs, toDark: boolean, reduced: boolean): void {
  const showing = toDark ? icon.moon : icon.sun;
  const hiding = toDark ? icon.sun : icon.moon;

  if (reduced) {
    gsap.set(hiding, { opacity: 0, scale: 0.6 });
    gsap.set(showing, { opacity: 1, scale: 1, rotate: 0 });
    return;
  }

  const duration = siteDurationS();
  gsap
    .timeline()
    .to(hiding, { opacity: 0, scale: 0.4, rotate: toDark ? 90 : -90, duration: duration * 0.45, ease: 'power2.in' }, 0)
    .fromTo(
      showing,
      { opacity: 0, scale: 0.4, rotate: toDark ? -90 : 90 },
      { opacity: 1, scale: 1, rotate: 0, duration: duration * 0.65, ease: 'back.out(2.4)' },
      duration * 0.25,
    );
}

/** Resets the overlay's reused layers to their hidden baseline after a run
 *  completes — never recreated, just cleared for the next click. */
export function cleanupTransition(overlay: OverlayNodes | null): void {
  if (!overlay) return;
  gsap.killTweensOf([overlay.ringA, overlay.ringB, overlay.aurora]);
  gsap.set([overlay.ringA, overlay.ringB, overlay.aurora], { opacity: 0, scale: 0 });
}
