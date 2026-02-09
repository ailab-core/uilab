import type { DemoItem } from "..";

import { ToggleGroupPreview } from "./preview";
import { ToggleGroupSizesExample } from "./sizes";
import { ToggleGroupSpacingExample } from "./spacing";
import { ToggleGroupVerticalExample } from "./vertical";
import { ToggleGroupDisabledExample } from "./disabled";

export const ToggleGroupDemos: Record<string, DemoItem> = {
  "toggle-group-preview": {
    component: ToggleGroupPreview,
    file: "toggle-group/preview.tsx",
  },
  "toggle-group-sizes": {
    component: ToggleGroupSizesExample,
    file: "toggle-group/sizes.tsx",
  },
  "toggle-group-spacing": {
    component: ToggleGroupSpacingExample,
    file: "toggle-group/spacing.tsx",
  },
  "toggle-group-vertical": {
    component: ToggleGroupVerticalExample,
    file: "toggle-group/vertical.tsx",
  },
  "toggle-group-disabled": {
    component: ToggleGroupDisabledExample,
    file: "toggle-group/disabled.tsx",
  },
}
