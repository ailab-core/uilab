import type { DemoItem } from '..'

import { DropdownMenuPreview } from "./preview"
import { DropdownMenuShortcutsExample } from './shortcuts'
import { DropdownMenuSubmenusExample } from './submenus'
import { DropdownMenuComplexExample } from './complex'
import { DropdownMenuCheckboxesExample } from './checkboxes'
import { DropdownMenuRadiosExample } from './radios'

export const DropdownMenuDemos: Record<string, DemoItem> = {
  "dropdown-menu-preview": {
    component: DropdownMenuPreview,
    file: 'dropdown-menu/preview.tsx',
  },
  "dropdown-menu-basic": {
    component: DropdownMenuPreview,
    file: 'dropdown-menu/basic.tsx',
  },
  "dropdown-menu-submenus": {
    component: DropdownMenuSubmenusExample,
    file: 'dropdown-menu/submenus.tsx',
  },
  "dropdown-menu-shortcuts": {
    component: DropdownMenuShortcutsExample,
    file: 'dropdown-menu/shortcuts.tsx',
  },
  "dropdown-menu-checkboxes": {
    component: DropdownMenuCheckboxesExample,
    file: 'dropdown-menu/checkboxes.tsx',
  },
  "dropdown-menu-radios": {
    component: DropdownMenuRadiosExample,
    file: 'dropdown-menu/radios.tsx',
  },
  "dropdown-menu-complex": {
    component: DropdownMenuComplexExample,
    file: 'dropdown-menu/complex.tsx',
  }
}
