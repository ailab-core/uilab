import type { DemoItem } from '@/demos'

import { ResizablePreview } from "./preview"
import { ResizableVerticalExample } from "./vertical"
import { ResizableHandleExample } from "./handle"

export const ResizableDemos: Record<string, DemoItem> = {
  "resizable-preview": {
    component: ResizablePreview,
    file: "components/resizable/preview.tsx",
  },
  "resizable-vertical": {
    component: ResizableVerticalExample,
    file: "components/resizable/vertical.tsx",
  },
  "resizable-handle": {
    component: ResizableHandleExample,
    file: "components/resizable/handle.tsx",
  },
}
