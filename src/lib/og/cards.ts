import { brandColors } from '../../data/brand';
import { company } from '../../data/company';
import { products, type Product } from '../../data/products';
import { locales, type Locale } from '../../i18n/locales';
import { useTranslations } from '../../i18n/translations';

/** Content of one social preview image (Open Graph). */
export interface OgCard {
  id: string;
  title: string;
  subtitle: string;
  /** Slugs of the product icons shown on the tinted side. */
  icons: string[];
  tint: string;
}

export const ogImageSize = { width: 1200, height: 630 };

export function homeCard(locale: Locale): OgCard {
  const { hero } = useTranslations(locale);
  return {
    id: `home-${locale}`,
    title: `${hero.titleStart}${hero.titleHighlight}${hero.titleEnd}`,
    subtitle: hero.eyebrow,
    icons: products.map((product) => product.slug),
    tint: brandColors.accentSoft,
  };
}

export function productCard(product: Product, locale: Locale): OgCard {
  return {
    id: `${product.slug}-${locale}`,
    title: product.name,
    subtitle: product.tagline[locale],
    icons: [product.slug],
    tint: product.tint,
  };
}

export const allCards: OgCard[] = locales.flatMap((locale) => [
  homeCard(locale),
  ...products.map((product) => productCard(product, locale)),
]);

/** What a page passes to the layout to reference its card. */
export const ogImageOf = (card: OgCard) => ({
  src: `/og/${card.id}.png`,
  alt: `${company.name} – ${card.title}`,
});
