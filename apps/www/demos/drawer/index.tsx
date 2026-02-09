import type { DemoItem } from '..'

import { DrawerPreview } from "./preview"
import { DrawerScrollableExample } from './scrollable'
import { DrawerSidesExample } from './sides'

export const DrawerDemos: Record<string, DemoItem> = {
  "drawer-preview": {
    component: DrawerPreview,
    file: 'drawer/preview.tsx',
  },
  "drawer-scrollable": {
    component: DrawerScrollableExample,
    file: 'drawer/scrollable.tsx',
  },
  "drawer-sides": {
    component: DrawerSidesExample,
    file: 'drawer/sides.tsx',
  }
}
