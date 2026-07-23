// Wires the cinematic ThemeToggle button: capture click origin, run the
// view transition, swap the theme, choreograph the reveal + icon as one
// sequence. Follows the same astro:page-load / AbortController idiom as
// scripts/animate.ts and Nav.astro's own script, since ThemeToggle is
// re-rendered fresh on every navigation just like Nav is.
import { getResolvedTheme, toggleTheme } from './theme';
import { capturePointer, runViewTransition } from './view-transition';
import { animateIcon, cleanupTransition, queryOverlay, runReveal, type IconRefs, type RevealVariant } from './animation';

function isReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function readIcon(button: HTMLElement): IconRefs | null {
  const sun = button.querySelector<SVGElement>('[data-tt-sun]');
  const moon = button.querySelector<SVGElement>('[data-tt-moon]');
  if (!sun || !moon) return null;
  return { sun, moon };
}

function syncButton(button: HTMLButtonElement, icon: IconRefs | null): void {
  const resolved = getResolvedTheme();
  const currentlyDark = resolved === 'dark';
  // aria-label always describes what the *next* click will do.
  const label = currentlyDark ? button.dataset.labelToLight : button.dataset.labelToDark;
  if (label) button.setAttribute('aria-label', label);
  if (icon) animateIcon(icon, currentlyDark, true); // instant sync, no flourish
}

async function runTransition(button: HTMLButtonElement, icon: IconRefs | null, event: Event): Promise<void> {
  const reduced = isReducedMotion();
  const origin = capturePointer(event, button);
  const variant = (button.dataset.variant as RevealVariant | undefined) ?? 'circle-reveal';
  const overlay = queryOverlay();

  if (reduced) {
    const resolved = toggleTheme();
    if (icon) animateIcon(icon, resolved === 'dark', true);
    syncButton(button, icon);
    return;
  }

  let resolvedTheme: 'light' | 'dark' = getResolvedTheme();
  const { ready, finished } = runViewTransition(() => {
    resolvedTheme = toggleTheme();
  });
  // The transition's own `finished` only resolves once its whole lifecycle
  // (including our pseudo-element reveal below) is over — nothing here
  // needs to await it, but an unhandled rejection would surface if the
  // browser ever skips the transition, so catch it defensively.
  finished.catch(() => undefined);

  // `ready` is the moment the ::view-transition-new(root) pseudo-element
  // exists and is about to render — the only point at which it's safe to
  // start animating it. Waiting for `finished` instead (an earlier version
  // of this code did) would run after the pseudo-element tree is already
  // torn down, silently no-op-ing the reveal.
  await ready;

  if (icon) animateIcon(icon, resolvedTheme === 'dark', false);
  await runReveal(variant, origin, overlay);

  cleanupTransition(overlay);
  syncButton(button, icon);
}

function init(signal: AbortSignal): void {
  const button = document.querySelector<HTMLButtonElement>('[data-tt-toggle]');
  if (!button) return;
  const icon = readIcon(button);

  syncButton(button, icon);

  let running = false;
  button.addEventListener(
    'click',
    async (event) => {
      if (running) return;
      running = true;
      try {
        await runTransition(button, icon, event);
      } finally {
        running = false;
      }
    },
    { signal },
  );
}

let cleanup: AbortController | null = null;
function initAll(): void {
  cleanup?.abort();
  cleanup = new AbortController();
  init(cleanup.signal);
}

document.addEventListener('astro:page-load', initAll);
