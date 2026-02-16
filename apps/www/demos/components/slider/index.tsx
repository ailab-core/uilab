import type { DemoItem } from '@/demos'

import { SliderPreview } from "./preview";
import { SliderMultipleExample } from "./multiple";
import { SliderVerticalExample } from "./vertical";
import { SliderControlledExample } from "./controlled";
import { SliderDisabledExample } from "./disabled";
import { SliderRangeExample } from "./range";

export const SliderDemos: Record<string, DemoItem> = {
  "slider-preview": {
    component: SliderPreview,
    file: "components/slider/preview.tsx",
  },
  "slider-range": {
    component: SliderRangeExample,
    file: "components/slider/range.tsx",
  },
  "slider-multiple": {
    component: SliderMultipleExample,
    file: "components/slider/multiple.tsx",
  },
  "slider-vertical": {
    component: SliderVerticalExample,
    file: "components/slider/vertical.tsx",
  },
  "slider-controlled": {
    component: SliderControlledExample,
    file: "components/slider/controlled.tsx",
  },
  "slider-disabled": {
    component: SliderDisabledExample,
    file: "components/slider/disabled.tsx",
  },
}
