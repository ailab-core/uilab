import type { DemoItem } from ".."

import { SelectPreview } from "./preview"
import { SelectAlignItemExample } from "./align-item"
import { SelectGroupsExample } from "./group"
import { SelectScrollableExample } from "./scrollable"
import { SelectDisabledExample } from "./disabled"
import { SelectInvalidExample } from "./invalid"

export const SelectDemos: Record<string, DemoItem> = {
  "select-preview": {
    component: SelectPreview,
    file: "select/preview.tsx",
  },
  "select-align-item": {
    component: SelectAlignItemExample,
    file: "select/align-item.tsx",
  },
  "select-groups": {
    component: SelectGroupsExample,
    file: "select/groups.tsx",
  },
  "select-scrollable": {
    component: SelectScrollableExample,
    file: "select/scrollable.tsx",
  },
  "select-disabled": {
    component: SelectDisabledExample,
    file: "select/disabled.tsx",
  },
  "select-invalid": {
    component: SelectInvalidExample,
    file: "select/invalid.tsx",
  }
}
