import type { DemoItem } from '@/demos'

import { SeparatorPreview } from "./preview"
import { SeparatorVerticalExample } from "./vertical"
import { SeparatorListExample } from "./list"
import { SeparatorMenuExample } from "./menu"

export const SeparatorDemos: Record<string, DemoItem> = {
  "separator-preview": {
    component: SeparatorPreview,
    file: "components/separator/preview.tsx"
  },
  "separator-vertical": {
    component: SeparatorVerticalExample,
    file: "components/separator/vertical.tsx"
  },
  "separator-menu": {
    component: SeparatorMenuExample,
    file: "components/separator/menu.tsx"
  },
  "separator-list": {
    component: SeparatorListExample,
    file: "components/separator/list.tsx"
  }
}
