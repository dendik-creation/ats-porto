/* === CONTROLLER: arrows/space/PgUp/PgDn, swipe, wheel ===
   Slide changes play the site's Pixel Motion System (src/scripts/pixel-transition.ts,
   page-transition.ts): the current slide is covered by chunky pixels, the slide swaps
   underneath, then pixels reveal the next one from the same origin. */
const slides = [...document.querySelectorAll('.slide')], stage = document.getElementById('deckStage'),
  count = document.getElementById('count'), bar = document.getElementById('bar'),
  veil = document.getElementById('ptVeil'), layer = veil.querySelector('.pt-layer'),
  pixels = [...veil.querySelectorAll('.pt-pixel')];
let cur = 0;

/* --- Pixel engine (ported from src/scripts/pixel-transition.ts) --- */
const PIXEL_EASE = 'cubic-bezier(0.45, 0, 0.2, 1)';
const BUCKETS = 40;
const DURATION_MS = 650;    // per phase (site: 1000ms); a deck advances often, so it runs a little faster
const STEP_EPS = 1e-4;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

const hash = (x, y) => { const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return s - Math.floor(s); };

/* Tiles + normalized reveal thresholds: distance from origin, biased toward DIRECTION, plus clustered jitter. */
function buildPixelPlan(width, height, origin, tileSize, { direction, jitter, cluster }) {
  const cols = Math.ceil(width / tileSize), rows = Math.ceil(height / tileSize), raw = [];
  let min = Infinity, max = -Infinity;
  for (let row = 0; row < rows; row++) for (let col = 0; col < cols; col++) {
    const x = col * tileSize, y = row * tileSize;
    const dx = x + tileSize / 2 - origin.x, dy = y + tileSize / 2 - origin.y, d = Math.hypot(dx, dy);
    const cos = d > 0 ? (dx * direction.x + dy * direction.y) / d : 0;
    const base = d * (1 - 0.22 * cos);
    min = Math.min(min, base); max = Math.max(max, base);
    raw.push({ x, y, base, col, row, path: `M${x} ${y}h${tileSize}v${tileSize}h${-tileSize}Z` });
  }
  const range = max - min || 1;
  const tiles = raw.map(t => ({
    path: t.path, x: t.x, y: t.y,
    threshold: (t.base - min) / range + (hash(Math.floor(t.col / cluster), Math.floor(t.row / cluster)) - 0.5) * jitter * 2,
  }));
  tiles.sort((a, b) => a.threshold - b.threshold);
  return { tiles, tileSize, width, height };
}

/* Discrete clip-path keyframes: hold, then jump, on every bucket edge (avoids path() morphing).
   cover  = tiles with threshold <= progress appear (veil grows from the origin side).
   reveal = tiles with threshold  > progress remain (veil is eaten from the same origin side). */
function buildClipKeyframes(plan, reverse) {
  const clip = p => `path('${p || 'M0 0h0v0h0Z'}')`, paths = plan.tiles.map(t => t.path), n = paths.length, frames = [];
  const upTo = new Array(BUCKETS + 1);   // tiles revealed by each bucket edge
  for (let f = 0, idx = 0; f <= BUCKETS; f++) {
    while (idx < n && (f === BUCKETS || plan.tiles[idx].threshold <= f / BUCKETS)) idx++;
    upTo[f] = idx;
  }
  const shape = f => reverse ? paths.slice(upTo[f]).join('') : paths.slice(0, upTo[f]).join('');
  for (let f = 0; f <= BUCKETS; f++) {
    if (f > 0) frames.push({ clipPath: clip(shape(f - 1)), offset: f / BUCKETS - STEP_EPS });
    frames.push({ clipPath: clip(shape(f)), offset: f / BUCKETS });
  }
  return frames;
}

/* Accent-colour boundary flashes, cycling a small pool of nodes (the site does this with gsap). */
function runAccentTrail(anim, plan) {
  const SAMPLES = 8;
  let raf = 0, pool = 0, last = -1;
  const stop = () => cancelAnimationFrame(raf);
  anim.finished.then(stop, stop);
  const tick = () => {
    const p = anim.effect && anim.effect.getComputedTiming().progress;
    if (typeof p !== 'number') return;
    const s = Math.floor(p * SAMPLES);
    if (s !== last) {
      last = s;
      const tile = plan.tiles[Math.min(plan.tiles.length - 1, Math.floor(p * plan.tiles.length))];
      const node = pixels[pool++ % pixels.length];
      Object.assign(node.style, { left: tile.x + 'px', top: tile.y + 'px', width: plan.tileSize + 'px', height: plan.tileSize + 'px' });
      node.animate([{ opacity: .9 }, { opacity: 0 }], { duration: 80, easing: 'ease-in', fill: 'forwards' });
    }
    if (anim.playState === 'running') raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);
}

