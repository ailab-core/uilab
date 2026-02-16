import type { DemoItem } from '@/demos'

import { KbdPreview } from "./preview";
import { KbdGroupExample } from "./group";
import { KbdButtonExample } from "./button";
import { KbdTooltipExample } from "./tooltip";
import { KbdInputGroupExample } from "./input-group";

export const KbdDemos: Record<string, DemoItem> = {
  "kbd-preview": {
    component: KbdPreview,
    file: "components/kbd/preview.tsx",
  },
  "kbd-group": {
    component: KbdGroupExample,
    file: "components/kbd/group.tsx",
  },
  "kbd-button": {
    component: KbdButtonExample,
    file: "components/kbd/button.tsx",
  },
  "kbd-tooltip": {
    component: KbdTooltipExample,
    file: "components/kbd/tooltip.tsx",
  },
  "kbd-input-group": {
    component: KbdInputGroupExample,
    file: "components/kbd/input-group.tsx",
  },
}
