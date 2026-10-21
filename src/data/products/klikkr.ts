import type { Product, Screenshot } from './types';
import icon from '../../assets/icons/klikkr.png';
import homeDe from '../../assets/klikkr/home-de.webp';
import homeEn from '../../assets/klikkr/home-en.webp';
import setupDe from '../../assets/klikkr/setup-de.webp';
import setupEn from '../../assets/klikkr/setup-en.webp';
import scoreboardDe from '../../assets/klikkr/scoreboard-de.webp';
import scoreboardEn from '../../assets/klikkr/scoreboard-en.webp';
import summaryDe from '../../assets/klikkr/summary-de.webp';
import summaryEn from '../../assets/klikkr/summary-en.webp';
import tournamentDe from '../../assets/klikkr/tournament-de.webp';
import tournamentEn from '../../assets/klikkr/tournament-en.webp';
import watchPairDe from '../../assets/klikkr/watch-pair-de.webp';
import watchPairEn from '../../assets/klikkr/watch-pair-en.webp';
import wristbands from '../../assets/klikkr/wristbands.jpg';

const home: Screenshot = {
  image: { de: homeDe, en: homeEn },
  alt: { de: 'klikkr: Sportart wählen', en: 'klikkr: choose a sport' },
};

export const scoreboard: Screenshot = {
  image: { de: scoreboardDe, en: scoreboardEn },
  alt: { de: 'klikkr: Scoreboard', en: 'klikkr: scoreboard' },
};

export const klikkr: Product = {
  slug: 'klikkr',
  name: 'klikkr',
  url: 'https://klikkr.ch',
  icon,
  status: 'live',
  tint: '#ECEEFF',
  platforms: ['iOS', 'Android', 'Apple Watch'],
  summary: {
    de: 'Punkte zählen per Klick. Armband, App und Apple Watch für Tennis, Padel, Squash und mehr.',
    en: 'Keep score with a click. Wristband, app and Apple Watch for tennis, padel, squash and more.',
  },
  tagline: { de: 'Punkte zählen per Klick.', en: 'Keep score with a click.' },
  description: {
    de: 'Das Armband zählt den Punkt, die App führt das Scoreboard. Für Tennis, Padel, Squash, Badminton, Tischtennis und Pickleball.',
    en: 'The wristband counts the point, the app keeps the scoreboard. For tennis, padel, squash, badminton, table tennis and pickleball.',
  },
  cover: home,
  screenshots: [
    home,
    {
      image: { de: setupDe, en: setupEn },
      alt: { de: 'klikkr: Teams einrichten', en: 'klikkr: set up teams' },
    },
    scoreboard,
    {
      image: { de: summaryDe, en: summaryEn },
      alt: { de: 'klikkr: Matchergebnis', en: 'klikkr: match result' },
    },
    {
      image: { de: tournamentDe, en: tournamentEn },
      alt: { de: 'klikkr: Turnier-Spielplan', en: 'klikkr: tournament schedule' },
    },
  ],
  features: [
    {
      title: { de: 'Ein Klick pro Punkt', en: 'One click per point' },
      text: {
        de: 'Das Armband zählt mit. Das Handy bleibt in der Tasche.',
        en: 'The wristband keeps count. Your phone stays in the bag.',
      },
    },
    {
      title: { de: 'Regeln eingebaut', en: 'Rules built in' },
      text: {
        de: 'Sätze, Tiebreak und Goldener Punkt je nach Sportart.',
        en: 'Sets, tie-breaks and golden point for each sport.',
      },
    },
    {
      title: { de: 'Turniere und Statistik', en: 'Tournaments and stats' },
      text: {
        de: 'Spielplan für mehrere Teams und Ergebnis nach jedem Match.',
        en: 'Schedules for multiple teams and a result after every match.',
      },
    },
  ],
  showcases: [
    {
      image: { de: wristbands, en: wristbands },
      alt: { de: 'Zwei klikkr-Armbänder', en: 'Two klikkr wristbands' },
      eyebrow: { de: 'Das Armband', en: 'The wristband' },
      title: { de: 'Ein Klick am Handgelenk.', en: 'One click on your wrist.' },
      text: {
        de: 'Das Armband verbindet sich per Bluetooth mit der App. Ein Klick zählt den Punkt.',
        en: 'The wristband connects to the app over Bluetooth. One click counts the point.',
      },
    },
    {
      image: { de: watchPairDe, en: watchPairEn },
      alt: {
        de: 'klikkr auf iPhone und Apple Watch',
        en: 'klikkr on iPhone and Apple Watch',
      },
      eyebrow: { de: 'Apple Watch', en: 'Apple Watch' },
      title: { de: 'Der Spielstand am Handgelenk.', en: 'The score on your wrist.' },
      text: {
        de: 'Mit der Apple Watch geht es auch ohne Armband. Ein Tipp zählt den Punkt, der Spielstand bleibt im Blick.',
        en: 'With Apple Watch, no wristband is needed. One tap counts the point and the score stays in view.',
      },
    },
  ],
};
