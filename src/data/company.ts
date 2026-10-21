import type { Localized } from '../i18n/locales';

export const company = {
  name: 'Wild Tec',
  legalForm: { de: 'Einzelunternehmen', en: 'Sole proprietorship' } satisfies Localized,
  street: 'Im Baumgarten 4',
  postalCode: '6252',
  city: 'Dagmersellen',
  country: { de: 'Schweiz', en: 'Switzerland' } satisfies Localized,
  countryCode: 'CH',
  email: 'info@wild-tec.ch',
  uid: 'CHE-386.932.040',
  url: 'https://wild-tec.ch',
};
