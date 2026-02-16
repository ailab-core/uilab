import type { DemoItem } from '@/demos'

import { ScrollAreaHorizontalExample } from "./horizontal"
import { ScrollAreaPreview } from "./preview"

export const ScrollAreaDemos: Record<string, DemoItem> = {
  "scroll-area-preview": {
    component: ScrollAreaPreview,
    file: "scroll-area/preview.tsx",
  },
  "scroll-area-horizontal": {
    component: ScrollAreaHorizontalExample,
    file: "scroll-area/horizontal.tsx",
  },
}
