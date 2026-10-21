import { jassly } from './jassly';
import { klikkr } from './klikkr';
import { synci } from './synci';
import type { Product } from './types';

export type { Product, ProductStatus, Screenshot, Feature, Showcase } from './types';

export const products: Product[] = [klikkr, jassly, synci];
