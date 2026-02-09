import type { DemoItem } from "..";
import { TooltipDisabledButtonExample } from "./disabled-button";

import { TooltipPreview } from "./preview";
import { TooltipSidesExample } from "./sides";
import { TooltipWithKbdExample } from "./with-kbd";

export const TooltipDemos: Record<string, DemoItem> = {
  "tooltip-preview": {
    component: TooltipPreview,
    file: "tooltip/preview.tsx",
  },
  "tooltip-sides": {
    component: TooltipSidesExample,
    file: "tooltip/sides.tsx",
  },
  "tooltip-with-kbd": {
    component: TooltipWithKbdExample,
    file: "tooltip/with-kbd.tsx",
  },
  "tooltip-disabled-button": {
    component: TooltipDisabledButtonExample,
    file: "tooltip/disabled-button.tsx",
  }
}
