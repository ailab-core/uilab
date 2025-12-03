import type { Registry } from "shadcn/schema";

export const examples: Registry["items"] = [
  {
    name: "confirmation-demo",
    type: "registry:example",
    dependencies: ["lucide-react", "uilab-core"],
    files: [
      {
        path: "examples/confirmation-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "data-list-demo",
    type: "registry:example",
    dependencies: [
      "@radix-ui/react-slot",
      "class-variance-authority",
      "uilab-core",
    ],
    files: [
      {
        path: "examples/data-list-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "sonner-demo",
    type: "registry:example",
    dependencies: ["sonner", "next-themes", "uilab-core"],
    files: [
      {
        path: "examples/sonner-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
