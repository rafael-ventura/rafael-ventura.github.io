# Portfolio

Single-page React 19 + TypeScript + Vite + Tailwind v4 site, deployed to GitHub Pages
(https://rafael-ventura.github.io) and mirrored on Vercel (https://rafael-siqueira.vercel.app) on every push to `main`.

## Commands
- `npm run dev` · `npm run build` (type-checks, then builds)

## Where things are
- All copy lives in `src/data.ts`. Sections in `src/sections/`, shared pieces in `src/components/`.
- `src/components/ui/` holds Magic UI / React Bits components added with the shadcn CLI. They are ours to edit.
- Asset URLs go through `import.meta.env.BASE_URL` so the site works at the root and in a subfolder.

## Copy rules
- English only, international recruiters are the audience.
- No em dashes, no self-promotional words ("passionate", "visionary"), no explanatory parentheses.
- Every claim must be defensible in a technical interview. Keep each metric attached to its company.
- Job titles and dates follow `public/resume.pdf`. Ask Rafael before adding a new claim or metric.
- Lead with backend .NET and messaging; frontend is supporting. Professional experience comes before personal projects.

## Guardians
`.claude/guardians.json` blocks em dashes in `src/` and runs the build before any push.