/* Two fixed plans. Next: pixels spawn at the right edge and sweep left to cover the old slide, then the same
   right-to-left front eats the veil to open the new one. Prev mirrors it (left to right). The origin sits
   far off-screen so the front is near vertical. */
const durationMs = DURATION_MS;
const makePlan = dir => buildPixelPlan(1920, 1080, { x: 960 - dir * 3960, y: 540 }, 40, {
  direction: { x: dir, y: 0 }, jitter: 0.06, cluster: 2,
});
const plans = { next: makePlan(-1), prev: makePlan(1) };
let plan = plans.next;
function sweep(reverse) {
  const anim = layer.animate(buildClipKeyframes(plan, reverse), { duration: durationMs, easing: PIXEL_EASE, fill: 'forwards' });
  runAccentTrail(anim, plan);
  return anim.finished.then(() => anim, () => anim);
}
const clearVeil = anim => { layer.style.clipPath = 'inset(0 0 0 100%)'; anim && anim.cancel(); veil.hidden = true; };

/* --- Slide state --- */
const fit = () => {
  const f = Math.min(innerWidth / 1920, innerHeight / 1080);
  stage.style.transform = `translate(${(innerWidth - 1920 * f) / 2}px,${(innerHeight - 1080 * f) / 2}px) scale(${f})`;
};
const show = i => {                       // instant swap (used while the veil covers the stage)
  cur = Math.max(0, Math.min(i, slides.length - 1));
  slides.forEach((s, k) => { s.classList.toggle('active', k === cur); s.classList.toggle('visible', k === cur); });
  veil.classList.toggle('light-veil', slides[cur].classList.contains('dark'));   // veil inverts the active slide's theme
  count.textContent = `${cur + 1} / ${slides.length}`;
  bar.style.setProperty('--p', (cur + 1) / slides.length);
  history.replaceState(null, '', '#' + (cur + 1));
};
let busy = false, queued = null;
async function go(i) {
  i = Math.max(0, Math.min(i, slides.length - 1));
  if (busy) { queued = i; return; }        // keep only the latest request while a transition runs
  if (i === cur) return;
  if (reduced) return show(i);
  busy = true;
  plan = i < cur ? plans.prev : plans.next;   // going back sweeps left to right
  veil.hidden = false;
  layer.style.clipPath = '';
  await sweep(false);                      // cover
  show(queued ?? i); queued = null;
  const anim = await sweep(true);          // reveal the new slide
  clearVeil(anim);
  busy = false;
  if (queued !== null && queued !== cur) go(queued);
  queued = null;
}

/* --- Language: EN/ID pill, choice persisted --- */
const langBtns = [...document.querySelectorAll('.lang-pill button')];
function setLang(l) {
  document.documentElement.lang = l;
  langBtns.forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === l));
  try { localStorage.setItem('deck-lang', l); } catch {}
}
langBtns.forEach(b => b.addEventListener('click', () => { setLang(b.dataset.lang); b.blur(); }));
let saved = null;
try { saved = localStorage.getItem('deck-lang'); } catch {}
setLang(saved === 'id' ? 'id' : 'en');

addEventListener('resize', fit);
addEventListener('keydown', e => {
  if (e.target.closest && e.target.closest('.lang-pill')) return;   // pill buttons handle their own keys
  if (['ArrowRight', 'ArrowDown', ' ', 'PageDown'].includes(e.key)) { e.preventDefault(); go(cur + 1); }
  if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) { e.preventDefault(); go(cur - 1); }
  if (e.key === 'Home') go(0);
  if (e.key === 'End') go(slides.length - 1);
});
let x0 = null;
addEventListener('touchstart', e => x0 = e.touches[0].clientX);
addEventListener('touchend', e => {
  if (x0 === null) return;
  const d = e.changedTouches[0].clientX - x0;
  if (Math.abs(d) > 50) go(cur + (d < 0 ? 1 : -1));
  x0 = null;
});
bar.addEventListener('click', e => go(Math.min(slides.length - 1, Math.floor(e.clientY / innerHeight * slides.length))));  // click the bar to seek
let wl = 0;
addEventListener('wheel', e => {
  if (Date.now() - wl < 600 || Math.abs(e.deltaY) < 20) return;
  wl = Date.now(); go(cur + (e.deltaY > 0 ? 1 : -1));
});

/* --- First load: the veil starts covering the stage, then pixels reveal the opening slide --- */
fit();
show((parseInt(location.hash.slice(1)) || 1) - 1);
if (reduced) clearVeil();
else (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => sweep(true)).then(clearVeil);
