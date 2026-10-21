import type { ImageMetadata } from 'astro';
import type { Localized } from '../../i18n/locales';

export type ProductStatus = 'live' | 'beta' | 'dev';

export interface Screenshot {
  image: Localized<ImageMetadata>;
  alt: Localized;
}

export interface Feature {
  title: Localized;
  text: Localized;
}

/** A highlighted image with copy, e.g. the hardware or a companion app. */
export interface Showcase {
  image: Localized<ImageMetadata>;
  alt: Localized;
  eyebrow: Localized;
  title: Localized;
  text: Localized;
}

export interface Product {
  slug: string;
  name: string;
  url: string;
  icon: ImageMetadata;
  status: ProductStatus;
  /** Soft brand colour behind screenshots. */
  tint: string;
  platforms: string[];
  summary: Localized;
  tagline: Localized;
  description: Localized;
  cover: Screenshot;
  screenshots: Screenshot[];
  features: Feature[];
  showcases: Showcase[];
}
