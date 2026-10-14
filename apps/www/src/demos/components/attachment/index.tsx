import type { DemoItem } from '@/demos'
import { AttachmentPreview } from "./preview"
import { AttachmentStatesExample } from "./states"
import { AttachmentSizesExample } from "./sizes"
import { AttachmentVerticalExample } from "./vertical"
import { AttachmentActionsExample } from "./actions"
import { AttachmentTriggerExample } from "./trigger"
import { AttachmentImageExample } from "./image"
import { AttachmentGroupExample } from "./group"

export const AttachmentDemos: Record<string, DemoItem> = {
  "attachment-preview": {
    component: AttachmentPreview,
    file: "components/attachment/preview.tsx",
  },
  "attachment-states": {
    component: AttachmentStatesExample,
    file: "components/attachment/states.tsx",
  },
  "attachment-sizes": {
    component: AttachmentSizesExample,
    file: "components/attachment/sizes.tsx",
  },
  "attachment-vertical": {
    component: AttachmentVerticalExample,
    file: "components/attachment/vertical.tsx",
  },
  "attachment-actions": {
    component: AttachmentActionsExample,
    file: "components/attachment/actions.tsx",
  },
  "attachment-trigger": {
    component: AttachmentTriggerExample,
    file: "components/attachment/trigger.tsx",
  },
  "attachment-image": {
    component: AttachmentImageExample,
    file: "components/attachment/image.tsx",
  },
  "attachment-group": {
    component: AttachmentGroupExample,
    file: "components/attachment/group.tsx",
  },
}