import type { Locale, Localized } from './locales';
import { de, type Dictionary } from './dictionaries/de';
import { en } from './dictionaries/en';

const dictionaries: Localized<Dictionary> = { de, en };

export function useTranslations(locale: Locale): Dictionary {
  return dictionaries[locale];
}
