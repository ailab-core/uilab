import type { DemoItem } from ".."
import { HoverCardPreview } from "./preview"
import { HoverCardBasicExample } from "./basic"
import { HoverCardSidesExample } from "./sides"

export const HoverCardDemos: Record<string, DemoItem> = {
  "hover-card-preview": {
    component: HoverCardPreview,
    file: "hover-card/preview.tsx",
  },
  "hover-card-basic": {
    component: HoverCardBasicExample,
    file: "hover-card/basic.tsx",
  },
  "hover-card-sides": {
    component: HoverCardSidesExample,
    file: "hover-card/sides.tsx",
  },
}
