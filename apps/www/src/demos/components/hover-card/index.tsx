import type { DemoItem } from '@/demos'

import { HoverCardPreview } from "./preview"
import { HoverCardBasicExample } from "./basic"
import { HoverCardSidesExample } from "./sides"

export const HoverCardDemos: Record<string, DemoItem> = {
  "hover-card-preview": {
    component: HoverCardPreview,
    file: "components/hover-card/preview.tsx",
  },
  "hover-card-basic": {
    component: HoverCardBasicExample,
    file: "components/hover-card/basic.tsx",
  },
  "hover-card-sides": {
    component: HoverCardSidesExample,
    file: "components/hover-card/sides.tsx",
  },
}
