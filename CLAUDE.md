# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a monorepo for UI components and documentation built with pnpm workspaces. It consists of:
- **apps/ui-library**: A shadcn/ui-based component registry that can be published and consumed by other projects
- **apps/docs**: A Docusaurus documentation site showcasing the UI components

## Package Manager & Node Version

- **Package Manager**: pnpm 10.18.2 (required)
- **Node Version**: >=22 (check .nvmrc for exact version: 22)
- The project uses pnpm workspace catalog feature for dependency management (see `pnpm-workspace.yaml`)

## Common Commands

### Development
```bash
# Start the docs site locally
pnpm start:docs

# Install dependencies (from root)
pnpm install
```

### Building
```bash
# Build documentation site
pnpm build:docs

# Build UI library registry
pnpm build:ui-library
```

### Formatting
```bash
# Format all code files
pnpm format
```

## Architecture

### Workspace Structure
The monorepo uses pnpm workspaces with packages defined in `apps/*`. Dependencies are managed via a catalog in `pnpm-workspace.yaml` - when you see `"package": "catalog:"` in package.json files, the version is defined centrally in the workspace catalog.

### UI Library (apps/ui-library)
- **Framework**: shadcn/ui component system with Radix UI primitives
- **Styling**: Tailwind CSS v4 with CSS variables for theming
- **Component Types**:
  - `src/components/ui/`: Base shadcn/ui components (~54 components including button, table, dialog, etc.)
  - `src/components/blocks/`: Composite components built from base UI components (e.g., data-table with advanced features)
- **Registry System**: Components are defined in `registry.json` following shadcn registry schema. The `shadcn build` command generates a publishable registry in `public/`
- **Path Aliases**: Uses `@/` prefix for imports (defined in `components.json`)
  - `@/components` → components directory
  - `@/lib` → utility functions
  - `@/hooks` → React hooks
  - `@/components/ui` → base UI components

### Documentation Site (apps/docs)
- **Framework**: Docusaurus 3.9.1
- **Deployment**: GitLab Pages at `https://ailabmn.gitlab.io/frontend/uilab/`
- **Configuration**: See `docusaurus.config.ts` for site config, sidebars, and theme settings
- **Scripts**:
  - `pnpm --prefix apps/docs start` - Start dev server
  - `pnpm --prefix apps/docs build` - Build static site
  - `pnpm --prefix apps/docs typecheck` - Run TypeScript checks

### Code Style
- **Formatter**: Prettier with custom configuration (`.prettierrc`)
- **Import Order**: Enforced via `@ianvs/prettier-plugin-sort-imports` with specific ordering:
  1. React imports
  2. Next.js imports
  3. Third-party modules
  4. Type imports
  5. Internal imports by category (@/assets, @/components, @/data, @/hooks, @/lib, etc.)
  6. Relative imports
- **Tailwind Plugin**: `prettier-plugin-tailwindcss` for class sorting
- Run `pnpm format` before committing changes

### CI/CD Pipeline
The GitLab CI pipeline (`.gitlab-ci.yml`) builds both the docs site and UI library registry, then publishes them to GitLab Pages:
1. Installs pnpm via corepack
2. Runs `pnpm build:docs` and `pnpm build:ui-library`
3. Moves built artifacts to `pages/` directory structure
4. Publishes to GitLab Pages

### Key Component: Data Table
The data-table block is a complex, reusable component built on `@tanstack/react-table` with features like filtering, pagination, sorting, and merged cells. It's defined in the registry and can be consumed via the shadcn CLI.

## Working with Components

### Adding New UI Components
1. Use shadcn CLI to add base components from the official registry
2. Place base components in `src/components/ui/`
3. For composite/block components, create in `src/components/blocks/` and register in `registry.json`

### Registry Format
Components in `registry.json` follow this structure:
- `type`: "registry:block" for composite components
- `registryDependencies`: List of base UI components needed
- `dependencies`: npm packages required
- `files`: Array of component files with their types

### TypeScript Configuration
The root `tsconfig.json` is configured for Next.js-style projects with:
- JSX preservation
- Path aliases using `@/*`
- Bundler module resolution
- Strict mode enabled
