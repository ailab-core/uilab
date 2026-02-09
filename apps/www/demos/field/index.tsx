import type { DemoItem } from ".."

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
    file: "field/preview.tsx",
  },
  "field-input": {
    component: FieldInputExample,
    file: "field/input.tsx",
  },
  "field-textarea": {
    component: FieldTextareaExample,
    file: "field/textarea.tsx",
  },
  "field-select": {
    component: FieldSelectExample,
    file: "field/select.tsx",
  },
  "field-slider": {
    component: FieldSliderExample,
    file: "field/slider.tsx",
  },
  "field-checkbox": {
    component: FieldCheckboxExample,
    file: "field/checkbox.tsx",
  },
  "field-radio": {
    component: FieldRadioExample,
    file: "field/radio.tsx",
  },
  "field-switch": {
    component: FieldSwitchExample,
    file: "field/switch.tsx",
  },
  "field-choice-card": {
    component: FieldChoiceCardExample,
    file: "field/choice-card.tsx",
  },
  "field-group": {
    component: FieldGroupExample,
    file: "field/group.tsx",
  }
}
