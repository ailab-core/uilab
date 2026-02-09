import type { DemoItem } from '..'

import { AlertPreview } from './preview'
import { AlertBasicExample } from './basic'
import { AlertDestructiveExample } from './destructive'
import { AlertActionExample } from './action'
import { AlertCustomColorsExample } from './custom-color'

export const AlertDemos: Record<string, DemoItem> = {
  "alert-preview": {
    component: AlertPreview,
    file: 'alert/preview.tsx',
  },
  "alert-basic": {
    component: AlertBasicExample,
    file: 'alert/basic.tsx',
  },
  "alert-destructive": {
    component: AlertDestructiveExample,
    file: 'alert/destructive.tsx',
  },
  "alert-action": {
    component: AlertActionExample,
    file: 'alert/action.tsx',
  },
  "alert-custom-colors": {
    component: AlertCustomColorsExample,
    file: 'alert/custom-color.tsx',
  }
}
