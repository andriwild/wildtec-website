import type { Locale, Localized } from './locales';

const prefix = (locale: Locale) => (locale === 'de' ? '' : `/${locale}`);

export const routes = {
  home: (locale: Locale) => `${prefix(locale)}/`,
  product: (slug: string, locale: Locale) => `${prefix(locale)}/${slug}/`,
  imprint: (locale: Locale) => (locale === 'de' ? '/impressum/' : '/en/imprint/'),
  privacy: (locale: Locale) => (locale === 'de' ? '/datenschutz/' : '/en/privacy/'),
};

/** Anchor ids of the home page sections, translated for nicer URLs. */
export const sectionIds = {
  products: { de: 'produkte', en: 'products' },
  services: { de: 'leistungen', en: 'services' },
  contact: { de: 'kontakt', en: 'contact' },
} satisfies Record<string, Localized>;

export type Section = keyof typeof sectionIds;

export const sectionHref = (section: Section, locale: Locale) =>
  `${routes.home(locale)}#${sectionIds[section][locale]}`;

/** Builds the path of the same page in every locale. */
export const alternatesOf = (pathFor: (locale: Locale) => string): Localized => ({
  de: pathFor('de'),
  en: pathFor('en'),
});
