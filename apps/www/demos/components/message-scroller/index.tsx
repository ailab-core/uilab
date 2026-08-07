import type { DemoItem } from '@/demos'
import { MessageScrollerPreview } from "./preview"
import { MessageScrollerDualButtonsExample } from "./dual-buttons"
import { MessageScrollerScrollableExample } from "./scrollable"
import { MessageScrollerJumpExample } from "./jump"
import { MessageScrollerVisibilityExample } from './visibility'

export const MessageScrollerDemos: Record<string, DemoItem> = {
  "message-scroller-preview": {
    component: MessageScrollerPreview,
    file: "components/message-scroller/preview.tsx",
  },
  "message-scroller-dual-buttons": {
    component: MessageScrollerDualButtonsExample,
    file: "components/message-scroller/dual-buttons.tsx",
  },
  "message-scroller-scrollable": {
    component: MessageScrollerScrollableExample,
    file: "components/message-scroller/scrollable.tsx",
  },
  "message-scroller-jump": {
    component: MessageScrollerJumpExample,
    file: "components/message-scroller/jump.tsx",
  },
  "message-scroller-visibility": {
    component: MessageScrollerVisibilityExample,
    file: "components/message-scroller/visibility.tsx",
  },
}