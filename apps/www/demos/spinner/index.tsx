import type { DemoItem } from "..";

import { SpinnerPreview } from "./preview";
import { SpinnerSizesExample } from "./sizes";
import { SpinnerButtonExample } from "./button";
import { SpinnerBadgeExample } from "./badge";
import { SpinnerInputGroupExample } from "./input-group";
import { SpinnerEmptyExample } from "./empty";

export const SpinnerDemos: Record<string, DemoItem> = {
  "spinner-preview": {
    component: SpinnerPreview,
    file: "spinner/preview.tsx",
  },
  "spinner-sizes": {
    component: SpinnerSizesExample,
    file: "spinner/sizes.tsx",
  },
  "spinner-button": {
    component: SpinnerButtonExample,
    file: "spinner/button.tsx",
  },
  "spinner-badge": {
    component: SpinnerBadgeExample,
    file: "spinner/badge.tsx",
  },
  "spinner-input-group": {
    component: SpinnerInputGroupExample,
    file: "spinner/input-group.tsx",
  },
  "spinner-empty": {
    component: SpinnerEmptyExample,
    file: "spinner/empty.tsx",
  },
}
