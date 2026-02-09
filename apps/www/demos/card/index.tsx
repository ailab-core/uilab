import type { DemoItem } from '..'

import { CardPreview } from "./preview"
import { CardSizesExample } from './sizes'
import { CardImageExample } from './image'

export const CardDemos: Record<string, DemoItem> = {
  "card-preview": {
    component: CardPreview,
    file: 'card/preview.tsx',
  },
  "card-sizes": {
    component: CardSizesExample,
    file: 'card/sizes.tsx',
  },
  "card-image": {
    component: CardImageExample,
    file: 'card/image.tsx',
  }
}
