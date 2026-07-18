// Date helpers for résumé fields shaped as "YYYY-MM" or "Present".

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function monthYear(value: string): string {
  if (!value || value === 'Present') return 'Present';
  const [year, month] = value.split('-');
  if (!month) return year;
  const idx = Number(month) - 1;
  return `${MONTHS[idx] ?? ''} ${year}`.trim();
}

export function rangeLabel(start: string, end: string): string {
  return `${monthYear(start)} — ${monthYear(end)}`;
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const COUNTRY: Record<string, string> = { ID: 'Indonesia' };

// Province-level home base — city is intentionally never surfaced in the UI.
export function homeRegion(loc: { region: string; countryCode: string }): string {
  return `${loc.region}, ${COUNTRY[loc.countryCode] ?? loc.countryCode}`;
}

import type { Project } from './cv';

export interface ProjectLink {
  label: string;
  href: string;
}

// Ordered, honest link list — only non-empty URLs survive, so empty fields never render.
export function projectLinks(project: Project): ProjectLink[] {
  const l = project.links;
  if (!l) return [];
  return [
    { label: 'Code', href: l.repo },
    { label: 'Live', href: l.live },
    { label: 'Google Play', href: l.playStore },
  ].filter((x): x is ProjectLink => Boolean(x.href && x.href.trim()));
}
