/** The zigzag "W" of the Wild Tec mark, drawn on a 30×30 grid. */
export const markPoints = '6.5,9 10.5,21 15,12.5 19.5,21 23.5,9';

export const brandColors = {
  ink: '#0E1730',
  paper: '#FFFFFF',
  accent: '#2F5BEA',
  accentSoft: '#EAF0FF',
  muted: '#5A6478',
};

/**
 * Standalone SVG of the mark, the single source for the favicon, the touch icon,
 * the logo in structured data and the social images.
 * `rounded: false` fills the whole square, for platforms that round icons themselves.
 */
export function markSvg({ rounded = true } = {}): string {
  return [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">',
    `<rect width="30" height="30" rx="${rounded ? 8 : 0}" fill="${brandColors.ink}"/>`,
    `<polyline points="${markPoints}" fill="none" stroke="${brandColors.paper}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`,
    '</svg>',
  ].join('');
}
