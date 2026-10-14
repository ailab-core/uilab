import type { DemoItem } from '@/demos'

import { AlertPreview } from './preview'
import { AlertBasicExample } from './basic'
import { AlertDestructiveExample } from './destructive'
import { AlertActionExample } from './action'
import { AlertCustomColorsExample } from './custom-color'

export const AlertDemos: Record<string, DemoItem> = {
  "alert-preview": {
    component: AlertPreview,
    file: 'components/alert/preview.tsx',
  },
  "alert-basic": {
    component: AlertBasicExample,
    file: 'components/alert/basic.tsx',
  },
  "alert-destructive": {
    component: AlertDestructiveExample,
    file: 'components/alert/destructive.tsx',
  },
  "alert-action": {
    component: AlertActionExample,
    file: 'components/alert/action.tsx',
  },
  "alert-custom-colors": {
    component: AlertCustomColorsExample,
    file: 'components/alert/custom-color.tsx',
  }
}
