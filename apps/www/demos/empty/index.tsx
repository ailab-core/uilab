import type { DemoItem } from ".."

import { EmptyPreview } from "./preview"
import { EmptyOutlineExample } from "./outline"
import { EmptyAvatarExample } from "./avatar"
import { EmptyInputGroupExample } from "./input-group"

export const EmptyDemos: Record<string, DemoItem> = {
  "empty-preview": {
    component: EmptyPreview,
    file: "empty/preview.tsx",
  },
  "empty-outline": {
    component: EmptyOutlineExample,
    file: "empty/outline.tsx",
  },
  "empty-avatar": {
    component: EmptyAvatarExample,
    file: "empty/avatar.tsx",
  },
  "empty-input-group": {
    component: EmptyInputGroupExample,
    file: "empty/input-group.tsx",
  }
}
