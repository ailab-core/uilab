import type { DemoItem } from '@/demos'

import { SheetPreview } from "./preview"
import { SheetSidesExample } from "./sides"
import { SheetNoCloseButtonExample } from "./no-close-button"

export const SheetDemos: Record<string, DemoItem> = {
  "sheet-preview": {
    component: SheetPreview,
    file: "components/sheet/preview.tsx"
  },
  "sheet-sides": {
    component: SheetSidesExample,
    file: "components/sheet/sides.tsx"
  },
  "sheet-no-close-button": {
    component: SheetNoCloseButtonExample,
    file: "components/sheet/no-close-button.tsx"
  }
}
