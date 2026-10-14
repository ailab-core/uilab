import type { DemoItem } from "@/demos"

import { SonnerPreview } from "./preview";
import { SonnerTypesExample } from "./types";
import { SonnerDescriptionExample } from "./description";
import { SonnerPositionExample } from "./position";

export const SonnerDemos: Record<string, DemoItem> = {
  "sonner-preview": {
    component: SonnerPreview,
    file: "blocks/sonner/preview.tsx",
  },
  "sonner-types": {
    component: SonnerTypesExample,
    file: "blocks/sonner/types.tsx",
  },
  "sonner-description": {
    component: SonnerDescriptionExample,
    file: "blocks/sonner/description.tsx",
  },
  "sonner-position": {
    component: SonnerPositionExample,
    file: "blocks/sonner/position.tsx",
  }
}
