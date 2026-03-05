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

## Копирайтинг: как писать тексты для сайта

Сайт на русском языке. Тексты должны звучать как написанные живым человеком, а не сгенерированные. Вот конкретные правила:

### Что НЕ делать (AI-маркеры)
- **Em dash (—)**: не больше 1-2 на весь блок текста. AI ставит тире в каждом предложении — это палево.
- **Параллельные конструкции**: не писать все заголовки/описания по одной схеме. Если первый goal «X, а не Y», второй не должен быть таким же.
- **Одинаковая длина**: абзацы и предложения должны быть разной длины. Где-то два слова, где-то длинное предложение с парой запятых.
- **Buzz-слова**: «dedicated-команда», «рабочий инкремент», «метрики на виду», «ноль X, ноль Y» — это всё ChatGPT-лексикон.
- **Идеальная грамматика**: настоящий текст на сайте студии разработки может позволить себе разговорные обороты. «Потыкать», «раскидали», «так и скажем» — нормально.
- **Лозунги через «Без X, без Y, без Z»**: один раз можно, пять раз подряд — нельзя.
- **Слова-маркеры**: «crucial», «unlock», «unleash», «showcase», «dive into», «tapestry», «game-changing», «it's not just about». На русском: «раскрываем потенциал», «выводим на новый уровень», «комплексный подход».

### Что делать
- Писать как будто объясняешь коллеге в чате. Не как копирайтер, а как разработчик.
- Менять ритм: короткое предложение. Потом подлиннее, с деталями и конкретикой которую человек может проверить.
- Вместо абстрактных заявлений — конкретные примеры: «бриф на 40 страниц», «через месяц выяснится что все имели в виду разное».
- Допускать лёгкую небрежность: пропущенная запятая перед «что», разговорное «ок» — это маркер живого текста.
- Каждый блок текста должен отличаться от соседнего по длине, структуре и тону.
- **Паттерн важнее концепта**: вместо «пиши дерзко и уверенно» — дай 2-3 примера конкретных фраз в нужном тоне. AI копирует ритм и лексику образца лучше, чем следует абстрактным описаниям стиля.
- Перед написанием нового блока текстов — перечитай существующие на сайте и попади в тот же голос, а не пиши с нуля в своём дефолтном стиле.
