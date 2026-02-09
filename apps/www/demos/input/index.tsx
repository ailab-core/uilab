import type { DemoItem } from ".."

import { InputPreview } from "./preview"
import { InputBasicExample } from "./basic"
import { InputFieldExample } from "./field"
import { InputFieldGroupExample } from "./field-group"
import { InputDisabledExample } from "./disabled"
import { InputInvalidExample } from "./invalid"
import { InputFileExample } from "./file"
import { InputInlineExample } from "./inline"
import { InputGridExample } from "./grid"
import { InputRequiredExample } from "./required"
import { InputBadgeExample } from "./badge"
import { InputInputGroupExample } from "./input-group"
import { InputButtonGroupExample } from "./button-group"
import { InputFormExample } from "./form"

export const InputDemos: Record<string, DemoItem> = {
  "input-preview": {
    component: InputPreview,
    file: "input/preview.tsx",
  },
  "input-basic": {
    component: InputBasicExample,
    file: "input/basic.tsx",
  },
  "input-field": {
    component: InputFieldExample,
    file: "input/field.tsx",
  },
  "input-field-group": {
    component: InputFieldGroupExample,
    file: "input/field-group.tsx",
  },
  "input-disabled": {
    component: InputDisabledExample,
    file: "input/disabled.tsx",
  },
  "input-invalid": {
    component: InputInvalidExample,
    file: "input/invalid.tsx",
  },
  "input-file": {
    component: InputFileExample,
    file: "input/file.tsx",
  },
  "input-inline": {
    component: InputInlineExample,
    file: "input/inline.tsx",
  },
  "input-grid": {
    component: InputGridExample,
    file: "input/grid.tsx",
  },
  "input-required": {
    component: InputRequiredExample,
    file: "input/required.tsx",
  },
  "input-badge": {
    component: InputBadgeExample,
    file: "input/badge.tsx",
  },
  "input-input-group": {
    component: InputInputGroupExample,
    file: "input/input-group.tsx",
  },
  "input-button-group": {
    component: InputButtonGroupExample,
    file: "input/button-group.tsx",
  },
  "input-form": {
    component: InputFormExample,
    file: "input/form.tsx",
  },
}
