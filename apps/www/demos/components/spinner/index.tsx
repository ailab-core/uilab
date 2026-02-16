import type { DemoItem } from '@/demos'

import { SpinnerPreview } from "./preview";
import { SpinnerSizesExample } from "./sizes";
import { SpinnerButtonExample } from "./button";
import { SpinnerBadgeExample } from "./badge";
import { SpinnerInputGroupExample } from "./input-group";
import { SpinnerEmptyExample } from "./empty";

export const SpinnerDemos: Record<string, DemoItem> = {
  "spinner-preview": {
    component: SpinnerPreview,
    file: "components/spinner/preview.tsx",
  },
  "spinner-sizes": {
    component: SpinnerSizesExample,
    file: "components/spinner/sizes.tsx",
  },
  "spinner-button": {
    component: SpinnerButtonExample,
    file: "components/spinner/button.tsx",
  },
  "spinner-badge": {
    component: SpinnerBadgeExample,
    file: "components/spinner/badge.tsx",
  },
  "spinner-input-group": {
    component: SpinnerInputGroupExample,
    file: "components/spinner/input-group.tsx",
  },
  "spinner-empty": {
    component: SpinnerEmptyExample,
    file: "components/spinner/empty.tsx",
  },
}
