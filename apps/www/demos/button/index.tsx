import type { DemoItem } from '..'

import { ButtonPreview } from "./preview"
import { ButtonSizesExample } from './sizes'
import { ButtonIconExample } from './icon'
import { ButtonWithIconExample } from './with-icon'
import { ButtonRoundedExample } from './rounded'

export const ButtonDemos: Record<string, DemoItem> = {
  "button-preview": {
    component: ButtonPreview,
    file: 'button/preview.tsx',
  },
  "button-sizes": {
    component: ButtonSizesExample,
    file: 'button/sizes.tsx',
  },
  "button-icon": {
    component: ButtonIconExample,
    file: 'button/icon.tsx',
  },
  "button-with-icon": {
    component: ButtonWithIconExample,
    file: 'button/with-icon.tsx',
  },
  "button-rounded": {
    component: ButtonRoundedExample,
    file: 'button/rounded.tsx',
  }
}
