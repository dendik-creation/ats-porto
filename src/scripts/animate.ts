// Site-wide motion. One hand: a single easing family, short travel, generous
// timing — reveals that feel typeset, not bounced. Fully guarded by
// prefers-reduced-motion and degradiable (no JS → everything is already visible).
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReduced) {
  gsap.registerPlugin(ScrollTrigger);

  const EASE = 'power3.out';
  const RISE = 26;

  // Content items a section can hold — collected per section so the cascade is local.
  const ITEM_SELECTORS = [
    '.about__lede',
    '.about__stats',
    '.skills__group',
    '.proj',
    '.exp__item',
    '.edu__item',
    '.certs__card',
    '.langs__item',
    '.contact__email',
    '.contact__cols',
    '.contact__base',
  ].join(', ');

  const start = () => {
    // ---- Hero: a load timeline, letters rising into place ----
    const hero = document.querySelector('[data-hero]');
    if (hero) {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
      tl.from('.hero__eyebrow', { y: 18, opacity: 0, duration: 0.9 })
        .from(
          '.hero__word--first .hero__ch',
          { yPercent: 115, opacity: 0, duration: 1, stagger: 0.045 },
          '-=0.45',
        )
        .from(
          '.hero__word--last .hero__ch',
          { yPercent: 115, opacity: 0, duration: 1, stagger: 0.045 },
          '-=0.8',
        )
        .from('.hero__spec', { y: 12, opacity: 0, duration: 0.8 }, '-=0.5')
        .from('.hero__summary', { y: 16, opacity: 0, duration: 0.8 }, '-=0.55')
        .from('.hero__avail', { y: 16, opacity: 0, duration: 0.8 }, '-=0.6');
    }

    // ---- Sections: header + item cascade on scroll-in ----
    const sections = gsap.utils.toArray<HTMLElement>('main .shell');
    sections.forEach((sec) => {
      if (sec.hasAttribute('data-hero')) return; // hero owns its own timeline

      const head = sec.querySelector('.sec-head');
      const items = Array.from(sec.querySelectorAll<HTMLElement>(ITEM_SELECTORS));
      const targets = [head, ...items].filter(Boolean) as HTMLElement[];
      if (!targets.length) return;

      // gsap.from + ScrollTrigger renders the start state immediately (immediateRender),
      // so targets are hidden at load and revealed only when the section arrives — no flash.
      gsap.from(targets, {
        scrollTrigger: { trigger: sec, start: 'top 80%' },
        y: RISE,
        opacity: 0,
        duration: 0.9,
        ease: EASE,
        stagger: 0.09,
      });
    });

    // ---- Project detail page: staged reveal of the article blocks ----
    const detail = document.querySelector<HTMLElement>('.detail');
    if (detail) {
      const blocks = Array.from(
        detail.querySelectorAll<HTMLElement>(
          '.detail__back, .detail__head, .detail__body, .detail__links, .detail__nav, .detail__cta',
        ),
      );
      if (blocks.length) {
        gsap.from(blocks, {
          scrollTrigger: { trigger: detail, start: 'top 78%' },
          y: RISE,
          opacity: 0,
          duration: 0.9,
          ease: EASE,
          stagger: 0.1,
        });
      }
    }

    // Layout settles after the variable fonts swap — recalc trigger positions.
    if ('fonts' in document) {
      document.fonts.ready.then(() => ScrollTrigger.refresh());
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
}
