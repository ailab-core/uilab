import type { DemoItem } from '@/demos'

import { ToggleGroupPreview } from "./preview";
import { ToggleGroupSizesExample } from "./sizes";
import { ToggleGroupSpacingExample } from "./spacing";
import { ToggleGroupVerticalExample } from "./vertical";
import { ToggleGroupDisabledExample } from "./disabled";
import { ToggleGroupOutlineExample } from './outline';

export const ToggleGroupDemos: Record<string, DemoItem> = {
  "toggle-group-preview": {
    component: ToggleGroupPreview,
    file: "components/toggle-group/preview.tsx",
  },
  "toggle-group-sizes": {
    component: ToggleGroupSizesExample,
    file: "components/toggle-group/sizes.tsx",
  },
  "toggle-group-outline": {
    component: ToggleGroupOutlineExample,
    file: "components/toggle-group/outline.tsx",
  },
  "toggle-group-spacing": {
    component: ToggleGroupSpacingExample,
    file: "components/toggle-group/spacing.tsx",
  },
  "toggle-group-vertical": {
    component: ToggleGroupVerticalExample,
    file: "components/toggle-group/vertical.tsx",
  },
  "toggle-group-disabled": {
    component: ToggleGroupDisabledExample,
    file: "components/toggle-group/disabled.tsx",
  },
}
