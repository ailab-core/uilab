import type { DemoItem } from '@/demos'

import { FieldPreview } from "./preview"
import { FieldInputExample } from "./input"
import { FieldTextareaExample } from "./textarea"
import { FieldSelectExample } from "./select"
import { FieldSliderExample } from "./slider"
import { FieldRadioExample } from "./radio"
import { FieldCheckboxExample } from "./checkbox"
import { FieldSwitchExample } from "./switch"
import { FieldChoiceCardExample } from "./choice-card"
import { FieldGroupExample } from "./group"

export const FieldDemos: Record<string, DemoItem> = {
  "field-preview": {
    component: FieldPreview,
    file: "components/field/preview.tsx",
  },
  "field-input": {
    component: FieldInputExample,
    file: "components/field/input.tsx",
  },
  "field-textarea": {
    component: FieldTextareaExample,
    file: "components/field/textarea.tsx",
  },
  "field-select": {
    component: FieldSelectExample,
    file: "components/field/select.tsx",
  },
  "field-slider": {
    component: FieldSliderExample,
    file: "components/field/slider.tsx",
  },
  "field-checkbox": {
    component: FieldCheckboxExample,
    file: "components/field/checkbox.tsx",
  },
  "field-radio": {
    component: FieldRadioExample,
    file: "components/field/radio.tsx",
  },
  "field-switch": {
    component: FieldSwitchExample,
    file: "components/field/switch.tsx",
  },
  "field-choice-card": {
    component: FieldChoiceCardExample,
    file: "components/field/choice-card.tsx",
  },
  "field-group": {
    component: FieldGroupExample,
    file: "components/field/group.tsx",
  }
}
