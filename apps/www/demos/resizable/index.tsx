import type { DemoItem } from ".."

import { ResizablePreview } from "./preview"
import { ResizableVerticalExample } from "./vertical"
import { ResizableHandleExample } from "./handle"

export const ResizableDemos: Record<string, DemoItem> = {
  "resizable-preview": {
    component: ResizablePreview,
    file: "resizable/preview.tsx",
  },
  "resizable-vertical": {
    component: ResizableVerticalExample,
    file: "resizable/vertical.tsx",
  },
  "resizable-handle": {
    component: ResizableHandleExample,
    file: "resizable/handle.tsx",
  },
}
