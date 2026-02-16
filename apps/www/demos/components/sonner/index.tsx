import type { DemoItem } from '@/demos'

import { SonnerPreview } from "./preview";
import { SonnerTypesExample } from "./types";
import { SonnerDescriptionExample } from "./description";
import { SonnerPositionExample } from "./position";

export const SonnerDemos: Record<string, DemoItem> = {
  "sonner-preview": {
    component: SonnerPreview,
    file: "components/sonner/preview.tsx",
  },
  "sonner-types": {
    component: SonnerTypesExample,
    file: "components/sonner/types.tsx",
  },
  "sonner-description": {
    component: SonnerDescriptionExample,
    file: "components/sonner/description.tsx",
  },
  "sonner-position": {
    component: SonnerPositionExample,
    file: "components/sonner/position.tsx",
  }
}
