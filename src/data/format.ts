// Date/label helpers for résumé fields shaped as "YYYY-MM" or "Present".
// Locale-aware: every function takes the active Locale and pulls display
// strings from that locale's UI dictionary rather than hardcoding English.
import type { Locale } from '../i18n/locales';
import { t } from '../i18n';
import type { Project } from './cv';

export function monthYear(value: string, locale: Locale): string {
  if (!value || value === 'Present') return t(locale).common.present;
  const [year, month] = value.split('-');
  if (!month) return year;
  const date = new Date(`${year}-${month}-01T00:00:00Z`);
  return new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(date);
}

export function rangeLabel(start: string, end: string, locale: Locale): string {
  return `${monthYear(start, locale)} — ${monthYear(end, locale)}`;
}

// Province-level home base — city is intentionally never surfaced in the UI.
export function homeRegion(loc: { region: string; countryCode: string }, locale: Locale): string {
  const country = t(locale).common.country[loc.countryCode] ?? loc.countryCode;
  return `${loc.region}, ${country}`;
}

export interface ProjectLink {
  label: string;
  href: string;
}

// Ordered, honest link list — only non-empty URLs survive, so empty fields never render.
export function projectLinks(project: Project, locale: Locale): ProjectLink[] {
  const l = project.links;
  if (!l) return [];
  const labels = t(locale).projects.linkLabels;
  return [
    { label: labels.repo, href: l.repo },
    { label: labels.live, href: l.live },
    { label: labels.playStore, href: l.playStore },
  ].filter((x): x is ProjectLink => Boolean(x.href && x.href.trim()));
}
