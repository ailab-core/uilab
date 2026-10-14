import { createFileRoute, notFound } from "@tanstack/react-router";
import { getLLMText, source } from "@/lib/source";

// Markdown of the docs index page, at `/docs.mdx`
export const Route = createFileRoute("/docs.mdx")({
  server: {
    handlers: {
      GET: async () => {
        const page = source.getPage([]);
        if (!page) throw notFound();

        return new Response(await getLLMText(page), {
          headers: { "Content-Type": "text/markdown" },
        });
      },
    },
  },
});
