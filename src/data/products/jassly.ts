import { sameForAll } from '../../i18n/locales';
import type { Product, Screenshot } from './types';
import icon from '../../assets/icons/jassly.png';
import board from '../../assets/jassly/board.jpg';
import camera from '../../assets/jassly/camera.jpg';
import cards from '../../assets/jassly/cards.jpg';
import mode from '../../assets/jassly/mode.jpg';
import differenzler from '../../assets/jassly/differenzler.jpg';

export const boardScreen: Screenshot = {
  image: sameForAll(board),
  alt: { de: 'jassly: Jasstafel', en: 'jassly: scoreboard' },
};

const cameraScreen: Screenshot = {
  image: sameForAll(camera),
  alt: { de: 'jassly: Karten fotografieren', en: 'jassly: photograph the cards' },
};

export const jassly: Product = {
  slug: 'jassly',
  name: 'jassly',
  url: 'https://jassly.ch',
  icon,
  status: 'beta',
  tint: '#EEF1E8',
  platforms: ['iOS', 'Android'],
  summary: {
    de: 'Die digitale Jasstafel. Die Kamera erkennt die Karten und rechnet mit.',
    en: 'The digital Jass scoreboard. The camera reads the cards and keeps count.',
  },
  tagline: { de: 'Die digitale Jasstafel.', en: 'The digital Jass scoreboard.' },
  description: {
    de: 'Karten fotografieren, Punkte stehen. Für Schieber und Differenzler.',
    en: "Snap the cards and the points are counted. For Schieber and Differenzler, Switzerland's favourite card games.",
  },
  cover: cameraScreen,
  screenshots: [
    boardScreen,
    cameraScreen,
    {
      image: sameForAll(cards),
      alt: { de: 'jassly: erkannte Karten', en: 'jassly: recognised cards' },
    },
    {
      image: sameForAll(mode),
      alt: { de: 'jassly: Spielmodus wählen', en: 'jassly: choose the game mode' },
    },
    {
      image: sameForAll(differenzler),
      alt: { de: 'jassly: Differenzler', en: 'jassly: Differenzler' },
    },
  ],
  features: [
    {
      title: { de: 'Kamera statt Kopfrechnen', en: 'Camera, not mental maths' },
      text: {
        de: 'Stiche auffächern, abfotografieren, fertig.',
        en: 'Fan out the tricks, take a photo, done.',
      },
    },
    {
      title: { de: 'Weis und Matsch inklusive', en: 'Weis and Matsch included' },
      text: {
        de: 'Alles wird korrekt mitgerechnet.',
        en: 'Every bonus is counted correctly.',
      },
    },
    {
      title: { de: 'Jede Runde im Verlauf', en: 'Every round on record' },
      text: {
        de: 'Letzte Runde ändern oder rückgängig machen.',
        en: 'Edit or undo the last round at any time.',
      },
    },
  ],
  showcases: [],
};
