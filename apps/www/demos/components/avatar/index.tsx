import type { DemoItem } from '@/demos'

import { AvatarExample } from "./preview"

export const AvatarDemos: Record<string, DemoItem> = {
  "avatar-preview": {
    component: AvatarExample,
    file: 'components/avatar/preview.tsx',
  },
}
