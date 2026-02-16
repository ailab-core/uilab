import type { DemoItem } from '@/demos'

import { DrawerPreview } from "./preview"
import { DrawerScrollableExample } from './scrollable'
import { DrawerSidesExample } from './sides'

export const DrawerDemos: Record<string, DemoItem> = {
  "drawer-preview": {
    component: DrawerPreview,
    file: 'components/drawer/preview.tsx',
  },
  "drawer-scrollable": {
    component: DrawerScrollableExample,
    file: 'components/drawer/scrollable.tsx',
  },
  "drawer-sides": {
    component: DrawerSidesExample,
    file: 'components/drawer/sides.tsx',
  }
}
