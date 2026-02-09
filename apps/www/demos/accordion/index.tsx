import type { DemoItem } from '..'

import { AccordionPreview } from './preview'
import { AccordionBasicExample } from './basic'
import { AccordionMultipleExample } from './multiple'
import { AccordionDisabledExample } from './disabled'

export const AccordionDemos: Record<string, DemoItem> = {
  "accordion-preview": {
    component: AccordionPreview,
    file: 'accordion/preview.tsx',
  },
  "accordion-basic": {
    component: AccordionBasicExample,
    file: 'accordion/basic.tsx',
  },
  "accordion-multiple": {
    component: AccordionMultipleExample,
    file: 'accordion/multiple.tsx',
  },
  "accordion-disabled": {
    component: AccordionDisabledExample,
    file: 'accordion/disabled.tsx',
  }
}
