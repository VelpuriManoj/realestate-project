# TEST — Real Estate Website

A fully static real-estate marketing site built with React, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons. No backend, database, API, or authentication — everything runs from static frontend files, with `tel:` and `mailto:` links for contact actions.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

## Building for production

```bash
npm run build
npm run preview
```

`npm run build` outputs a fully static `dist/` folder you can host anywhere (Netlify, Vercel, S3, GitHub Pages, or any web server) — no server-side runtime required.

## Editing content

Everything a client is likely to change lives in a few files:

| What to change | File |
| --- | --- |
| Phone number & email | `src/config/contact.ts` |
| Brand name, nav links | `src/config/site.ts` |
| Project cards | `src/data/projects.ts` |
| Gallery images | `src/data/gallery.ts` |
| FAQ questions & answers | `src/data/faq.ts` |

## Images

The project ships with placeholder photography loaded from Unsplash so the site looks complete out of the box. Replace these with real project photography by:

1. Adding image files to `public/images/`.
2. Updating the `image` / `src` fields in `src/data/projects.ts` and `src/data/gallery.ts` to point at `/images/your-file.jpg`.

If any image fails to load (missing file, broken link, offline), the site shows a quiet placeholder instead of a broken-image icon — see `src/components/FallbackImage.tsx`.

## Notes

- This project was scaffolded by hand (Vite + React + TS template) rather than via `npm create vite`, since the build environment that generated it has no network access. Run `npm install` once to fetch dependencies before starting the dev server.
- Animations respect `prefers-reduced-motion`.
- A top-level `ErrorBoundary` catches unexpected rendering errors and shows a friendly fallback instead of a blank page.
