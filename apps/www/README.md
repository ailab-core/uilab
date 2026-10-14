# www

Docs site and shadcn registry for UI Lab, built with
[TanStack Start](https://tanstack.com/start) and [Fumadocs](https://fumadocs.dev).

```bash
pnpm dev        # http://localhost:3000
pnpm build      # prerenders the docs and writes the server to .output/
pnpm start      # serves .output/
```

| Path                   | Description                                                |
| ---------------------- | ---------------------------------------------------------- |
| `routes/`              | File routes (home, docs, search, OG images, LLM markdown)  |
| `content/docs/`        | MDX pages, frontmatter schema in `source.config.ts`        |
| `demos/`               | Live examples used by `<ComponentPreview name="..." />`    |
| `registry/`, `registry.json` | shadcn registry blocks, built to `public/r/` with `pnpm registry:build` |
