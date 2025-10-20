# UI Lab

Internal component registry, knowledge base, and common utilities for company projects.

## Overview

This monorepo contains:

- **UI Library** - A shadcn/ui-based component registry with reusable React components
- **Documentation** - Interactive documentation site showcasing all available components
- **Utilities** - Common utilities and helpers for frontend development

## Prerequisites

- Node.js >= 22 (see `.nvmrc`)
- pnpm 10.18.2

## Getting Started

```bash
# Install dependencies
pnpm install

# Start documentation site
pnpm start:docs

# Build documentation
pnpm build:docs

# Build UI library registry
pnpm build:ui-library

# Format code
pnpm format
```

## Documentation

The documentation site is available at:
https://ailabmn.gitlab.io/frontend/uilab/

## Using Components in Your Project

Components can be added to your project using the shadcn CLI pointing to our internal registry:

```bash
npx shadcn@latest add [component-name]
```

## Project Structure

```
uilab/
├── apps/
│   ├── ui-library/     # Component registry
│   └── docs/           # Docusaurus documentation site
└── examples/           # Usage examples
```

## Available Components

Visit the documentation site for a complete list of available components including:

- Base UI components (buttons, forms, dialogs, etc.)
- Block components (data tables, layouts, etc.)
- Custom utilities and hooks

## Contributing

1. Follow the existing code style (Prettier is configured)
2. Run `pnpm format` before committing
3. Add documentation for new components
4. Update the component registry as needed

## License

MIT
