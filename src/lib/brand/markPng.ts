import sharp from 'sharp';
import { markSvg } from '../../data/brand';

/** Renders the mark as a square PNG. */
export async function markPng(size: number, options?: Parameters<typeof markSvg>[0]): Promise<Response> {
  const png = await sharp(Buffer.from(markSvg(options)), { density: (72 * size) / 30 })
    .resize(size, size)
    .png()
    .toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
}
