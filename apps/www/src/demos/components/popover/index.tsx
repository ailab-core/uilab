import type { DemoItem } from '@/demos'

import { PopoverAlignExample } from "./align"
import { PopoverBasicExample } from "./basic"
import { PopoverFormExample } from "./form"
import { PopoverPreview } from "./preview"

export const PopoverDemos: Record<string, DemoItem> = {
  "popover-preview": {
    component: PopoverPreview,
    file: "components/popover/preview.tsx",
  },
  "popover-basic": {
    component: PopoverBasicExample,
    file: "components/popover/basic.tsx",
  },
  "popover-align": {
    component: PopoverAlignExample,
    file: "components/popover/align.tsx",
  },
  "popover-form": {
    component: PopoverFormExample,
    file: "components/popover/form.tsx",
  }
}
