// Single resolve/apply/persist authority for the site's theme state, used by
// ThemeToggle's cinematic switch. Layout.astro keeps its own inline,
// pre-paint copy of the resolve/apply logic (see the comment there) because
// it must run before first paint, ahead of any module script, and it alone
// still needs to resolve a first-time visitor's system preference — that
// duplication is an intentional FOUC guard, not drift.

export type ResolvedTheme = 'light' | 'dark';

const STORAGE_KEY = 'theme';
const DARK_META = '#1a1814';
const LIGHT_META = '#f0ece1';

/** What theme *is currently rendered* on <html data-theme>. */
export function getResolvedTheme(): ResolvedTheme {
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}

function applyMeta(theme: ResolvedTheme): void {
  document.getElementById('theme-color-meta')?.setAttribute('content', theme === 'dark' ? DARK_META : LIGHT_META);
}

/** Applies + persists an explicit theme and updates the meta tag. Safe to
 *  call from any click handler. */
export function setTheme(theme: ResolvedTheme): ResolvedTheme {
  const root = document.documentElement;
  root.setAttribute('data-theme', theme);
  root.style.colorScheme = theme;
  localStorage.setItem(STORAGE_KEY, theme);
  applyMeta(theme);
  return theme;
}

/** Flips the *rendered* theme to its explicit opposite. */
export function toggleTheme(): ResolvedTheme {
  return setTheme(getResolvedTheme() === 'dark' ? 'light' : 'dark');
}
