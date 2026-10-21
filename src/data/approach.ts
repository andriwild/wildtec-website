import type { Localized } from '../i18n/locales';

export interface Principle {
  title: Localized;
  text: Localized;
}

export const principles: Principle[] = [
  {
    title: { de: 'Direkter Draht', en: 'Direct line' },
    text: {
      de: 'Ein Ansprechpartner vom ersten Gespräch bis zum Release.',
      en: 'One contact from the first call to release.',
    },
  },
  {
    title: { de: 'Schnell geliefert', en: 'Fast delivery' },
    text: {
      de: 'Kurze Zyklen und moderne Werkzeuge. KI-beschleunigt, sorgfältig geprüft.',
      en: 'Short cycles and modern tooling. AI-accelerated, carefully reviewed.',
    },
  },
  {
    title: { de: 'Bis in den Store', en: 'All the way to the store' },
    text: {
      de: 'Release, Updates und Betrieb aus einer Hand.',
      en: 'Release, updates and operations from a single source.',
    },
  },
];
