import { type DemoItem } from ".."

import { ContextMenuPreview } from "./preview"
import { ContextMenuSubmenusExample } from "./submenus"
import { ContextMenuIconsExample } from "./icons"
import { ContextMenuGroupsExample } from "./groups"
import { ContextMenuCheckboxesExample } from "./checkboxes"
import { ContextMenuRadiosExample } from "./radios"

export const ContextMenuDemos: Record<string, DemoItem> = {
  "context-menu-preview": {
    component: ContextMenuPreview,
    file: "context-menu/preview.tsx",
  },
  "context-menu-submenus": {
    component: ContextMenuSubmenusExample,
    file: "context-menu/submenus.tsx",
  },
  "context-menu-icons": {
    component: ContextMenuIconsExample,
    file: "context-menu/icons.tsx",
  },
  "context-menu-groups": {
    component: ContextMenuGroupsExample,
    file: "context-menu/groups.tsx",
  },
  "context-menu-checkboxes": {
    component: ContextMenuCheckboxesExample,
    file: "context-menu/checkboxes.tsx",
  },
  "context-menu-radios": {
    component: ContextMenuRadiosExample,
    file: "context-menu/radios.tsx",
  },
}
