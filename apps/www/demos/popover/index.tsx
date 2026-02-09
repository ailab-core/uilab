import type { DemoItem } from ".."
import { PopoverAlignExample } from "./align"
import { PopoverBasicExample } from "./basic"
import { PopoverFormExample } from "./form"
import { PopoverPreview } from "./preview"

export const PopoverDemos: Record<string, DemoItem> = {
  "popover-preview": {
    component: PopoverPreview,
    file: "popover/preview.tsx",
  },
  "popover-basic": {
    component: PopoverBasicExample,
    file: "popover/basic.tsx",
  },
  "popover-align": {
    component: PopoverAlignExample,
    file: "popover/align.tsx",
  },
  "popover-form": {
    component: PopoverFormExample,
    file: "popover/form.tsx",
  }
}
