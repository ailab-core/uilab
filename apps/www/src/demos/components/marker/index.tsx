import type { DemoItem } from '@/demos'
import { MarkerPreview } from "./preview"
import { MarkerSeparatorExample } from "./separator"
import { MarkerBorderExample } from "./border"
import { MarkerLoadingExample } from "./loading"
import { MarkerToolActivityExample } from "./tool-activity"
import { MarkerFeedExample } from "./feed"

export const MarkerDemos: Record<string, DemoItem> = {
  "marker-preview": {
    component: MarkerPreview,
    file: "components/marker/preview.tsx",
  },
  "marker-separator": {
    component: MarkerSeparatorExample,
    file: "components/marker/separator.tsx",
  },
  "marker-border": {
    component: MarkerBorderExample,
    file: "components/marker/border.tsx",
  },
  "marker-loading": {
    component: MarkerLoadingExample,
    file: "components/marker/loading.tsx",
  },
  "marker-tool-activity": {
    component: MarkerToolActivityExample,
    file: "components/marker/tool-activity.tsx",
  },
  "marker-feed": {
    component: MarkerFeedExample,
    file: "components/marker/feed.tsx",
  },
}