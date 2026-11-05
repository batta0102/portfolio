# Portfolio — Baya Khouini

Personal portfolio: **https://batta0102.github.io/portfolio/**

Static, bilingual (FR default, EN at `/en/`) site built with Astro, Tailwind CSS and strict TypeScript. Deployed to GitHub Pages by GitHub Actions on every push to `main`.

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
