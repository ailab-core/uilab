import type { DemoItem } from "..";
import { TabsDisabledExample } from "./disabled";
import { TabsIconsExample } from "./icons";
import { TabsLineExample } from "./line";

import { TabsPreview } from "./preview";
import { TabsVerticalExample } from "./vertical";

export const TabsDemos: Record<string, DemoItem> = {
  "tabs-preview": {
    component: TabsPreview,
    file: "tabs/preview.tsx",
  },
  "tabs-line": {
    component: TabsLineExample,
    file: "tabs/line.tsx",
  },
  "tabs-vertical": {
    component: TabsVerticalExample,
    file: "tabs/vertical.tsx",
  },
  "tabs-disabled": {
    component: TabsDisabledExample,
    file: "tabs/disabled.tsx",
  },
  "tabs-icons": {
    component: TabsIconsExample,
    file: "tabs/icons.tsx",
  }
}
