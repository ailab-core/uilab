import type { DemoItem } from '@/demos'

import { SkeletonPreview } from "./preview";
import { SkeletonAvatarExample } from "./avatar";
import { SkeletonCardExample } from "./card";
import { SkeletonFormExample } from "./form";
import { SkeletonTableExample } from "./table";
import { SkeletonTextExample } from "./text";

export const SkeletonDemos: Record<string, DemoItem> = {
  "skeleton-preview": {
    component: SkeletonPreview,
    file: "components/skeleton/preview.tsx",
  },
  "skeleton-avatar": {
    component: SkeletonAvatarExample,
    file: "components/skeleton/avatar.tsx",
  },
  "skeleton-card": {
    component: SkeletonCardExample,
    file: "components/skeleton/card.tsx",
  },
  "skeleton-text": {
    component: SkeletonTextExample,
    file: "components/skeleton/text.tsx",
  },
  "skeleton-form": {
    component: SkeletonFormExample,
    file: "components/skeleton/form.tsx",
  },
  "skeleton-table": {
    component: SkeletonTableExample,
    file: "components/skeleton/table.tsx",
  },
}
