import type { Registry } from "shadcn/schema";

export const examples: Registry["items"] = [
  {
    name: "confirmation-demo",
    description:
      "A demo showcasing the Confirmation component with a delete action.",
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
    description: "A demo showcasing the DataList component with sample data.",
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
];
