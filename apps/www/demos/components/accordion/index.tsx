import type { DemoItem } from '@/demos'

import { AccordionPreview } from './preview'
import { AccordionBasicExample } from './basic'
import { AccordionMultipleExample } from './multiple'
import { AccordionDisabledExample } from './disabled'

export const AccordionDemos: Record<string, DemoItem> = {
  "accordion-preview": {
    component: AccordionPreview,
    file: 'components/accordion/preview.tsx',
  },
  "accordion-basic": {
    component: AccordionBasicExample,
    file: 'components/accordion/basic.tsx',
  },
  "accordion-multiple": {
    component: AccordionMultipleExample,
    file: 'components/accordion/multiple.tsx',
  },
  "accordion-disabled": {
    component: AccordionDisabledExample,
    file: 'components/accordion/disabled.tsx',
  }
}
