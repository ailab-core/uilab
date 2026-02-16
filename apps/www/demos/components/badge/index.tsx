import type { DemoItem } from '@/demos'

import { BadgePreview } from "./preview"
import { BadgeVariantsExample } from './variants'
import { BadgeIconExample } from './icon'
import { BadgeSpinnerExample } from './spinner'
import { BadgeLinkExample } from './link'
import { BadgeCustomColorsExample } from './custom-colors'

export const BadgeDemos: Record<string, DemoItem> = {
  "badge-preview": {
    component: BadgePreview,
    file: 'components/badge/preview.tsx',
  },
  "badge-variants": {
    component: BadgeVariantsExample,
    file: 'components/badge/variants.tsx',
  },
  "badge-icon": {
    component: BadgeIconExample,
    file: 'components/badge/icon.tsx',
  },
  "badge-spinner": {
    component: BadgeSpinnerExample,
    file: 'components/badge/spinner.tsx',
  },
  "badge-link": {
    component: BadgeLinkExample,
    file: 'components/badge/link.tsx',
  },
  "badge-custom-colors": {
    component: BadgeCustomColorsExample,
    file: 'components/badge/custom-color.tsx',
  }
}
