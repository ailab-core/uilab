import type { DemoItem } from '@/demos'

import { CardPreview } from "./preview"
import { CardSizesExample } from './sizes'
import { CardImageExample } from './image'

export const CardDemos: Record<string, DemoItem> = {
  "card-preview": {
    component: CardPreview,
    file: 'components/card/preview.tsx',
  },
  "card-sizes": {
    component: CardSizesExample,
    file: 'components/card/sizes.tsx',
  },
  "card-image": {
    component: CardImageExample,
    file: 'components/card/image.tsx',
  }
}
