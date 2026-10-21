import type { Font } from 'satori';
// Satori reads WOFF but not WOFF2, so the cards use the static Fontsource builds.
import displayBold from '@fontsource/schibsted-grotesk/files/schibsted-grotesk-latin-700-normal.woff?inline';
import displayHeavy from '@fontsource/schibsted-grotesk/files/schibsted-grotesk-latin-800-normal.woff?inline';
import bodyMedium from '@fontsource/figtree/files/figtree-latin-500-normal.woff?inline';
import bodySemibold from '@fontsource/figtree/files/figtree-latin-600-normal.woff?inline';

const decode = (dataUri: string) => Buffer.from(dataUri.slice(dataUri.indexOf(',') + 1), 'base64');

export const fontFamilies = { display: 'Schibsted Grotesk', body: 'Figtree' };

export const fonts: Font[] = [
  { name: fontFamilies.display, data: decode(displayBold), weight: 700, style: 'normal' },
  { name: fontFamilies.display, data: decode(displayHeavy), weight: 800, style: 'normal' },
  { name: fontFamilies.body, data: decode(bodyMedium), weight: 500, style: 'normal' },
  { name: fontFamilies.body, data: decode(bodySemibold), weight: 600, style: 'normal' },
];
