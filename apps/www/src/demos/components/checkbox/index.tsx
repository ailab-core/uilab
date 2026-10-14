import type { DemoItem } from '@/demos'

import { CheckboxPreview } from "./preview"
import { CheckboxBasicExample } from './basic'
import { CheckboxDescriptionExample } from './description'
import { CheckboxDisabledExample } from './disabled'
import { CheckboxGroupExample } from './group'

export const CheckboxDemos: Record<string, DemoItem> = {
  "checkbox-preview": {
    component: CheckboxPreview,
    file: 'components/checkbox/preview.tsx',
  },
  "checkbox-basic": {
    component: CheckboxBasicExample,
    file: 'components/checkbox/basic.tsx',
  },
  "checkbox-description": {
    component: CheckboxDescriptionExample,
    file: 'components/checkbox/description.tsx',
  },
  "checkbox-disabled": {
    component: CheckboxDisabledExample,
    file: 'components/checkbox/disabled.tsx',
  },
  "checkbox-group": {
    component: CheckboxGroupExample,
    file: 'components/checkbox/group.tsx',
  }
}
