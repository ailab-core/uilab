import type { DemoItem } from '@/demos'

import { CommandPreview } from './preview'

export const CommandDemos: Record<string, DemoItem> = {
  "command-preview": {
    component: CommandPreview,
    file: 'components/command/preview.tsx',
  },
}

