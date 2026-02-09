import type { DemoItem } from ".."
import { MenubarCheckboxesExample } from "./checkboxes"
import { MenubarIconsExample } from "./icons"

import { MenubarPreview } from "./preview"
import { MenubarRadiosExample } from "./radios"
import { MenubarSubmenusExample } from "./submenus"

export const MenubarDemos: Record<string, DemoItem> = {
  "menubar-preview": {
    component: MenubarPreview,
    file: "menubar/preview.tsx",
  },
  "menubar-checkboxes": {
    component: MenubarCheckboxesExample,
    file: "menubar/checkboxes.tsx",
  },
  "menubar-radios": {
    component: MenubarRadiosExample,
    file: "menubar/radios.tsx",
  },
  "menubar-submenus": {
    component: MenubarSubmenusExample,
    file: "menubar/submenus.tsx",
  },
  "menubar-icons": {
    component: MenubarIconsExample,
    file: "menubar/icons.tsx",
  }
}
