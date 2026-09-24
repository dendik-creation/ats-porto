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

/* Discrete clip-path keyframes: hold, then jump, on every bucket edge (avoids path() morphing). */
function buildClipKeyframes(plan, reverse) {
  const clip = p => `path('${p || 'M0 0h0v0h0Z'}')`, frames = [];
  let acc = '', idx = 0;
  for (let f = 0; f <= BUCKETS; f++) {
    const progress = f / BUCKETS;
    if (f > 0) frames.push({ clipPath: clip(acc), offset: progress - STEP_EPS });
    while (idx < plan.tiles.length && plan.tiles[idx].threshold <= progress) acc += plan.tiles[idx++].path;
    frames.push({ clipPath: clip(acc), offset: progress });
  }
  if (idx < plan.tiles.length) {
    for (; idx < plan.tiles.length; idx++) acc += plan.tiles[idx].path;
    frames[frames.length - 1] = { clipPath: clip(acc), offset: 1 };
  }
  if (!reverse) return frames;
  const n = frames.length;
  return frames.map((_, i) => ({ clipPath: frames[n - 1 - i].clipPath, offset: 1 - frames[n - 1 - i].offset }));
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

/* Random variant per slide change: origin, cascade direction, tile size, jitter, cluster and duration.
   Cover and reveal share one plan, so each change still reads as a single gesture. */
const pick = a => a[Math.floor(Math.random() * a.length)];
const ORIGINS = [[0, 0], [1920, 0], [0, 1080], [1920, 1080], [960, 540], [960, 0], [960, 1080], [0, 540], [1920, 540]];
let plan = null, lastKey = '', durationMs = DURATION_MS;
function randomPlan() {
  let key, o, angle, tile;
  do {  // never repeat the previous variant back to back
    o = pick(ORIGINS); angle = pick([0, 45, 90, 135, 180, 225, 270, 315]); tile = pick([24, 32, 40, 64]);
    key = `${o}|${angle}|${tile}`;
  } while (key === lastKey);
  lastKey = key;
  const r = angle * Math.PI / 180;
  // origin gets a little scatter so repeated corners still differ
  const origin = { x: o[0] + (Math.random() - .5) * 240, y: o[1] + (Math.random() - .5) * 160 };
  durationMs = DURATION_MS * (0.8 + Math.random() * 0.5);
  plan = buildPixelPlan(1920, 1080, origin, tile, {
    direction: { x: Math.cos(r), y: Math.sin(r) },
    jitter: pick([0.05, 0.09, 0.14]), cluster: pick([1, 2, 3, 4]),
  });
}
function sweep(reverse) {
  if (!plan) randomPlan();
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
  randomPlan();
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

addEventListener('resize', fit);
addEventListener('keydown', e => {
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
bar.addEventListener('click', e => go(Math.min(slides.length - 1, Math.floor(e.clientX / innerWidth * slides.length))));  // click the bar to seek
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
