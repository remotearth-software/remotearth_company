# Remotearth Software — company website

The official site for Remotearth Software: a company-level site (not tied to a
single app) with a showcase for the apps we publish.

Built with **React 19 + Vite + TypeScript + Tailwind CSS v4**, React Router for
the legal pages, and `lucide-react` for icons.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build locally
npm run lint     # oxlint
```

## Project structure

```
src/
├── assets/apps/          Placeholder app artwork (SVG) — swap for real screenshots
├── assets/brand/         Logo assets generated from the master logo file
├── components/
│   ├── layout/           Header, Footer, Layout, ScrollManager, LegalPage shell
│   ├── sections/         Home page sections (Hero, Apps, Approach, About, Contact)
│   └── ui/               Container, Reveal, SectionHeading, Logo, button styles
├── data/
│   ├── apps.ts           👈 the app catalogue (add/edit apps here)
│   └── site.ts           👈 company name, email, nav links, legal settings
├── hooks/                useInView (scroll reveal), useActiveSection, useSeo
├── pages/                HomePage, PrivacyPage, TermsPage, NotFoundPage
└── index.css             Tailwind theme tokens, base styles, reveal animation
```

## Day-to-day edits

**Add or update an app** — edit `src/data/apps.ts`. Each entry drives a card in
the "Apps we've published" section:

- `links`: add `playStore` / `appStore` / `website` URLs and the store buttons
  appear automatically. While `links` is empty, the card shows an
  "Ask us about <app>" mailto button instead.
- `cover` / `icon`: point at images in `src/assets/apps/`.
- `highlights`: the four checkmarked bullets.
- `accent`: the Tailwind classes tinting that card's glow and highlights.

**Replace the placeholder artwork** — the current SVGs in `src/assets/apps/` are
labelled "PLACEHOLDER ARTWORK". Drop in real screenshots (PNG/JPG/WebP is fine,
roughly 4:3) and update the imports at the top of `src/data/apps.ts`.

**Company details** — `src/data/site.ts` holds the name, `info@remotearth.ca`,
nav links and the legal settings. The header, footer, contact section, legal
pages and structured data all read from it.

**Colours and fonts** — `@theme` at the top of `src/index.css`. The palette is
sampled from the company logo: `brand` is the azure blue (`#0065fc`), `accent`
the bright cyan-blue of the orbit swoosh (`#00c3fd`), and `ink` the near-black
navy surfaces (`#00040e`). Fonts (Inter + Sora) are loaded in `index.html`.

## Before going live

- [ ] Replace the placeholder app screenshots and icons.
- [ ] Add real store URLs in `src/data/apps.ts`.
- [ ] **Have `/privacy` and `/terms` reviewed by a lawyer.** They are a solid
      starting draft, not legal advice. Check `site.legal.governingLaw` in
      `src/data/site.ts` — it currently reads "Ontario, Canada" as a placeholder.
- [ ] Update `public/sitemap.xml` and `public/robots.txt` if the domain changes.

### Logo assets

All logo files come from the master artwork (`remotearth_logo_small.png`), with
the near-black backdrop keyed out so they sit on any surface:

| File | Used for |
| --- | --- |
| `src/assets/brand/remotearth-mark.webp` | R + globe mark — header, tight spaces |
| `src/assets/brand/remotearth-logo.webp` | Full stacked lockup — footer |
| `public/favicon.png`, `public/apple-touch-icon.png` | Browser tab and iOS home screen |
| `public/logo.png` | The lockup, referenced by the JSON-LD `logo` field |
| `public/og-image.png` | 1200×630 social preview card |

The header pairs the mark image with an HTML wordmark (`src/components/ui/Logo.tsx`)
so the type stays crisp at small sizes. If the master logo changes, regenerate
these files from it and everything else follows.

## Deploying

The build output in `dist/` is a static SPA, so any static host works. Build
command `npm run build`, output directory `dist`. Client-side routes
(`/privacy`, `/terms`) need unknown paths served `index.html`, and each host
spells that differently:

- **Cloudflare (current host)** — `wrangler.jsonc` (included) does it with
  `assets.not_found_handling: "single-page-application"`. Deploy command is
  `npx wrangler deploy`.
- **Vercel** — `vercel.json` (included) handles it.
- **Netlify** — add a `public/_redirects` file containing `/*  /index.html  200`.
- **Nginx** — `try_files $uri $uri/ /index.html;`

> **Do not add `_redirects` back while deploying to Cloudflare.** Its Workers
> Assets deploy rejects the `/*  /index.html  200` catch-all with
> "Infinite loop detected in this rule" and fails the build. SPA routing there
> comes from `wrangler.jsonc` instead.

Because `wrangler.jsonc` is committed, Wrangler skips its interactive project
setup during the Cloudflare build — otherwise it generates its own config on
every deploy. Verify config changes locally with `npx wrangler deploy --dry-run`
(no account credentials required).

## Notes

- `npm audit` reports a react-router advisory that only affects its RSC server
  mode. This site is a static client-side SPA with no server actions, so it is
  not exposed; older router versions carry considerably more advisories.
- Scroll animations respect `prefers-reduced-motion`.
- The contact form has no backend: it composes a message in the visitor's own
  mail client via `mailto:`. To collect submissions server-side instead, point
  the form at a service like Formspree or a serverless function in
  `src/components/sections/Contact.tsx`.
