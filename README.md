# Tokgency marketing site

The public site for Tokgency (tokgency.com), built with TanStack Start,
React 19, Tailwind CSS v4 and shadcn/ui. Every page is rendered to static HTML
at build time. The product app (login, portal, campaign builder) lives
elsewhere; links into it go through `appUrl()`.

## Commands

```bash
pnpm install
pnpm dev          # dev server on http://localhost:3000
pnpm build        # prerenders every page into dist/client and writes sitemap.xml
pnpm preview      # serves the production build
pnpm typecheck    # tsc --noEmit
pnpm check        # Biome lint + format check (add --write to fix)
```

## Layout

```
src/
  routes/            one file per URL; each sets its own <head> via seo()
  components/
    ui/              shadcn primitives (button, accordion, table, ...)
    shared/          building blocks used by several pages
    sections/<page>/ the sections of one page
    layout/          header, footer, page shell, 404
    motion/          scroll-reveal wrappers
    brand/           logo and social icons
  content/           copy and data, kept out of the components
    articles/        blog: index.json (metadata) + bodies/<slug>.json
    legal/           policies: index.json + bodies/<slug>.json
    landing/         one content object per SEO landing page
  config/site.ts     site name, URLs, navigation, footer
  lib/               seo helpers, article/legal loaders, creator-reel helpers
  styles/
    tokens.css       design tokens: the single source of colour, type, elevation
    globals.css      Tailwind theme mapped onto the tokens, base styles
    utilities.css    brand utilities (marker highlight, mono label, marquees)
    prose.css        long-form typography for articles and policies
```

## Design tokens

Colours, fonts and shadows are declared once in `src/styles/tokens.css` and
exposed to Tailwind in `globals.css`, so components use `bg-surface`,
`text-muted`, `shadow-lift` and so on rather than raw values. Changing the
palette is an edit to `tokens.css` only.

## Adding content

- **Blog article:** add an entry to `src/content/articles/index.json` and a
  body file at `src/content/articles/bodies/<slug>.json` (`html`, `toc`,
  `related`). Put the cover at `public/blog-images/<slug>.webp` and a JPEG copy
  for social cards at `public/blog-images/og/<slug>.jpg`. The route, sitemap
  entry and structured data are generated from the index.
- **Landing page:** add a content object under `src/content/landing/`, add a
  thin route file, and list the path in
  `LANDING_PAGES` in `vite.config.ts`.
- **Policy:** add to `src/content/legal/index.json` and `bodies/<slug>.json`.

## SEO

- `seo()` in `src/lib/seo.ts` builds the title, description, canonical, Open
  Graph and Twitter tags for a route.
- Structured data: Organization and WebSite site-wide; FAQPage on pages with
  an FAQ; Article and BreadcrumbList on articles; Blog on the index.
- `vite.config.ts` lists every public URL with its sitemap priority; the build
  prerenders them and writes `sitemap.xml`. `public/robots.txt` points at it.

## Deploying

The site is hosted on Cloudflare as static assets (`wrangler.jsonc`):

```bash
pnpm build
pnpm dlx wrangler deploy
```

`public/_redirects` sends the old `/blog` URLs to `/resources`, and the `/404`
route is prerendered to `404.html` for unknown URLs.
