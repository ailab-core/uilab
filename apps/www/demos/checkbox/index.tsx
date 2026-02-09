import type { DemoItem } from '..'

import { CheckboxPreview } from "./preview"
import { CheckboxBasicExample } from './basic'
import { CheckboxDescriptionExample } from './description'
import { CheckboxDisabledExample } from './disabled'
import { CheckboxGroupExample } from './group'

export const CheckboxDemos: Record<string, DemoItem> = {
  "checkbox-preview": {
    component: CheckboxPreview,
    file: 'checkbox/preview.tsx',
  },
  "checkbox-basic": {
    component: CheckboxBasicExample,
    file: 'checkbox/basic.tsx',
  },
  "checkbox-description": {
    component: CheckboxDescriptionExample,
    file: 'checkbox/description.tsx',
  },
  "checkbox-disabled": {
    component: CheckboxDisabledExample,
    file: 'checkbox/disabled.tsx',
  },
  "checkbox-group": {
    component: CheckboxGroupExample,
    file: 'checkbox/group.tsx',
  }
}
