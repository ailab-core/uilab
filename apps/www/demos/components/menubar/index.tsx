import type { DemoItem } from '@/demos'

import { MenubarPreview } from "./preview"
import { MenubarRadiosExample } from "./radios"
import { MenubarSubmenusExample } from "./submenus"
import { MenubarCheckboxesExample } from "./checkboxes"
import { MenubarIconsExample } from "./icons"

export const MenubarDemos: Record<string, DemoItem> = {
  "menubar-preview": {
    component: MenubarPreview,
    file: "components/menubar/preview.tsx",
  },
  "menubar-checkboxes": {
    component: MenubarCheckboxesExample,
    file: "components/menubar/checkboxes.tsx",
  },
  "menubar-radios": {
    component: MenubarRadiosExample,
    file: "components/menubar/radios.tsx",
  },
  "menubar-submenus": {
    component: MenubarSubmenusExample,
    file: "components/menubar/submenus.tsx",
  },
  "menubar-icons": {
    component: MenubarIconsExample,
    file: "components/menubar/icons.tsx",
  }
}
