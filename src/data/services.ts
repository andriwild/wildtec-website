import type { Localized } from '../i18n/locales';

export type ServiceIcon = 'phone' | 'browser' | 'cloud' | 'bluetooth';

export interface Service {
  icon: ServiceIcon;
  title: Localized;
  text: Localized;
}

export const services: Service[] = [
  {
    icon: 'phone',
    title: { de: 'Mobile Apps', en: 'Mobile apps' },
    text: {
      de: 'Apps für iOS, Android und Apple Watch. Klares Design, stabiler Code.',
      en: 'Apps for iOS, Android and Apple Watch. Clean design, solid code.',
    },
  },
  {
    icon: 'browser',
    title: { de: 'Web', en: 'Web' },
    text: {
      de: 'Websites und Web-Apps, schnell und gut auffindbar.',
      en: 'Websites and web apps that load fast and rank well.',
    },
  },
  {
    icon: 'cloud',
    title: { de: 'Backend & Cloud', en: 'Backend & cloud' },
    text: {
      de: 'Schnittstellen, Datenbanken, Login und Bezahlung. Inklusive Betrieb.',
      en: 'APIs, databases, sign-in and payments. Operations included.',
    },
  },
  {
    icon: 'bluetooth',
    title: { de: 'Hardware & Bluetooth', en: 'Hardware & Bluetooth' },
    text: {
      de: 'Geräte, die per Bluetooth mit Apps sprechen.',
      en: 'Devices that talk to apps over Bluetooth.',
    },
  },
];
