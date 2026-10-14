# Portfolio · Rafael Siqueira

Single-page personal site built with **React 19, TypeScript, Vite and Tailwind CSS v4**, animated
with **motion** (formerly Framer Motion) and a few copy-paste components from
[Magic UI](https://magicui.design) and [React Bits](https://reactbits.dev).

## Structure

```
src/
  components/
    ui/          # third-party components installed with the shadcn CLI (you own this code)
    Navbar, Footer, SectionHeader, ProjectCard
  sections/      # Hero, Experience, Projects, Skills, About, Contact, one per page section
  lib/utils.ts   # cn() helper for merging Tailwind classes
  data.ts        # all site copy in one place
  App.tsx        # composes the sections
public/
  profile.jpeg, livros.png (favicon), resume.pdf
server/          # separate Node/Express API, not used by the frontend
```

## How to run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Deploy

Every push to `main` publishes the site to two independent hosts, so one can serve as a fallback
if the other is down:

- **GitHub Pages**: https://rafael-ventura.github.io, built by `.github/workflows/deploy-pages.yml`
- **Vercel**: mirror, deployed by the Vercel GitHub integration

The build reads `BASE_PATH` so the same code works at the root or in a subfolder.

## Adding more components

Magic UI, React Bits, Aceternity UI and shadcn/ui all distribute components through the shadcn
CLI. The CLI copies the source into `src/components/ui/` instead of installing a package, so you
can read and edit it like your own code. `components.json` tells the CLI where things go.

```bash
npx shadcn@latest add "https://magicui.design/r/number-ticker.json"
npx shadcn@latest add "https://reactbits.dev/r/ShinyText-TS-TW"
```

Copied components sometimes assume Next.js. `magic-card.tsx` was adapted to drop `next-themes`,
since this site is dark-only.

## Notes

- All animations respect the visitor's reduced-motion setting through `<MotionConfig reducedMotion="user">`.
- `server/` has CORS origins pointing at a different person's domain, leftover from a template.
  Review it before reactivating the contact form or the Spotify widget.
