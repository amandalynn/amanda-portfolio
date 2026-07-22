# Amanda Myers — portfolio site

Angular 22, prerendered to static HTML. Two routes: `/` (portfolio) and
`/resume` (print-ready Letter résumé).

```sh
npm install
npm start          # dev server at localhost:4200
npm run build      # prerenders both routes into dist/portfolio/browser
```

## Structure

```
src/app/
  app.ts, app.routes.ts        shell + lazy routes
  data/content.ts              all copy: work cards, toolbox, roles, hobbies
  shared/
    reveal.ts                  [amReveal] scroll-in directive
    photo-slot.ts              <am-photo-slot> with placeholder fallback
    section-head.ts            title + handwritten aside + watercolor wash
  sections/                    site-nav, hero, selected-work, toolbox,
                               road-so-far, after-hours, contact
  pages/portfolio, pages/resume
src/styles.scss                design tokens (custom properties) + keyframes
public/                        images/, resume.md, favicon
```

Copy lives in `src/app/data/content.ts`, not in templates — edit it there.

## Notes

- **Photos**: drop the five files into `public/images/` (see the README there).
  Until then each slot renders its dashed placeholder rather than a broken image.
- **`resume.md`** is the canonical plain-text résumé for ATS/AI parsers, served
  at `/resume.md`. Mirror any edit into `src/app/pages/resume/resume.html`.
- **Accent**: `--accent` in `styles.scss` recolors the nav star, hero note,
  Kapoq kicker, and first toolbox column. Curated options: `#a9603f` (default),
  `#6e7d5c`, `#5b7fa6`, `#8a7a5c`.
- **Motion**: twinkling stars, the shooting star, and scroll reveals all stop
  under `prefers-reduced-motion: reduce`.
- **Prerendering**: `outputMode: "static"` in `angular.json` — the build emits
  plain HTML, no server function. Drop that key to fall back to a client-only SPA.
- **Responsive** at two breakpoints, 900px and 560px. Verified free of horizontal
  overflow at 375 / 414 / 768 / 1024 / 1440.
- **Contrast**: six ink/accent tokens sit one step darker than the design handoff
  so every text pairing clears WCAG AA (4.5:1) — the original value and its ratio
  are noted inline in `styles.scss`. The worst offender was the timeline year
  column at 2.58:1; the primary button was 3.92:1.
- `design_handoff_portfolio_site/` holds the original design references and
  `static-site/` the earlier vanilla-HTML build. Neither ships; delete when done.

## Deploying to Vercel

Output is fully static, so no adapter or serverless function is involved.
`vercel.json` already sets the build command, output directory, clean URLs, and
asset caching.

```sh
npx vercel        # first run links the project and deploys a preview
npx vercel --prod
```

Or connect the repo at vercel.com — it will pick up `vercel.json` as-is.

Note: `git` on this machine is the Xcode stub, so a git-based deploy needs
`xcode-select --install` first. The `npx vercel` path above works without it.
