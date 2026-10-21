import { sameForAll } from '../../i18n/locales';
import type { Product, Screenshot } from './types';
import icon from '../../assets/icons/synci.png';
import sportarten from '../../assets/synci/sportarten.jpg';
import liga from '../../assets/synci/liga.jpg';
import abos from '../../assets/synci/abos.jpg';
import kalender from '../../assets/synci/kalender.jpg';
import verein from '../../assets/synci/verein.jpg';

const sportsScreen: Screenshot = {
  image: sameForAll(sportarten),
  alt: { de: 'synci: Sportarten', en: 'synci: sports' },
};

export const clubScreen: Screenshot = {
  image: sameForAll(verein),
  alt: { de: 'synci: Termine eines Vereins', en: 'synci: club fixtures' },
};

export const synci: Product = {
  slug: 'synci',
  name: 'synci',
  url: 'https://synci.ch',
  icon,
  status: 'dev',
  tint: '#E4EEF8',
  platforms: ['Web', 'iOS', 'Android'],
  summary: {
    de: 'Spiele von Teams, Ligen und Vereinen automatisch im eigenen Kalender.',
    en: 'Fixtures of your teams, leagues and clubs, automatically in your own calendar.',
  },
  tagline: { de: 'Sportevents im eigenen Kalender.', en: 'Sports events in your own calendar.' },
  description: {
    de: 'Teams, Ligen und Vereine abonnieren. Neue und geänderte Spiele erscheinen automatisch im Kalender.',
    en: 'Follow teams, leagues and clubs. New and rescheduled fixtures appear in your calendar automatically.',
  },
  cover: sportsScreen,
  screenshots: [
    sportsScreen,
    {
      image: sameForAll(liga),
      alt: { de: 'synci: Teams einer Liga', en: 'synci: teams of a league' },
    },
    {
      image: sameForAll(abos),
      alt: { de: 'synci: Abos', en: 'synci: subscriptions' },
    },
    {
      image: sameForAll(kalender),
      alt: { de: 'synci: Kalender verbinden', en: 'synci: connect a calendar' },
    },
    clubScreen,
  ],
  features: [
    {
      title: { de: 'Viele Sportarten', en: 'Many sports' },
      text: {
        de: 'Von Eishockey über Fussball bis Formel 1.',
        en: 'From ice hockey and football to Formula 1.',
      },
    },
    {
      title: { de: 'Immer aktuell', en: 'Always up to date' },
      text: {
        de: 'Verschiebungen landen automatisch im Kalender.',
        en: 'Rescheduled games update in your calendar automatically.',
      },
    },
    {
      title: { de: 'Auch für Vereine', en: 'Made for clubs too' },
      text: {
        de: 'Trainings und Spiele des eigenen Vereins teilen.',
        en: "Share your club's trainings and games.",
      },
    },
  ],
  showcases: [],
};
