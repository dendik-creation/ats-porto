// Astro's client router uses pushState for in-SPA navigation, which never
// triggers the browser's native "scroll to #fragment" behavior (that only
// fires on a real navigation/anchor click). This restores it for every case:
// hard load, cross-page SPA nav landing on a hash, and same-page hash clicks.
function jumpToHash() {
  const hash = window.location.hash;
  if (hash.length < 2) return;

  const target = document.getElementById(decodeURIComponent(hash.slice(1)));
  if (!target) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
}

// Fires on first load and after every SPA swap.
document.addEventListener('astro:page-load', jumpToHash);
// Same-page anchor clicks (no astro:page-load) and back/forward through hashes.
window.addEventListener('hashchange', jumpToHash);
