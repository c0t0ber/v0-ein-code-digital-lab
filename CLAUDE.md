# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm install          # Install dependencies
pnpm dev              # Dev server at http://localhost:3000
pnpm build            # Production build (static export)
pnpm start            # Serve production build
pnpm lint             # ESLint checks
pnpm lint && pnpm build  # Quality gate before PRs
```

No test suite exists. Quality gate is `pnpm lint && pnpm build`.

## Architecture

Next.js 16 App Router + React 19 + TypeScript. Static site (`output: "export"` in `next.config.mjs`). No server-side features, no database, no API routes.

### Routing

- `app/` — App Router pages/layouts. Server Components by default.
- `app/(public)/` — Route group for public pages (blog, projects, workbench) sharing a common layout with Header/Footer.
- `app/how-we-work/` — Standalone page outside the `(public)` group.
- Dynamic routes use folder convention: `[postSlug]` for blog posts.

### Components

- `components/ui/` — Base primitives (shadcn/ui style, Radix UI underneath).
- `components/public/[route]/` — Page-specific components scoped to a route.
- `components/*.tsx` — Shared components (header, footer, hero, theme toggle, etc.).

### Data & Content

- `lib/blog-data.tsx` — All blog posts as TypeScript objects. No CMS. Edit this file to add/modify posts.
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge) for composing class names.
- `lib/themes.ts` — Color theme definitions (golden, cyan, purple, emerald, rose).

### Styling

- **Tailwind CSS v4** with CSS-first configuration — all tokens/config live in `app/globals.css` using `@theme inline`. No `tailwind.config.js`.
- Design tokens are CSS custom properties in `:root` / `.dark` selectors (OKLCH color space).
- Theme mode: `next-themes` with `dark` default, persisted via localStorage key `theme-mode`.
- Always compose classes with `cn()` from `lib/utils.ts`.

## Key Conventions

- **Server Components by default.** Only add `"use client"` when hooks, browser APIs, or interactivity are needed.
- **pnpm only** — lockfile is `pnpm-lock.yaml`.
- **Filenames**: kebab-case (`theme-toggle.tsx`). Dynamic route folders by URL segment (`[postSlug]`).
- **Imports**: Use the `@/` path alias. Keep imports grouped.
- **Indentation**: 2 spaces.
- **Commits**: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:` prefixes.

## Build Caveats

- `typescript.ignoreBuildErrors: true` is set in `next.config.mjs` — type errors are suppressed during build. Do not remove this flag without a migration plan.
- `images.unoptimized: true` — Next.js image optimization is disabled (static export).
- `basePath` is dynamically set for GitHub Pages deploys via `GITHUB_ACTIONS` env var.
- Styling token changes go in `app/globals.css`, not inline or in JS config files.
