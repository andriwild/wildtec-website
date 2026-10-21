export const locales = ['de', 'en'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'de';

/** A value that exists once per supported locale. */
export type Localized<T = string> = Record<Locale, T>;

/** BCP 47 tags used for `<html lang>` and `hreflang`. */
export const languageTags: Localized = { de: 'de-CH', en: 'en' };

/** Open Graph locale codes. */
export const ogLocales: Localized = { de: 'de_CH', en: 'en_US' };

/** Uses the same value for every locale, e.g. a screenshot without translations. */
export function sameForAll<T>(value: T): Localized<T> {
  return { de: value, en: value };
}
