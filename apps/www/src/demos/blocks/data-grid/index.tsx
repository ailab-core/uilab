import type { DemoItem } from "@/demos";
import { DataGridPreview } from "./preview";
import { DataGridReadOnly } from "./read-only";
import { DataGridSkeletonDemo } from "./skeleton";

export const DataGridDemos: Record<string, DemoItem> = {
  "data-grid-preview": {
    component: DataGridPreview,
    file: "blocks/data-grid/preview.tsx",
  },
  "data-grid-read-only": {
    component: DataGridReadOnly,
    file: "blocks/data-grid/read-only.tsx",
  },
  "data-grid-skeleton": {
    component: DataGridSkeletonDemo,
    file: "blocks/data-grid/skeleton.tsx",
  },
};
