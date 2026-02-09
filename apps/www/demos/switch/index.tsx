import type { DemoItem } from "..";

import { SwitchPreview } from "./preview";
import { SwitchDescriptionExample } from "./description";
import { SwitchChoiceCardExample } from "./choice-card";
import { SwitchDisabledExample } from "./disabled";
import { SwitchInvalidExample } from "./invalid";
import { SwitchSizesExample } from "./sizes";

export const SwitchDemos: Record<string, DemoItem> = {
  "switch-preview": {
    component: SwitchPreview,
    file: "switch/preview.tsx",
  },
  "switch-description": {
    component: SwitchDescriptionExample,
    file: "switch/description.tsx",
  },
  "switch-choice-card": {
    component: SwitchChoiceCardExample,
    file: "switch/choice-card.tsx",
  },
  "switch-disabled": {
    component: SwitchDisabledExample,
    file: "switch/disabled.tsx",
  },
  "switch-invalid": {
    component: SwitchInvalidExample,
    file: "switch/invalid.tsx",
  },
  "switch-sizes": {
    component: SwitchSizesExample,
    file: "switch/sizes.tsx",
  }
}
