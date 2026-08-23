# Portfolio — Rafael Ventura

Site pessoal de uma página só: hero, sobre, experiência, projetos e contato. Reescrito de Vue 3
para **React 19 + TypeScript + Vite + Tailwind CSS v4**, mantendo o mesmo conteúdo e identidade
visual (tema escuro navy/indigo/rosa, tipografia Raleway + Lato).

## Estrutura

```
src/
  components/    # Navbar, Footer, SectionHeader, ProjectCard, TypingText, BackgroundParticles
  sections/       # Hero, About, Experience, Projects, Contact — uma por seção da página
  data.ts         # skills, projects, jobs — conteúdo em um só lugar
  App.tsx         # compõe as seções
  main.tsx
public/
  profile.jpeg, livros.png (favicon), resume.pdf
server/           # API Node/Express separada (contato + widget Spotify) — não tocada nesta reescrita
```

## Como rodar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de produção em dist/
```

## Notas

- Sem rota client-side: é uma página única com navegação por âncora (`#about`, `#projects`, …),
  mesmo comportamento que o `vue-router` anterior já tinha na prática (todas as rotas redirecionavam
  pra `/`).
- `server/` (Node/Express, endpoints `/send-email` e `/generate-token`) não foi alterado nesta
  reescrita — hoje não é chamado pelo frontend (o CORS nele está configurado para outro domínio,
  restos de um template). Se for reativar contato por formulário ou o widget "tocando agora" do
  Spotify, vale revisar esse serviço antes.
