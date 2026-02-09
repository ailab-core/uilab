import type { DemoItem } from '..'

import { AspectRatioPreviewExample } from './preview'
import { AspectRatioSquareExample } from "./square"
import { AspectRatioPortraitExample } from './portrait'

export const AspectRatioDemos: Record<string, DemoItem> = {
  "aspect-ratio-preview": {
    component: AspectRatioPreviewExample,
    file: 'aspect-ratio/preview.tsx',
  },
  "aspect-ratio-square": {
    component: AspectRatioSquareExample,
    file: 'aspect-ratio/square.tsx',
  },
  "aspect-ratio-portrait": {
    component: AspectRatioPortraitExample,
    file: 'aspect-ratio/portrait.tsx',
  },
}
