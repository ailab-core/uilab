import type { DemoItem } from '@/demos'

import { PaginationPreview } from "./preview"
import { PaginationSimpleExample } from "./simple"
import { PaginationIconsOnlyExample } from "./icons-only"

export const PaginationDemos: Record<string, DemoItem> = {
  "pagination-preview": {
    component: PaginationPreview,
    file: "components/pagination/preview.tsx",
  },
  "pagination-simple": {
    component: PaginationSimpleExample,
    file: "components/pagination/simple.tsx",
  },
  "pagination-icons-only": {
    component: PaginationIconsOnlyExample,
    file: "components/pagination/icons-only.tsx",
  }
}
