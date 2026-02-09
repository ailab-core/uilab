import type { DemoItem } from ".."
import { ProgressControlledExample } from "./controlled"
import { ProgressLabelExample } from "./label"

import { ProgressPreview } from "./preview"

export const ProgressDemos: Record<string, DemoItem> = {
  "progress-preview": {
    component: ProgressPreview,
    file: "progress/preview.tsx",
  },
  "progress-label": {
    component: ProgressLabelExample,
    file: "progress/label.tsx",
  },
  "progress-controlled": {
    component: ProgressControlledExample,
    file: "progress/controlled.tsx",
  }
}
