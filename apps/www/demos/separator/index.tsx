import type { DemoItem } from ".."

import { SeparatorPreview } from "./preview"
import { SeparatorVerticalExample } from "./vertical"
import { SeparatorListExample } from "./list"
import { SeparatorMenuExample } from "./menu"

export const SeparatorDemos: Record<string, DemoItem> = {
  "separator-preview": {
    component: SeparatorPreview,
    file: "preview.tsx"
  },
  "separator-vertical": {
    component: SeparatorVerticalExample,
    file: "vertical.tsx"
  },
  "separator-menu": {
    component: SeparatorMenuExample,
    file: "menu.tsx"
  },
  "separator-list": {
    component: SeparatorListExample,
    file: "list.tsx"
  }
}
