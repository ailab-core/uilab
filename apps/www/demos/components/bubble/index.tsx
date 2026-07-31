import type { DemoItem } from '@/demos'
import { BubblePreview } from "./preview"
import { BubbleVariantsExample } from "./variants"
import { BubbleAlignExample } from "./align"
import { BubbleReactionsExample } from "./reactions"

export const BubbleDemos: Record<string, DemoItem> = {
  "bubble-preview": {
    component: BubblePreview,
    file: "components/bubble/preview.tsx",
  },
  "bubble-variants": {
    component: BubbleVariantsExample,
    file: "components/bubble/variants.tsx",
  },
  "bubble-align": {
    component: BubbleAlignExample,
    file: "components/bubble/align.tsx",
  },
  "bubble-reactions": {
    component: BubbleReactionsExample,
    file: "components/bubble/reactions.tsx",
  },
}