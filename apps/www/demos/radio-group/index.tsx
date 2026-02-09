import type { DemoItem } from ".."

import { RadioGroupPreview } from "./preview"
import { RadioGroupDescriptionExample } from "./description"
import { RadioGroupChoiceCardExample } from "./choice-card"
import { RadioGroupFieldsetExample } from "./fieldset"
import { RadioGroupDisabledExample } from "./disabled"
import { RadioGroupInvalidExample } from "./invalid"

export const RadioGroupDemos: Record<string, DemoItem> = {
  "radio-group-preview": {
    component: RadioGroupPreview,
    file: "radio-group/preview.tsx",
  },
  "radio-group-description": {
    component: RadioGroupDescriptionExample,
    file: "radio-group/description.tsx",
  },
  "radio-group-choice-card": {
    component: RadioGroupChoiceCardExample,
    file: "radio-group/choice-card.tsx",
  },
  "radio-group-fieldset": {
    component: RadioGroupFieldsetExample,
    file: "radio-group/fieldset.tsx",
  },
  "radio-group-disabled": {
    component: RadioGroupDisabledExample,
    file: "radio-group/disabled.tsx",
  },
  "radio-group-invalid": {
    component: RadioGroupInvalidExample,
    file: "radio-group/invalid.tsx",
  }
}
