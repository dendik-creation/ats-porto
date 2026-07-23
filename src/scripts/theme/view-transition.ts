// Thin wrapper around the *native* View Transition API. Astro's ClientRouter
// has its own document.startViewTransition nulled out in Layout.astro (see
// the comment there) to protect the GSAP page-curtain — this module talks to
// the rescued reference on window instead, so ThemeToggle keeps working
// without touching that decision.

declare global {
  interface Window {
    __nativeStartViewTransition?: (callback: () => void | Promise<void>) => ViewTransition;
  }
}

export interface PointerOrigin {
  x: number;
  y: number;
}

/** Reads the click origin off a real pointer event, falling back to the
 *  triggering element's own center — covers keyboard activation (Enter/Space
 *  dispatch a synthetic click with no meaningful clientX/clientY in some
 *  browsers) and any other non-pointer invocation. */
export function capturePointer(event: Event, fallbackEl: Element): PointerOrigin {
  if (event instanceof MouseEvent && (event.clientX !== 0 || event.clientY !== 0)) {
    return { x: event.clientX, y: event.clientY };
  }
  const rect = fallbackEl.getBoundingClientRect();
  return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
}

export function supportsViewTransition(): boolean {
  return typeof window.__nativeStartViewTransition === 'function';
}

export interface TransitionHandle {
  ready: Promise<void>;
  finished: Promise<void>;
}

/** Runs `update` inside a native view transition when available; otherwise
 *  runs it synchronously and returns already-settled promises so callers
 *  never need a separate no-VT code path. */
export function runViewTransition(update: () => void): TransitionHandle {
  if (!supportsViewTransition()) {
    update();
    return { ready: Promise.resolve(), finished: Promise.resolve() };
  }

  const transition = window.__nativeStartViewTransition!(update);
  return { ready: transition.ready, finished: transition.finished };
}
