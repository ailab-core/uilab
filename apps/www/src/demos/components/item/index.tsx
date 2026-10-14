import type { DemoItem } from '@/demos'

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
    file: "components/item/preview.tsx",
  },
  "item-variants": {
    component: ItemVariantsExample,
    file: "components/item/variants.tsx",
  },
  "item-sizes": {
    component: ItemSizesExample,
    file: "components/item/sizes.tsx",
  },
  "item-icon": {
    component: ItemIconExample,
    file: "components/item/icon.tsx",
  },
  "item-avatar": {
    component: ItemAvatarExample,
    file: "components/item/icon.tsx",
  },
  "item-image": {
    component: ItemImageExample,
    file: "components/item/image.tsx",
  },
  "item-group": {
    component: ItemGroupExample,
    file: "components/item/group.tsx",
  },
  "item-header": {
    component: ItemHeaderExample,
    file: "components/item/header.tsx",
  },
  "item-link": {
    component: ItemLinkExample,
    file: "components/item/link.tsx",
  },
  "item-dropdown": {
    component: ItemDropdownExample,
    file: "components/item/dropdown.tsx",
  },
};
