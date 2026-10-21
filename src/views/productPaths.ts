import type { GetStaticPaths } from 'astro';
import { products } from '../data/products';

/** One static page per product; shared by every locale's `[product].astro`. */
export const productPaths = (() =>
  products.map((product) => ({ params: { product: product.slug }, props: { product } }))) satisfies GetStaticPaths;
