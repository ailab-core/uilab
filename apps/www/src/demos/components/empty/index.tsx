import type { DemoItem } from '@/demos'

import { EmptyPreview } from "./preview"
import { EmptyOutlineExample } from "./outline"
import { EmptyAvatarExample } from "./avatar"
import { EmptyInputGroupExample } from "./input-group"

export const EmptyDemos: Record<string, DemoItem> = {
  "empty-preview": {
    component: EmptyPreview,
    file: "components/empty/preview.tsx",
  },
  "empty-outline": {
    component: EmptyOutlineExample,
    file: "components/empty/outline.tsx",
  },
  "empty-avatar": {
    component: EmptyAvatarExample,
    file: "components/empty/avatar.tsx",
  },
  "empty-input-group": {
    component: EmptyInputGroupExample,
    file: "components/empty/input-group.tsx",
  }
}
