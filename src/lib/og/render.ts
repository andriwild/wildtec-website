import satori from 'satori';
import sharp from 'sharp';
import { fonts } from './fonts';
import { ogImageSize, type OgCard } from './cards';
import { ogTemplate } from './template';

/** Renders a card to PNG. Satori draws text as paths, so sharp needs no fonts. */
export async function renderOgCard(card: OgCard): Promise<Uint8Array<ArrayBuffer>> {
  const svg = await satori(ogTemplate(card) as unknown as Parameters<typeof satori>[0], { ...ogImageSize, fonts });
  return new Uint8Array(await sharp(Buffer.from(svg)).png().toBuffer());
}
