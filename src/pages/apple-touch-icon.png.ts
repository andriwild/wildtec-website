import type { APIRoute } from 'astro';
import { markPng } from '../lib/brand/markPng';

/** iOS rounds the corners itself. */
export const GET: APIRoute = () => markPng(180, { rounded: false });
