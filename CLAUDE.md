# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

UI Lab is an internal component library, docs site, and shadcn registry for company projects (docs: https://ui.ailab.mn). It is a pnpm + Turborepo monorepo (Node >= 22, pnpm only; `preinstall` enforces pnpm).

- `packages/uilab-core` — the published npm package `uilab-core`: shadcn-style components built on **Base UI** (`@base-ui/react`, not Radix), Tailwind v4, bundled with Rolldown.
- `apps/www` — Next.js 16 + Fumadocs documentation site. It also hosts the shadcn registry of higher-level "blocks".
- `examples/` — standalone Vite + TanStack Router/Start starter templates. They are **not** in the pnpm workspace (`pnpm-workspace.yaml` only includes `apps/*` and `packages/*`) and pull `uilab-core` from npm.

## Commands

Run from the repo root:

```bash
pnpm dev                    # all dev servers (turbo, parallel)
pnpm dev:www                # docs site only (http://localhost:3000)
pnpm build                  # turbo build (uilab-core builds before www via ^build)
pnpm build:uilab-core
pnpm lint                   # turbo lint (eslint in core, biome in www)
pnpm format / pnpm test:prettier   # prettier write / check over apps + packages
pnpm test:uilab-core        # vitest (watch mode)
pnpm registry:build         # shadcn build in apps/www -> public/r/*.json
```

In `packages/uilab-core`:

```bash
pnpm test:run                          # vitest once
pnpm vitest run path/to/file.test.ts   # single test file
pnpm vitest run -t "name pattern"      # single test by name
pnpm lint                              # eslint --max-warnings 0
```

In `apps/www`: `pnpm types:check` runs `fumadocs-mdx && next typegen && tsc --noEmit`. `postinstall` runs `fumadocs-mdx`, which generates `.source/`.

## Architecture

### uilab-core build and consumption
- `src/index.ts` re-exports `components` and `hooks`. Every new component must be added to `src/components/index.tsx`.
- Inside the package, imports use the `@/` alias (`@/components/button`), which resolves to `src/`. `cn` is not part of the package: it is a peer dependency imported directly (`import { cn } from "cn"`) by components and by registry blocks.
- Rolldown (`rolldown.config.js`) emits `dist/index.{js,cjs,d.ts}` (types via `rolldown-plugin-dts`) and copies the CSS entry points as-is: `styles.css` (Tailwind `@source` + theme vars), plus the theme-only files `legacy.css`, `neutral.css`, and `caffeine.css`. Each one is exported in `package.json` `exports`, so adding a new theme CSS file means adding it to both `cssFiles` in `rolldown.config.js` and `exports`.
- `apps/www` depends on `uilab-core` via `workspace:*` and resolves it through `dist/`. Rebuild core (or run its dev task) before www will see component changes.
- `components.json` is the shadcn config (style `base-mira`, lucide icons). It is used when pulling or updating components from upstream shadcn.
- `TEST_SUMMARY.md` describes a component test suite that is not currently in the repo. There are currently no test files (`passWithNoTests` is on).

### Docs site (apps/www)
- MDX pages live in `content/docs/{components,blocks}/*.mdx`. Sidebar order is set by `meta.json`, and the frontmatter schema (it adds `isNew`) is in `source.config.ts`.
- Live examples use `<ComponentPreview name="..." />`. The name is looked up through `demos/index.tsx` → `getDemo()`, which merges `demos/components/index.ts` and `demos/blocks/index.tsx`.
- To add a demo:
  1. Create the file at `demos/components/<comp>/<variant>.tsx`. It imports from `"uilab-core"`.
  2. Register it in that folder's `index.tsx` as a `DemoItem { component, file }`.
  3. Add the folder's map to the aggregator index. The `file` path is relative to `demos/`, and `ComponentSource` reads that file from disk at render time to show the code.
- The `llms.txt`, `llms-full.txt`, `llms.mdx` routes and the `/docs/*.mdx` rewrite in `next.config.mjs` serve the docs as plain markdown for LLMs.
- Linting and formatting in www use **Biome** (`biome.json`), not ESLint or Prettier.

### shadcn registry (blocks)
- `apps/www/registry.json` defines the registry items. Their source lives in `apps/www/registry/ionia/{components,ui,hooks}`. Registry blocks compose primitives imported from `uilab-core` instead of copying them.
- `pnpm registry:build` writes the generated JSON to `apps/www/public/r/`. That output is committed, so rebuild it after editing a registry item or `registry.json`.
