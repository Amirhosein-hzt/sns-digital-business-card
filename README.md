# SNS Co. Digital Business Card

One-page, bilingual (Persian/English) digital business card for **Sayal Niroo Sanat Co. (SNS Co.)**, an automotive parts manufacturer established in 2000.

Built with **Vite + React + TypeScript and plain CSS**. No backend, no UI framework, no external fonts or scripts.

## Requirements

- Node.js 16+ and npm 8+ (developed against Node 16.14 — Vite is pinned to v4 for Node 16 compatibility; if you upgrade to Node 18+, you can also upgrade to Vite 5+).

## Commands

```bash
npm install      # install dependencies
npm run dev      # start the dev server (default http://localhost:5173)
npm run build    # type-check (tsc) and build the production output
npm run preview  # serve the production build locally (default http://localhost:4173)
```

The production build outputs static files to **`dist/`**. Deploy the contents of `dist/` to any static host — e.g. Netlify, Vercel, Cloudflare Pages, GitHub Pages, or a plain nginx/Apache static directory. No build-time or runtime environment variables are required.

Note: connecting a custom domain, DNS changes, and TLS certificates are owner-side tasks and are outside this repository.

### Temporary client preview via GitHub Pages

The repo ships with `.github/workflows/deploy.yml`. After pushing to a GitHub repo, set **Settings → Pages → Build and deployment → Source: "GitHub Actions"** once; every push to `main` then builds and publishes automatically at `https://<user>.github.io/<repo>/`. `vite.config.ts` uses `base: './'` so the build works under the project-site subpath. The relative `og:image` caveat above still applies on this URL.

## Project structure

- `index.html` — page shell with static metadata (Persian-first title/description, theme color, favicon, Open Graph)
- `src/data/company.ts` — **single source of truth**: company facts, contact data, links, and all Persian/English strings
- `src/App.tsx` — language state; keeps `<html lang/dir>`, `document.title`, and the meta description in sync when switching
- `src/components/` — `Header` (brand wordmark + language switch), `Identity` (logo, names, descriptor, year, description), `ContactActions` (call/email/website + Instagram/LinkedIn), `LocationSection` (address, Maps link, optional embed), `Footer`, and `icons` (inline SVGs, no icon package)
- `src/index.css` — approved palette from `DESIGN.md` and all styling (mobile-first, logical properties for RTL/LTR symmetry)
- `public/assets/snsco-logo.png` — the official supplied logo (used as-is, also the favicon)

## Language behavior

- Default language is **Persian (`fa`, RTL)**; the visitor's choice is remembered in `localStorage` (key `sns-language`).
- Switching language is client-side state — no page reload — and updates every string, `lang`/`dir` on `<html>`, the page title, and the meta description.
- Latin strings (phone number, email, domain, plus code) are LTR-isolated (`dir="ltr"` / `<bdi>`) so they stay readable and correctly ordered in RTL mode.
- The English description is a faithful translation of the supplied copy; nothing was added or embellished.

## Assumptions, limitations, and notes

- **Logo**: the supplied `public/assets/snsco-logo.png` (501×498) is used directly. To replace it, overwrite that file (same path) or update `logoSrc` in `src/data/company.ts`. The logo is never recolored or mirrored.
- **Phone display**: the digits are exactly the supplied `02645332259`, shown grouped as `026 4533 2259` for readability; the `tel:02645332259` target is unchanged.
- **No WhatsApp action**: the supplied number has not been confirmed as WhatsApp-enabled, so none is included (per `PROJECT.md`).
- **Map**: uses Google's key-free `output=embed` endpoint queried with the supplied plus code (`WHGQ+954, Nazarabad, Alborz Province, Iran`). If the embed is blocked or unavailable, the prominent "Open in Google Maps" action — the exact supplied share URL — still works, and the rest of the page is unaffected.
- **Open Graph image** uses a relative path (`/assets/snsco-logo.png`); some crawlers require an absolute URL. Update `og:image` (and `og:url`, if desired) with the final domain once hosting is chosen.
- All company content is limited to the facts in `PROJECT.md`. Nothing was invented.

## Design approval

The palette and design language in `DESIGN.md` were approved by the owner before implementation (approval recorded in `DESIGN.md` §0 and in the project conversation, 2026-11-10), satisfying the mandatory approval gate in `AGENTS.md` / `ROADMAP.md` Phase 0.

## What was verified (2026-11-10)

- `npm run build` succeeds (TypeScript strict type-check + Vite production build; output: `dist/index.html` 1.6 kB, CSS 6.6 kB, JS 154 kB / 50 kB gzip, logo copied to `dist/assets/`).
- `npm run dev` starts and serves with no server-side errors; `/`, `/src/main.tsx`, `/src/App.tsx`, `/src/index.css`, and `/assets/snsco-logo.png` all return HTTP 200 from the dev pipeline.
- `npm run preview` serves the production build: HTML 200, logo 200.
- The production bundle was inspected and contains all supplied targets: `tel:02645332259`, `mailto:` + `info@sns-co.ir`, `https://sns-co.ir`, `https://goo.gl/maps/KXoz4iYw1VH2`, the Instagram and LinkedIn URLs, and the key-free map embed URL.
- The built `dist/index.html` is Persian-first with `lang="fa" dir="rtl"`, localized title/description, theme color, favicon, and Open Graph metadata.
- **Not verified** (no browser automation available in this environment): visual rendering at specific viewport widths, in-browser click-through of `tel:`/`mailto:`/external links, the iframe-rendered map tiles, and `localStorage` persistence across reloads. The 320 px no-overflow requirement is handled in code (fluid `clamp()` type, `max-width: 100%` media, fluid containers, `overflow-wrap` on values) but should be confirmed visually before release.

