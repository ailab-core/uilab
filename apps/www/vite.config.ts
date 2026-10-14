import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { fumadocsMdx } from "fumadocs-mdx/vite";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    fumadocsMdx(),
    tailwindcss(),
    tanstackStart({
      // App code lives in src/; content/ and registry/ stay at the package root.
      srcDirectory: "src",
      prerender: {
        enabled: true,
        crawlLinks: true,
        // Demos contain placeholder links (e.g. `/components`); only crawl site pages.
        filter: ({ path }) =>
          path === "/" || path.startsWith("/docs") || path.startsWith("/llms"),
      },
    }),
    react(),
    // Nitro detects the hosting provider (e.g. Vercel) at build time.
    // https://tanstack.com/start/latest/docs/framework/react/guide/hosting
    nitro({
      // Bundle tslib: when traced, Node resolves `tslib` through its exports map
      // to files Nitro doesn't copy (`modules/index.js`).
      noExternals: ["tslib"],
    }),
  ],
  css: {
    // Tailwind runs through `@tailwindcss/vite`; don't load a postcss.config file.
    postcss: { plugins: [] },
  },
  resolve: {
    tsconfigPaths: true,
    alias: {
      tslib: "tslib/tslib.es6.js",
      "shiki/wasm": fileURLToPath(
        new URL("./src/lib/shiki-wasm-stub.ts", import.meta.url),
      ),
    },
  },
});
