import type { DemoItem } from "@/demos"

import { DataTablePreview } from "./preview"
import { DataTableBasic } from "./basic"

export const DataTableDemos: Record<string, DemoItem> = {
  "data-table-preview": {
    component: DataTablePreview,
    file: "blocks/data-table/preview.tsx",
  },
  "data-table-basic": {
    component: DataTableBasic,
    file: "blocks/data-table/basic.tsx",
  }
}
