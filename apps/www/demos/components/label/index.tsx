import type { DemoItem } from '@/demos'

import { LabelPreview } from "./preview"

export const LabelDemos: Record<string, DemoItem> = {
  "label-preview": {
    component: LabelPreview,
    file: "components/label/preview.tsx",
  },
}
