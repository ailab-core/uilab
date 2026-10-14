export const appName = "UILab";
export const siteUrl = "https://ui.ailab.mn";
export const docsRoute = "/docs";

export const gitConfig = {
  user: "ailab-core",
  repo: "uilab",
  branch: "main",
};

/**
 * Raw Markdown of a page, kept at `/docs/<slug>.mdx`
 * (`/docs.mdx` for the docs index).
 */
export function getPageMarkdownUrl(page: { slugs: string[] }) {
  return page.slugs.length === 0
    ? `${docsRoute}.mdx`
    : `${docsRoute}/${page.slugs.join("/")}.mdx`;
}

/** @returns page slugs */
export function decodeMarkdownUrl(segments: string[]) {
  if (segments.length === 0) return [];

  const out = [...segments];
  out[out.length - 1] = out[out.length - 1].replace(/\.mdx$/, "");
  return out;
}

export function getPageImage(page: { slugs: string[] }) {
  const segments = [...page.slugs, "image.png"];
  return {
    segments,
    url: `/og/docs/${segments.join("/")}`,
  };
}
