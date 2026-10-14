import type { DemoItem } from '@/demos'

import { ButtonPreview } from "./preview"
import { ButtonSizesExample } from './sizes'
import { ButtonIconExample } from './icon'
import { ButtonWithIconExample } from './with-icon'
import { ButtonRoundedExample } from './rounded'

export const ButtonDemos: Record<string, DemoItem> = {
  "button-preview": {
    component: ButtonPreview,
    file: 'components/button/preview.tsx',
  },
  "button-sizes": {
    component: ButtonSizesExample,
    file: 'components/button/sizes.tsx',
  },
  "button-icon": {
    component: ButtonIconExample,
    file: 'components/button/icon.tsx',
  },
  "button-with-icon": {
    component: ButtonWithIconExample,
    file: 'components/button/with-icon.tsx',
  },
  "button-rounded": {
    component: ButtonRoundedExample,
    file: 'components/button/rounded.tsx',
  }
}
