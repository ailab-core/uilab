import { docs } from "fumadocs-mdx:collections/server";
import type * as PageTree from "fumadocs-core/page-tree";
import { type InferPageType, loader } from "fumadocs-core/source";
import { lucideIconsPlugin } from "fumadocs-core/source/lucide-icons";
import * as React from "react";

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});

function withNewBadge(node: PageTree.Node): PageTree.Node {
  if (node.type === "page") {
    const page = source.getPageByHref(node.url);
    if (page?.page?.data?.isNew) {
      return {
        ...node,
        name: React.createElement(
          "span",
          { key: "new-badge-wrapper", className: "flex items-center gap-1.5" },
          React.createElement("span", { key: "label" }, node.name),
          React.createElement("span", {
            key: "badge",
            className: "size-1.5 shrink-0 rounded-full bg-blue-500",
          }),
        ),
      };
    }
    return node;
  }
  if (node.type === "folder") {
    return { ...node, children: node.children.map(withNewBadge) };
  }
  return node;
}

export function getPageTreeWithBadges(): PageTree.Root {
  const tree = source.getPageTree();
  return { ...tree, children: tree.children.map(withNewBadge) };
}

export async function getLLMText(page: InferPageType<typeof source>) {
  const processed = await page.data.getText("processed");
  return `# ${page.data.title}
${processed}`;
}
