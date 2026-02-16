import type { DemoItem } from '@/demos'

import { SwitchPreview } from "./preview";
import { SwitchDescriptionExample } from "./description";
import { SwitchChoiceCardExample } from "./choice-card";
import { SwitchDisabledExample } from "./disabled";
import { SwitchInvalidExample } from "./invalid";
import { SwitchSizesExample } from "./sizes";

export const SwitchDemos: Record<string, DemoItem> = {
  "switch-preview": {
    component: SwitchPreview,
    file: "components/switch/preview.tsx",
  },
  "switch-description": {
    component: SwitchDescriptionExample,
    file: "components/switch/description.tsx",
  },
  "switch-choice-card": {
    component: SwitchChoiceCardExample,
    file: "components/switch/choice-card.tsx",
  },
  "switch-disabled": {
    component: SwitchDisabledExample,
    file: "components/switch/disabled.tsx",
  },
  "switch-invalid": {
    component: SwitchInvalidExample,
    file: "components/switch/invalid.tsx",
  },
  "switch-sizes": {
    component: SwitchSizesExample,
    file: "components/switch/sizes.tsx",
  }
}
