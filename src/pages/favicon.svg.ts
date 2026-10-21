import type { APIRoute } from 'astro';
import { markSvg } from '../data/brand';

export const GET: APIRoute = () =>
  new Response(markSvg(), { headers: { 'Content-Type': 'image/svg+xml' } });
