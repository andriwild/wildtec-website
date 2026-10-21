import { brandColors, markSvg } from '../../data/brand';
import { company } from '../../data/company';
import { fontFamilies } from './fonts';
import { iconDataUris } from './icons';
import { ogImageSize, type OgCard } from './cards';

type Style = Record<string, string | number>;

/** The element shape Satori accepts, without pulling in React. */
export interface OgNode {
  type: string;
  props: { style?: Style; src?: string; width?: number; height?: number; children?: OgChild | OgChild[] };
}
type OgChild = OgNode | string;

const el = (type: string, style: Style, children?: OgChild | OgChild[]): OgNode => ({
  type,
  props: { style, children },
});

const img = (src: string, size: number, style: Style = {}): OgNode => ({
  type: 'img',
  props: { src, width: size, height: size, style },
});

const markUri = `data:image/svg+xml;base64,${Buffer.from(markSvg()).toString('base64')}`;
const domain = new URL(company.url).hostname;

function brandRow(): OgNode {
  return el('div', { display: 'flex', alignItems: 'center', gap: 16 }, [
    img(markUri, 52),
    el('span', { fontFamily: fontFamilies.display, fontWeight: 700, fontSize: 32, color: brandColors.ink }, company.name),
  ]);
}

function copy(card: OgCard): OgNode {
  const single = card.icons.length === 1;
  return el('div', { display: 'flex', flexDirection: 'column', gap: 22 }, [
    el(
      'div',
      {
        fontFamily: fontFamilies.display,
        fontWeight: 800,
        fontSize: single ? 104 : 76,
        lineHeight: 1.04,
        letterSpacing: single ? -3 : -2,
        color: brandColors.ink,
      },
      card.title,
    ),
    el(
      'div',
      { fontFamily: fontFamilies.body, fontWeight: 500, fontSize: 36, lineHeight: 1.3, color: brandColors.muted },
      card.subtitle,
    ),
  ]);
}

function icons(card: OgCard): OgNode {
  const size = card.icons.length === 1 ? 236 : 136;
  return el(
    'div',
    {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 26,
      width: 420,
      background: card.tint,
    },
    card.icons.map((slug) =>
      img(iconDataUris[slug]!, size, {
        borderRadius: size * 0.225,
        boxShadow: '0 18px 40px -18px rgba(14, 23, 48, 0.45)',
      }),
    ),
  );
}

/** Layout of a social preview image: copy on the left, product icons on a tint. */
export function ogTemplate(card: OgCard): OgNode {
  return el(
    'div',
    { display: 'flex', ...ogImageSize, background: brandColors.paper },
    [
      el(
        'div',
        {
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 56px 60px 72px',
        },
        [
          brandRow(),
          copy(card),
          el('div', { fontFamily: fontFamilies.body, fontWeight: 600, fontSize: 28, color: brandColors.accent }, domain),
        ],
      ),
      icons(card),
    ],
  );
}
