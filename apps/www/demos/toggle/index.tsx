import type { DemoItem } from "..";

import { TogglePreview } from "./preview";
import { ToggleSizesExample } from "./sizes";
import { ToggleOutlineExample } from "./outline";
import { ToggleTextExample } from "./text";
import { ToggleDisabledExample } from "./disabled";

export const ToggleDemos: Record<string, DemoItem> = {
  "toggle-preview": {
    component: TogglePreview,
    file: "toggle/preview.tsx",
  },
  "toggle-sizes": {
    component: ToggleSizesExample,
    file: "toggle/sizes.tsx",
  },
  "toggle-outline": {
    component: ToggleOutlineExample,
    file: "toggle/outline.tsx",
  },
  "toggle-text": {
    component: ToggleTextExample,
    file: "toggle/text.tsx",
  },
  "toggle-disabled": {
    component: ToggleDisabledExample,
    file: "toggle/disabled.tsx",
  },
}
