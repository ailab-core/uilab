import { type Registry } from "shadcn/schema";

export const blocks: Registry["items"] = [
  {
    name: "confirmation",
    type: "registry:block",
    title: "Confirmation",
    description: "Common extendable confirmation dialog for uilab",
    dependencies: ["lucide-react", "uilab-core"],
    files: [
      {
        path: "blocks/confirmation.tsx",
        type: "registry:component",
        target: "components/confirmation.tsx",
      },
    ],
    categories: ["dialog"],
  },
  {
    name: "data-table",
    type: "registry:block",
    title: "Data table",
    description: "Common extendable data table for uilab",
    dependencies: ["@tanstack/react-table", "lucide-react", "uilab-core"],
    files: [
      {
        path: "blocks/data-table/advanced.tsx",
        type: "registry:component",
        target: "components/data-table/advanced.tsx",
      },
      {
        path: "blocks/data-table/basic.tsx",
        type: "registry:component",
        target: "components/data-table/basic.tsx",
      },
      {
        path: "blocks/data-table/filter-popover.tsx",
        type: "registry:component",
        target: "components/data-table/filter-popover.tsx",
      },
      {
        path: "blocks/data-table/merged-cell.tsx",
        type: "registry:component",
        target: "components/data-table/merged-cell.tsx",
      },
      {
        path: "blocks/data-table/pagination.tsx",
        type: "registry:component",
        target: "components/data-table/pagination.tsx",
      },
      {
        path: "blocks/data-table/index.tsx",
        type: "registry:component",
        target: "components/data-table/index.tsx",
      },
    ],
    categories: ["data", "table"],
  },
  {
    name: "data-list",
    type: "registry:component",
    title: "Data List",
    description: "Data list component",
    dependencies: [
      "@radix-ui/react-slot",
      "class-variance-authority",
      "uilab-core",
    ],
    files: [
      {
        path: "blocks/data-list.tsx",
        type: "registry:component",
        target: "components/data-list.tsx",
      },
    ],
    categories: ["data", "list"],
  },
  {
    name: "form-dialog",
    type: "registry:block",
    title: "Form dialog",
    description: "Common dialog of a form component",
    registryDependencies: [
      "https://ailabmn.gitlab.io/frontend/uilab/registry/r/confirmation.json",
    ],
    dependencies: ["react-hook-form", "lucide-react", "uilab-core"],
    files: [
      {
        path: "blocks/form-dialog.tsx",
        type: "registry:component",
        target: "components/form-dialog.tsx",
      },
    ],
    categories: ["dialog", "form"],
  },
  {
    name: "form-sheet",
    type: "registry:block",
    title: "Form dialog",
    description: "Common sheet of a form component",
    registryDependencies: [
      "https://ailabmn.gitlab.io/frontend/uilab/registry/r/confirmation.json",
    ],
    dependencies: ["react-hook-form", "lucide-react", "uilab-core"],
    files: [
      {
        path: "blocks/form-sheet.tsx",
        type: "registry:component",
        target: "components/form-sheet.tsx",
      },
    ],
    categories: ["sheet", "form"],
  },
];
