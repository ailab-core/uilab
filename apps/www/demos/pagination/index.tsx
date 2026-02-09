import type { DemoItem } from ".."

import { PaginationPreview } from "./preview"
import { PaginationSimpleExample } from "./simple"
import { PaginationIconsOnlyExample } from "./icons-only"

export const PaginationDemos: Record<string, DemoItem> = {
  "pagination-preview": {
    component: PaginationPreview,
    file: "pagination/preview.tsx",
  },
  "pagination-simple": {
    component: PaginationSimpleExample,
    file: "pagination/simple.tsx",
  },
  "pagination-icons-only": {
    component: PaginationIconsOnlyExample,
    file: "pagination/icons-only.tsx",
  }
}
