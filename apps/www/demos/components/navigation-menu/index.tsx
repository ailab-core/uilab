import type { DemoItem } from '@/demos'

import { NavigationMenuPreview } from "./preview"

export const NavigationMenuDemos: Record<string, DemoItem> = {
  "navigation-menu-preview": {
    component: NavigationMenuPreview,
    file: "components/navigation-menu/preview.tsx",
  }
}
