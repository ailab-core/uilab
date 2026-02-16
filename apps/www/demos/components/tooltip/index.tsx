import type { DemoItem } from '@/demos'

import { TooltipPreview } from "./preview";
import { TooltipSidesExample } from "./sides";
import { TooltipWithKbdExample } from "./with-kbd";
import { TooltipDisabledButtonExample } from "./disabled-button";

export const TooltipDemos: Record<string, DemoItem> = {
  "tooltip-preview": {
    component: TooltipPreview,
    file: "components/tooltip/preview.tsx",
  },
  "tooltip-sides": {
    component: TooltipSidesExample,
    file: "components/tooltip/sides.tsx",
  },
  "tooltip-with-kbd": {
    component: TooltipWithKbdExample,
    file: "components/tooltip/with-kbd.tsx",
  },
  "tooltip-disabled-button": {
    component: TooltipDisabledButtonExample,
    file: "components/tooltip/disabled-button.tsx",
  }
}
