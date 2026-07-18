// Page-load / page-change curtain, driven off Astro's ClientRouter lifecycle.
// Same hand as Nav's staggered menu: two colour layers (accent, then ink),
// one easing family, a short stagger — reused here instead of a second motif.
import gsap from 'gsap';
import type { TransitionBeforePreparationEvent } from 'astro:transitions/client';

const veil = document.querySelector<HTMLElement>('[data-pt]');
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (veil && !prefersReduced) {
  const layers = Array.from(veil.querySelectorAll<HTMLElement>('.pt-layer'));
  const EASE = 'expo.inOut';
  const DUR = 0.55;
  const STAGGER = 0.07;

  // The curtain starts covering the viewport (see the component's CSS) so
  // there's no gap between first paint and the veil taking over — mark it
  // active immediately so it also blocks input for that opening stretch.
  veil.setAttribute('data-active', '');

  // Covers the viewport ahead of a navigation, so the outgoing DOM swap is
  // never visible mid-flight.
  const cover = () =>
    new Promise<void>((resolve) => {
      veil.setAttribute('data-active', '');
      gsap
        .timeline({ onComplete: resolve })
        .to(layers[0], { xPercent: 0, duration: DUR, ease: EASE }, 0)
        .to(layers[1], { xPercent: 0, duration: DUR, ease: EASE }, STAGGER);
    });

  // Lifts the curtain once the page is actually ready to be seen.
  const reveal = () => {
    gsap
      .timeline({
        onComplete: () => {
          gsap.set(layers, { xPercent: 100 });
          veil.removeAttribute('data-active');
        },
      })
      .to(layers[1], { xPercent: -100, duration: DUR, ease: EASE }, 0)
      .to(layers[0], { xPercent: -100, duration: DUR, ease: EASE }, STAGGER);
  };

  // Outgoing navigation: hold the swap until the curtain has fully covered
  // the viewport.
  document.addEventListener('astro:before-preparation', (event: TransitionBeforePreparationEvent) => {
    const originalLoader = event.loader;
    event.loader = async () => {
      await cover();
      await originalLoader();
    };
  });

  // Fires once the page is genuinely ready — on the first visit that's the
  // real `window.load` (fonts and images included), on later navigations
  // it's right after the swap. Either way: lift the curtain.
  document.addEventListener('astro:page-load', reveal);
}
