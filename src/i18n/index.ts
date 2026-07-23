import type { Locale } from './locales';
import { DEFAULT_LOCALE, LOCALES } from './locales';
import { cv as enCV } from './cv/en.cv';
import { cv as idCV } from './cv/id.cv';
import enUI from './ui/en';
import idUI from './ui/id';
import type { CV } from '../data/cv';
import type { UiStrings } from './ui.types';

export type { Locale };
export { LOCALES, DEFAULT_LOCALE };

const CVS: Record<Locale, CV> = { en: enCV, id: idCV };
const UIS: Record<Locale, UiStrings> = { en: enUI, id: idUI };

// Project slugs are the URL contract between locales — a mistranslated or
// reordered id project array must fail the build, not produce orphan routes.
const enSlugs = enCV.projects.map((p) => p.slug);
const idSlugs = idCV.projects.map((p) => p.slug);
if (JSON.stringify(enSlugs) !== JSON.stringify(idSlugs)) {
  throw new Error(
    `i18n: project slugs differ between locales.\n  en: ${enSlugs.join(', ')}\n  id: ${idSlugs.join(', ')}`,
  );
}

export function resolveLocale(value: string | undefined): Locale {
  return (LOCALES as readonly string[]).includes(value ?? '') ? (value as Locale) : DEFAULT_LOCALE;
}

export function getCV(locale: Locale): CV {
  return CVS[locale];
}

export function t(locale: Locale): UiStrings {
  return UIS[locale];
}
