# wild-tec.ch

Company website of **Wild Tec**, a software company in Dagmersellen, Switzerland.
Static site built with [Astro](https://astro.build), German (default) and English, hosted on GitHub Pages.

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type check + static build into dist/
npm run preview  # serve dist/
```

Requires Node.js 22.22 or newer.

## Structure

```
src/
  assets/       screenshots, product photos and app icons (optimised to WebP at build time)
  components/   UI by area: layout/, ui/, home/, product/, legal/
  data/         content: company details, products, services, principles
  i18n/         locales, translated UI strings, localized routes
  layouts/      BaseLayout (head, header, footer)
  pages/        thin route files; German at /, English at /en/
  styles/       design tokens and global base styles
  views/        page bodies shared by both languages
```

- **Add or change a product:** edit or add a file in `src/data/products/` and list it in `src/data/products/index.ts`. The home card and the product page at `/<slug>/` and `/en/<slug>/` are generated from it.
- **Change UI text:** `src/i18n/dictionaries/de.ts` and `en.ts`. The English dictionary is typed against the German one, so a missing key fails the build.
- **Change company details** (imprint, footer, contact, structured data): `src/data/company.ts`.

## Design decisions

- Light theme only, no dark mode.
- Fonts (Schibsted Grotesk, Figtree) are self-hosted via Fontsource. The site loads nothing from third parties and sets no cookies, which keeps the privacy page short.
- Plain scoped CSS per component instead of Tailwind. The site is small and the tokens in `src/styles/tokens.css` cover the design system.
- jassly screenshots are cropped out of the device frames from jassly-web, so all products share the same CSS phone frame.

## Deployment

Every push to `main` builds the site and deploys it to GitHub Pages (`.github/workflows/deploy.yml`).
The custom domain `wild-tec.ch` is set in the repository's Pages settings; `public/CNAME` documents it.

### DNS (Hostpoint)

| Name | Type | Value |
| --- | --- | --- |
| `wild-tec.ch` | A | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| `wild-tec.ch` | AAAA | `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153` (or no AAAA at all) |
| `www.wild-tec.ch` | CNAME | `andriwild.github.io` |
| `wild-tec.ch` | MX | `mx1.improvmx.com` (10), `mx2.improvmx.com` (20) |
| `wild-tec.ch` | TXT | `v=spf1 include:spf.improvmx.com ~all` |

Mail for `@wild-tec.ch` is forwarded by [ImprovMX](https://improvmx.com); there is no mailbox on the domain itself.
