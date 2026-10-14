import type { DemoItem } from '@/demos'

import { DropdownMenuPreview } from "./preview"
import { DropdownMenuShortcutsExample } from './shortcuts'
import { DropdownMenuSubmenusExample } from './submenus'
import { DropdownMenuComplexExample } from './complex'
import { DropdownMenuCheckboxesExample } from './checkboxes'
import { DropdownMenuRadiosExample } from './radios'

export const DropdownMenuDemos: Record<string, DemoItem> = {
  "dropdown-menu-preview": {
    component: DropdownMenuPreview,
    file: 'components/dropdown-menu/preview.tsx',
  },
  "dropdown-menu-basic": {
    component: DropdownMenuPreview,
    file: 'components/dropdown-menu/basic.tsx',
  },
  "dropdown-menu-submenus": {
    component: DropdownMenuSubmenusExample,
    file: 'components/dropdown-menu/submenus.tsx',
  },
  "dropdown-menu-shortcuts": {
    component: DropdownMenuShortcutsExample,
    file: 'components/dropdown-menu/shortcuts.tsx',
  },
  "dropdown-menu-checkboxes": {
    component: DropdownMenuCheckboxesExample,
    file: 'components/dropdown-menu/checkboxes.tsx',
  },
  "dropdown-menu-radios": {
    component: DropdownMenuRadiosExample,
    file: 'components/dropdown-menu/radios.tsx',
  },
  "dropdown-menu-complex": {
    component: DropdownMenuComplexExample,
    file: 'components/dropdown-menu/complex.tsx',
  }
}
