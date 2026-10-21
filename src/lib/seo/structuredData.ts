import { company } from '../../data/company';
import { languageTags, locales } from '../../i18n/locales';

/** Structured data (schema.org) that search engines read from JSON-LD. */
export type Thing = Record<string, unknown>;

const absolute = (path: string) => new URL(path, company.url).href;
const organizationId = absolute('/#organization');

export const organization: Thing = {
  '@type': 'Organization',
  '@id': organizationId,
  name: company.name,
  url: absolute('/'),
  logo: absolute('/logo.png'),
  email: company.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.street,
    postalCode: company.postalCode,
    addressLocality: company.city,
    addressCountry: company.countryCode,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: company.email,
    availableLanguage: ['German', 'English'],
  },
};

/** Gives Google the site name shown above search results. */
export const website: Thing = {
  '@type': 'WebSite',
  '@id': absolute('/#website'),
  name: company.name,
  alternateName: new URL(company.url).hostname,
  url: absolute('/'),
  inLanguage: locales.map((locale) => languageTags[locale]),
  publisher: { '@id': organizationId },
};

export interface Crumb {
  name: string;
  path: string;
}

export const breadcrumbs = (crumbs: Crumb[]): Thing => ({
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: absolute(crumb.path),
  })),
});

export const graph = (things: Thing[]) => ({ '@context': 'https://schema.org', '@graph': things });
