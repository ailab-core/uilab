import type { DemoItem } from "..";

import { SliderPreview } from "./preview";
import { SliderMultipleExample } from "./multiple";
import { SliderVerticalExample } from "./vertical";
import { SliderControlledExample } from "./controlled";
import { SliderDisabledExample } from "./disabled";
import { SliderRangeExample } from "./range";

export const SliderDemos: Record<string, DemoItem> = {
  "slider-preview": {
    component: SliderPreview,
    file: "slider/preview.tsx",
  },
  "slider-range": {
    component: SliderRangeExample,
    file: "slider/range.tsx",
  },
  "slider-multiple": {
    component: SliderMultipleExample,
    file: "slider/multiple.tsx",
  },
  "slider-vertical": {
    component: SliderVerticalExample,
    file: "slider/vertical.tsx",
  },
  "slider-controlled": {
    component: SliderControlledExample,
    file: "slider/controlled.tsx",
  },
  "slider-disabled": {
    component: SliderDisabledExample,
    file: "slider/disabled.tsx",
  },
}
