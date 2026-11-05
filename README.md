# Portfolio — Baya Khouini

Personal portfolio: **https://batta0102.github.io/portfolio/**

Static, bilingual (FR default, EN at `/en/`) site built with Astro, Tailwind CSS and strict TypeScript. Hosted on GitHub Pages.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321/portfolio/
npm run build    # type-check + build to dist/
npm run preview  # serve dist/
```

## Edit content

All text lives in [`src/data/content.ts`](src/data/content.ts), with French and English side by side.

- **Project links:** set `link` on a project; the "View project" button appears automatically.
- **"What I learned":** set `learned` on a project (`{ fr: [...], en: [...] }`); the block is hidden while it is `null`.
- **CVs:** add `public/cv-fr.pdf` and `public/cv-en.pdf`. The download buttons appear in the hero as soon as the files exist.
- **Open Graph image:** `npm run og` regenerates `public/og-image.png` (1200 × 627).

## Deploy

The workflow in `.github/workflows/deploy.yml` (branch `ci/actions-deploy` until merged) builds and deploys on every push to `main`. Until it is active, Pages serves the `gh-pages` branch, published by hand:

```sh
npm run build && touch dist/.nojekyll
cd dist && git init -b gh-pages && git add -A && git commit -m "Deploy" \n  && git push -f https://github.com/batta0102/portfolio.git gh-pages && rm -rf .git
```
