import type { DemoItem } from "..";

import { SonnerPreview } from "./preview";
import { SonnerTypesExample } from "./types";
import { SonnerDescriptionExample } from "./description";
import { SonnerPositionExample } from "./position";

export const SonnerDemos: Record<string, DemoItem> = {
  "sonner-preview": {
    component: SonnerPreview,
    file: "sonner/preview.tsx",
  },
  "sonner-types": {
    component: SonnerTypesExample,
    file: "sonner/types.tsx",
  },
  "sonner-description": {
    component: SonnerDescriptionExample,
    file: "sonner/description.tsx",
  },
  "sonner-position": {
    component: SonnerPositionExample,
    file: "sonner/position.tsx",
  }
}
