import type { DemoItem } from '@/demos'

import { SelectPreview } from "./preview"
import { SelectAlignItemExample } from "./align-item"
import { SelectGroupsExample } from "./group"
import { SelectScrollableExample } from "./scrollable"
import { SelectDisabledExample } from "./disabled"
import { SelectInvalidExample } from "./invalid"

export const SelectDemos: Record<string, DemoItem> = {
  "select-preview": {
    component: SelectPreview,
    file: "components/select/preview.tsx",
  },
  "select-align-item": {
    component: SelectAlignItemExample,
    file: "components/select/align-item.tsx",
  },
  "select-groups": {
    component: SelectGroupsExample,
    file: "components/select/groups.tsx",
  },
  "select-scrollable": {
    component: SelectScrollableExample,
    file: "components/select/scrollable.tsx",
  },
  "select-disabled": {
    component: SelectDisabledExample,
    file: "components/select/disabled.tsx",
  },
  "select-invalid": {
    component: SelectInvalidExample,
    file: "components/select/invalid.tsx",
  }
}
