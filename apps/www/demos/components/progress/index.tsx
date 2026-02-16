import type { DemoItem } from '@/demos'

import { ProgressPreview } from "./preview"
import { ProgressControlledExample } from "./controlled"
import { ProgressLabelExample } from "./label"

export const ProgressDemos: Record<string, DemoItem> = {
  "progress-preview": {
    component: ProgressPreview,
    file: "components/progress/preview.tsx",
  },
  "progress-label": {
    component: ProgressLabelExample,
    file: "components/progress/label.tsx",
  },
  "progress-controlled": {
    component: ProgressControlledExample,
    file: "components/progress/controlled.tsx",
  }
}
