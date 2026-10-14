import type { DemoItem } from '@/demos'

import { CollapsiblePreview } from './preview'
import { CollapsibleSettingsExample } from './settings'
import { CollapsibleFileTreeExample } from './file-tree'

export const CollapsibleDemos: Record<string, DemoItem> = {
  "collapsible-preview": {
    component: CollapsiblePreview,
    file: 'components/collapsible/preview.tsx',
  },
  "collapsible-settings": {
    component: CollapsibleSettingsExample,
    file: 'components/collapsible/settings.tsx',
  },
  "collapsible-file-tree": {
    component: CollapsibleFileTreeExample,
    file: 'components/collapsible/file-tree.tsx',
  }
}

