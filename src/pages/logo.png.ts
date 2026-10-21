import type { APIRoute } from 'astro';
import { markPng } from '../lib/brand/markPng';

/** Raster logo for search engines (structured data). */
export const GET: APIRoute = () => markPng(512);
