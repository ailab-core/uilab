import type { DemoItem } from "..";

import { SkeletonPreview } from "./preview";
import { SkeletonAvatarExample } from "./avatar";
import { SkeletonCardExample } from "./card";
import { SkeletonFormExample } from "./form";
import { SkeletonTableExample } from "./table";
import { SkeletonTextExample } from "./text";

export const SkeletonDemos: Record<string, DemoItem> = {
  "skeleton-preview": {
    component: SkeletonPreview,
    file: "skeleton/preview.tsx",
  },
  "skeleton-avatar": {
    component: SkeletonAvatarExample,
    file: "skeleton/avatar.tsx",
  },
  "skeleton-card": {
    component: SkeletonCardExample,
    file: "skeleton/card.tsx",
  },
  "skeleton-text": {
    component: SkeletonTextExample,
    file: "skeleton/text.tsx",
  },
  "skeleton-form": {
    component: SkeletonFormExample,
    file: "skeleton/form.tsx",
  },
  "skeleton-table": {
    component: SkeletonTableExample,
    file: "skeleton/table.tsx",
  },
}
