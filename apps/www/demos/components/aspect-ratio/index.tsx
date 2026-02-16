import type { DemoItem } from '@/demos'

import { AspectRatioPreviewExample } from './preview'
import { AspectRatioSquareExample } from "./square"
import { AspectRatioPortraitExample } from './portrait'

export const AspectRatioDemos: Record<string, DemoItem> = {
  "aspect-ratio-preview": {
    component: AspectRatioPreviewExample,
    file: 'components/aspect-ratio/preview.tsx',
  },
  "aspect-ratio-square": {
    component: AspectRatioSquareExample,
    file: 'components/aspect-ratio/square.tsx',
  },
  "aspect-ratio-portrait": {
    component: AspectRatioPortraitExample,
    file: 'components/aspect-ratio/portrait.tsx',
  },
}
