# Kamil Pigulak · Portfolio

[![CI](https://github.com/Kamil678/kamil-pigulak-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Kamil678/kamil-pigulak-portfolio/actions/workflows/ci.yml)

My personal website: **[kamilpigulak.com](https://kamilpigulak.com)**. Frontend Developer specialising in Vue 3, Nuxt and TypeScript.

A bilingual (EN/PL) single-page app with project case studies, work history, tech stack and a contact form. It is small, but built the way I build production apps: content separated from components, automated tests, CI and attention to performance, accessibility and security.

## Tech stack

- **Vue 3** (Composition API, `<script setup>`), **Vue Router**, **vue-i18n**
- **Vite 7**, **Tailwind CSS** with design tokens (CSS variables) and a dark mode
- **Vitest** + Vue Test Utils for unit tests, **Cypress** for E2E tests
- **ESLint** + **Prettier**, **GitHub Actions**, hosted on **Netlify**
- **EmailJS** for the contact form (no backend)

## Highlights

- **Content as data.** Projects, experience and skills live in `src/data/` as `{ en, pl }` objects; components only render them. Years of experience are calculated from the career start date, never hardcoded.
- **i18n done properly.** Language detection (saved choice → browser), `<html lang>` kept in sync, a custom Polish plural rule (_rok / lata / lat_), and messages precompiled at build time, so the runtime ships without the message compiler.
- **Performance.** Route-level code splitting, lazy-loaded EmailJS, responsive WebP images with `srcset`, a preloaded hero image, self-hosted variable fonts with a metric-matched fallback (less layout shift) and only the SVG icons that are actually used.
- **Accessibility.** Semantic landmarks, skip link, visible focus styles, ARIA on interactive elements, accessible form validation (`aria-invalid`, `aria-describedby`, focus on the first error) and full support for `prefers-reduced-motion`.
- **SEO.** Per-route title, description, canonical and Open Graph tags, JSON-LD (`Person`) and a sitemap generated from the project list on every build.
- **Security.** Strict Content Security Policy (inline script allowed by hash, verified by a unit test), security headers, long-term caching of fingerprinted assets, and a honeypot against contact form spam.

## Getting started

Requires Node.js 20.19+.

```bash
npm install
cp .env.dist .env   # EmailJS credentials for the contact form
npm run dev
```

| Script                            | What it does                                             |
| --------------------------------- | -------------------------------------------------------- |
| `npm run dev`                     | Vite dev server                                          |
| `npm run build`                   | Production build to `dist/`                              |
| `npm run preview`                 | Serves the build with the production headers (incl. CSP) |
| `npm run lint` / `lint:fix`       | ESLint                                                   |
| `npm run format` / `format:check` | Prettier                                                 |
| `npm test`                        | Unit tests (Vitest)                                      |
| `npm run test:e2e`                | E2E tests (Cypress) against `vite preview`; build first  |

## Project structure

```
src/
├── components/   layout/ (header, footer), home/ (page sections), ui/ (shared primitives)
├── composables/  page meta, section navigation, theme, contact form
├── data/         content: profile, projects, experience, education, skills
├── i18n/         vue-i18n setup and EN/PL messages
├── router/       routes and scroll behaviour
└── views/        home, case study, 404
cypress/e2e/      end-to-end tests
public/_headers   security and caching headers for Netlify
```

## Contact

[kamilpigulak@gmail.com](mailto:kamilpigulak@gmail.com) · [LinkedIn](https://www.linkedin.com/in/kamil-pigulak/)
