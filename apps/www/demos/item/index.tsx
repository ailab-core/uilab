import type { DemoItem } from "..";

import { ItemPreview } from "./preview";
import { ItemSizesExample } from "./sizes";
import { ItemVariantsExample } from "./variants";
import { ItemIconExample } from "./icon";
import { ItemAvatarExample } from "./avatar";
import { ItemImageExample } from "./image";
import { ItemGroupExample } from "./group";
import { ItemHeaderExample } from "./header";
import { ItemLinkExample } from "./link";
import { ItemDropdownExample } from "./dropdown";

export const ItemDemos: Record<string, DemoItem> = {
  "item-preview": {
    component: ItemPreview,
    file: "item/preview.tsx",
  },
  "item-variants": {
    component: ItemVariantsExample,
    file: "item/variants.tsx",
  },
  "item-sizes": {
    component: ItemSizesExample,
    file: "item/sizes.tsx",
  },
  "item-icon": {
    component: ItemIconExample,
    file: "item/icon.tsx",
  },
  "item-avatar": {
    component: ItemAvatarExample,
    file: "item/icon.tsx",
  },
  "item-image": {
    component: ItemImageExample,
    file: "item/image.tsx",
  },
  "item-group": {
    component: ItemGroupExample,
    file: "item/group.tsx",
  },
  "item-header": {
    component: ItemHeaderExample,
    file: "item/header.tsx",
  },
  "item-link": {
    component: ItemLinkExample,
    file: "item/link.tsx",
  },
  "item-dropdown": {
    component: ItemDropdownExample,
    file: "item/dropdown.tsx",
  },
};
