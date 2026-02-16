import type { DemoItem } from '@/demos'

import { RadioGroupPreview } from "./preview"
import { RadioGroupDescriptionExample } from "./description"
import { RadioGroupChoiceCardExample } from "./choice-card"
import { RadioGroupFieldsetExample } from "./fieldset"
import { RadioGroupDisabledExample } from "./disabled"
import { RadioGroupInvalidExample } from "./invalid"

export const RadioGroupDemos: Record<string, DemoItem> = {
  "radio-group-preview": {
    component: RadioGroupPreview,
    file: "components/radio-group/preview.tsx",
  },
  "radio-group-description": {
    component: RadioGroupDescriptionExample,
    file: "components/radio-group/description.tsx",
  },
  "radio-group-choice-card": {
    component: RadioGroupChoiceCardExample,
    file: "components/radio-group/choice-card.tsx",
  },
  "radio-group-fieldset": {
    component: RadioGroupFieldsetExample,
    file: "components/radio-group/fieldset.tsx",
  },
  "radio-group-disabled": {
    component: RadioGroupDisabledExample,
    file: "components/radio-group/disabled.tsx",
  },
  "radio-group-invalid": {
    component: RadioGroupInvalidExample,
    file: "components/radio-group/invalid.tsx",
  }
}
