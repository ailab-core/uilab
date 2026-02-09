import type { DemoItem } from '..'

import { BadgePreview } from "./preview"
import { BadgeVariantsExample } from './variants'
import { BadgeIconExample } from './icon'
import { BadgeSpinnerExample } from './spinner'
import { BadgeLinkExample } from './link'
import { BadgeCustomColorsExample } from './custom-colors'

export const BadgeDemos: Record<string, DemoItem> = {
  "badge-preview": {
    component: BadgePreview,
    file: 'badge/preview.tsx',
  },
  "badge-variants": {
    component: BadgeVariantsExample,
    file: 'badge/variants.tsx',
  },
  "badge-icon": {
    component: BadgeIconExample,
    file: 'badge/icon.tsx',
  },
  "badge-spinner": {
    component: BadgeSpinnerExample,
    file: 'badge/spinner.tsx',
  },
  "badge-link": {
    component: BadgeLinkExample,
    file: 'badge/link.tsx',
  },
  "badge-custom-colors": {
    component: BadgeCustomColorsExample,
    file: 'badge/custom-color.tsx',
  }
}
