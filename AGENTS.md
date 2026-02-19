# Repository Guidelines

## Project Structure & Module Organization
This repo is a Next.js App Router project.

- `app/`: routes, layouts, metadata, and route-level loading/error files.
- `components/`: reusable UI and page-specific components (`components/public/*`).
- `lib/`: shared utilities and data sources (for example `lib/utils.ts`, `lib/blog-data.tsx`).
- `public/`: static assets and icons.
- `docs/`: architecture, development, deployment, accessibility, and performance notes.
- `types/`: shared type declarations.

Prefer route code in `app/`, reusable UI in `components/`, and pure helpers in `lib/`.

## Build, Test, and Development Commands
Use `pnpm` (lockfile is `pnpm-lock.yaml`).

- `pnpm install`: install dependencies.
- `pnpm dev`: start local dev server (`http://localhost:3000`).
- `pnpm build`: create production build.
- `pnpm start`: run the production build locally.
- `pnpm lint`: run ESLint checks.
- `pnpm analyze`: run Next.js bundle analysis.

Before opening a PR, run: `pnpm lint && pnpm build`.

## Coding Style & Naming Conventions
- Language: TypeScript + React function components.
- Indentation: 2 spaces; keep imports grouped and use the `@/` alias.
- Filenames: kebab-case for components/files (`theme-toggle.tsx`), route folders by URL segment (`[postSlug]` for dynamic routes).
- Keep Server Components as default; add `"use client"` only when interactivity/hooks are required.
- Styling: Tailwind CSS utilities; compose classes with `cn()` from `lib/utils.ts`.

## Testing Guidelines
There is currently no committed test suite (`*.test.*` / `*.spec.*` not present).  
Minimum quality gate is lint + production build:

`pnpm lint && pnpm build`

When adding tests, colocate them by feature (for example `components/foo.test.tsx`) and prefer clear behavior-focused names.

## Commit & Pull Request Guidelines
Git history is currently minimal (initial import commit), so follow the documented convention used in `docs/development.md`:

- `feat: ...`, `fix: ...`, `docs: ...`, `refactor: ...`, `test: ...`, `chore: ...`

PRs should include:
- concise summary of user-visible and technical changes,
- linked issue (if available),
- screenshots/GIFs for UI changes,
- notes on verification steps run locally.
