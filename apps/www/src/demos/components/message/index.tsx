import type { DemoItem } from '@/demos'
import { MessagePreview } from "./preview"
import { MessageAlignExample } from "./align"
import { MessageGroupExample } from "./group"
import { MessageActionExample } from "./action"
import { MessageAttachmentExample } from "./attachment"

export const MessageDemos: Record<string, DemoItem> = {
  "message-preview": {
    component: MessagePreview,
    file: "components/message/preview.tsx",
  },
  "message-align": {
    component: MessageAlignExample,
    file: "components/message/align.tsx",
  },
  "message-group": {
    component: MessageGroupExample,
    file: "components/message/group.tsx",
  },
  "message-action": {
    component: MessageActionExample,
    file: "components/message/action.tsx",
  },
  "message-attachment": {
    component: MessageAttachmentExample,
    file: "components/message/attachment.tsx",
  },
}