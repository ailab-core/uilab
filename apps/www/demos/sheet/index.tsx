import type { DemoItem } from ".."

import { SheetPreview } from "./preview"
import { SheetSidesExample } from "./sides"
import { SheetNoCloseButtonExample } from "./no-close-button"

export const SheetDemos: Record<string, DemoItem> = {
  "sheet-preview": {
    component: SheetPreview,
    file: "sheet/preview.tsx"
  },
  "sheet-sides": {
    component: SheetSidesExample,
    file: "sheet/sides.tsx"
  },
  "sheet-no-close-button": {
    component: SheetNoCloseButtonExample,
    file: "sheet/no-close-button.tsx"
  }
}
