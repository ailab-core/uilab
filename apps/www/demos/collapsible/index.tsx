import { type DemoItem } from '..'

import { CollapsiblePreview } from './preview'
import { CollapsibleSettingsExample } from './settings'
import { CollapsibleFileTreeExample } from './file-tree'

export const CollapsibleDemos: Record<string, DemoItem> = {
  "collapsible-preview": {
    component: CollapsiblePreview,
    file: 'collapsible/preview.tsx',
  },
  "collapsible-settings": {
    component: CollapsibleSettingsExample,
    file: 'collapsible/settings.tsx',
  },
  "collapsible-file-tree": {
    component: CollapsibleFileTreeExample,
    file: 'collapsible/file-tree.tsx',
  }
}

