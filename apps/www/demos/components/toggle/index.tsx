import type { DemoItem } from '@/demos'

import { TogglePreview } from "./preview";
import { ToggleSizesExample } from "./sizes";
import { ToggleOutlineExample } from "./outline";
import { ToggleTextExample } from "./text";
import { ToggleDisabledExample } from "./disabled";

export const ToggleDemos: Record<string, DemoItem> = {
  "toggle-preview": {
    component: TogglePreview,
    file: "components/toggle/preview.tsx",
  },
  "toggle-sizes": {
    component: ToggleSizesExample,
    file: "components/toggle/sizes.tsx",
  },
  "toggle-outline": {
    component: ToggleOutlineExample,
    file: "components/toggle/outline.tsx",
  },
  "toggle-text": {
    component: ToggleTextExample,
    file: "components/toggle/text.tsx",
  },
  "toggle-disabled": {
    component: ToggleDisabledExample,
    file: "components/toggle/disabled.tsx",
  },
}
