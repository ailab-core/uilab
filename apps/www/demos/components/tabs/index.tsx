import type { DemoItem } from '@/demos'

import { TabsPreview } from "./preview";
import { TabsVerticalExample } from "./vertical";
import { TabsDisabledExample } from "./disabled";
import { TabsIconsExample } from "./icons";
import { TabsLineExample } from "./line";

export const TabsDemos: Record<string, DemoItem> = {
  "tabs-preview": {
    component: TabsPreview,
    file: "components/tabs/preview.tsx",
  },
  "tabs-line": {
    component: TabsLineExample,
    file: "components/tabs/line.tsx",
  },
  "tabs-vertical": {
    component: TabsVerticalExample,
    file: "components/tabs/vertical.tsx",
  },
  "tabs-disabled": {
    component: TabsDisabledExample,
    file: "components/tabs/disabled.tsx",
  },
  "tabs-icons": {
    component: TabsIconsExample,
    file: "components/tabs/icons.tsx",
  }
}
