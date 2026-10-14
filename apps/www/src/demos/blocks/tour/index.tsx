import type { DemoItem } from "@/demos";
import { TourControlled } from "./controlled";
import { TourPreview } from "./preview";

export const TourDemos: Record<string, DemoItem> = {
  "tour-preview": {
    component: TourPreview,
    file: "blocks/tour/preview.tsx",
  },
  "tour-controlled": {
    component: TourControlled,
    file: "blocks/tour/controlled.tsx",
  },
};
