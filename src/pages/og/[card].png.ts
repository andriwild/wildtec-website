import type { APIRoute, GetStaticPaths } from 'astro';
import { allCards, type OgCard } from '../../lib/og/cards';
import { renderOgCard } from '../../lib/og/render';

export const getStaticPaths = (() =>
  allCards.map((card) => ({ params: { card: card.id }, props: { card } }))) satisfies GetStaticPaths;

export const GET: APIRoute<{ card: OgCard }> = async ({ props }) =>
  new Response(await renderOgCard(props.card), { headers: { 'Content-Type': 'image/png' } });
