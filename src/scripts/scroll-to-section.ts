// Astro's client router uses pushState for in-SPA navigation, which never
// triggers the browser's native "scroll to #fragment" behavior (that only
// fires on a real navigation/anchor click). This restores it for every case:
// hard load, cross-page SPA nav landing on a hash, and same-page hash clicks.
function jumpToHash(behavior: ScrollBehavior) {
  const hash = window.location.hash;
  if (hash.length < 2) return;

  const target = document.getElementById(decodeURIComponent(hash.slice(1)));
  if (!target) return;

  target.scrollIntoView({ behavior, block: 'start' });
}

// On page-load, headings still sit under the fallback font — Fraunces/
// Bricolage swap in later and grow section heights, so a jump fired too
// early lands against a shorter page and never gets corrected once it grows
// (the page just looks like it landed near the top, hash ignored). Waiting
// for fonts.ready — plus a frame for that layout to actually paint — fixes
// the target's real position before jumping. Instant scroll is safe here:
// the transition curtain (PageTransition.astro) is still covering the view.
function jumpToHashOnLoad() {
  const fontsReady = 'fonts' in document ? document.fonts.ready : Promise.resolve();
  fontsReady.then(() => {
    requestAnimationFrame(() => jumpToHash('auto'));
  });
}

// Fires on first load and after every SPA swap.
document.addEventListener('astro:page-load', jumpToHashOnLoad);
// Same-page anchor clicks (no astro:page-load) and back/forward through hashes.
window.addEventListener('hashchange', () => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  jumpToHash(reduced ? 'auto' : 'smooth');
});
