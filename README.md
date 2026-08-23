# Portfolio — Rafael Ventura

Single-page personal site: hero, about, experience, projects, contact. Rewritten from Vue 3 to
**React 19 + TypeScript + Vite + Tailwind CSS v4**, keeping the same content and visual identity
(dark navy/indigo/pink theme, Raleway + Lato typography).

## Structure

```
src/
  components/    # Navbar, Footer, SectionHeader, ProjectCard, TypingText, BackgroundParticles
  sections/      # Hero, About, Experience, Projects, Contact — one per page section
  data.ts        # skills, projects, jobs — content in one place
  App.tsx        # composes the sections
  main.tsx
public/
  profile.jpeg, livros.png (favicon), resume.pdf
server/          # separate Node/Express API (contact form + Spotify widget) — not touched in this rewrite
```

## How to run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Notes

- No client-side routing: it's a single page with anchor navigation (`#about`, `#projects`, …),
  matching how the previous `vue-router` setup already behaved in practice (every route
  redirected to `/`).
- `server/` (Node/Express, `/send-email` and `/generate-token` endpoints) wasn't touched in this
  rewrite — it isn't called from the frontend today (its CORS config points at a different
  domain, leftover from a template). Worth reviewing before reactivating the contact form or the
  Spotify "now playing" widget.
