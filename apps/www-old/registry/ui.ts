import { type Registry } from "shadcn/schema";

export const ui: Registry["items"] = [
  {
    name: "currency-input",
    type: "registry:component",
    title: "Currency Input",
    description: "Input for currencies :)",
    dependencies: ["react-hook-form", "react-number-format", "uilab-core"],
    files: [
      {
        path: "ui/currency-input.tsx",
        type: "registry:component",
      },
    ],
  },
];
