import type { DemoItem } from "..";

import { KbdPreview } from "./preview";
import { KbdGroupExample } from "./group";
import { KbdButtonExample } from "./button";
import { KbdTooltipExample } from "./tooltip";
import { KbdInputGroupExample } from "./input-group";

export const KbdDemos: Record<string, DemoItem> = {
  "kbd-preview": {
    component: KbdPreview,
    file: "kbd/preview.tsx",
  },
  "kbd-group": {
    component: KbdGroupExample,
    file: "kbd/group.tsx",
  },
  "kbd-button": {
    component: KbdButtonExample,
    file: "kbd/button.tsx",
  },
  "kbd-tooltip": {
    component: KbdTooltipExample,
    file: "kbd/tooltip.tsx",
  },
  "kbd-input-group": {
    component: KbdInputGroupExample,
    file: "kbd/input-group.tsx",
  },
}
