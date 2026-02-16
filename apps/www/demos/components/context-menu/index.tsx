import type { DemoItem } from '@/demos'

import { ContextMenuPreview } from "./preview"
import { ContextMenuSubmenusExample } from "./submenus"
import { ContextMenuIconsExample } from "./icons"
import { ContextMenuGroupsExample } from "./groups"
import { ContextMenuCheckboxesExample } from "./checkboxes"
import { ContextMenuRadiosExample } from "./radios"

export const ContextMenuDemos: Record<string, DemoItem> = {
  "context-menu-preview": {
    component: ContextMenuPreview,
    file: "components/context-menu/preview.tsx",
  },
  "context-menu-submenus": {
    component: ContextMenuSubmenusExample,
    file: "components/context-menu/submenus.tsx",
  },
  "context-menu-icons": {
    component: ContextMenuIconsExample,
    file: "components/context-menu/icons.tsx",
  },
  "context-menu-groups": {
    component: ContextMenuGroupsExample,
    file: "components/context-menu/groups.tsx",
  },
  "context-menu-checkboxes": {
    component: ContextMenuCheckboxesExample,
    file: "components/context-menu/checkboxes.tsx",
  },
  "context-menu-radios": {
    component: ContextMenuRadiosExample,
    file: "components/context-menu/radios.tsx",
  },
}
