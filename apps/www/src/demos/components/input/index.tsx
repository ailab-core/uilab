import type { DemoItem } from '@/demos'

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
    file: "components/input/preview.tsx",
  },
  "input-basic": {
    component: InputBasicExample,
    file: "components/input/basic.tsx",
  },
  "input-field": {
    component: InputFieldExample,
    file: "components/input/field.tsx",
  },
  "input-field-group": {
    component: InputFieldGroupExample,
    file: "components/input/field-group.tsx",
  },
  "input-disabled": {
    component: InputDisabledExample,
    file: "components/input/disabled.tsx",
  },
  "input-invalid": {
    component: InputInvalidExample,
    file: "components/input/invalid.tsx",
  },
  "input-file": {
    component: InputFileExample,
    file: "components/input/file.tsx",
  },
  "input-inline": {
    component: InputInlineExample,
    file: "components/input/inline.tsx",
  },
  "input-grid": {
    component: InputGridExample,
    file: "components/input/grid.tsx",
  },
  "input-required": {
    component: InputRequiredExample,
    file: "components/input/required.tsx",
  },
  "input-badge": {
    component: InputBadgeExample,
    file: "components/input/badge.tsx",
  },
  "input-input-group": {
    component: InputInputGroupExample,
    file: "components/input/input-group.tsx",
  },
  "input-button-group": {
    component: InputButtonGroupExample,
    file: "components/input/button-group.tsx",
  },
  "input-form": {
    component: InputFormExample,
    file: "components/input/form.tsx",
  },
}
