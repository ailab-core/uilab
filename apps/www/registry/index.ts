import { registryItemSchema, type Registry } from "shadcn/schema";
import { z } from "zod/v3";

import { ui } from "@/registry/ui";
import { blocks } from "@/registry/blocks";
import { examples } from "@/registry/examples";

const CLASSIC_STYLE = {
  type: "registry:style",
  dependencies: ["class-variance-authority", "lucide-react", "uilab-core"],
  devDependencies: ["tw-animate-css"],
  registryDependencies: ["utils"],
  cssVars: {},
  files: [],
};

export const registry = {
  name: "uilab",
  homepage: "https://ui.ailab.mn",
  items: z.array(registryItemSchema).parse([
    {
      name: "index",
      ...CLASSIC_STYLE,
    },
    {
      name: "style",
      ...CLASSIC_STYLE,
    },
    ...ui,
    ...blocks,
    ...examples,
  ]),
} satisfies Registry;
