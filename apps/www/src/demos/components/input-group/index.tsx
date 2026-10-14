import type { DemoItem } from '@/demos'

import { InputGroupIconExample } from "./icon";
import { InputGroupKbdExample } from "./kbd";
import { InputGroupPreview } from "./preview";
import { InputGroupSpinnerExample } from "./spinner";
import { InputGroupTextExample } from "./text";
import { InputGroupTextareaExample } from "./textarea";
import { InputGroupButtonExample } from "./button";
import { InputGroupDropdownExample } from "./dropdown";

export const InputGroupDemos: Record<string, DemoItem> = {
  "input-group-preview": {
    component: InputGroupPreview,
    file: "components/input-group/preview.tsx",
  },
  "input-group-icon": {
    component: InputGroupIconExample,
    file: "components/input-group/icon.tsx",
  },
  "input-group-text": {
    component: InputGroupTextExample,
    file: "components/input-group/text.tsx",
  },
  "input-group-button": {
    component: InputGroupButtonExample,
    file: "components/input-group/button.tsx",
  },
  "input-group-kbd": {
    component: InputGroupKbdExample,
    file: "components/input-group/kbd.tsx",
  },
  "input-group-dropdown": {
    component: InputGroupDropdownExample,
    file: "components/input-group/dropdown.tsx",
  },
  "input-group-spinner": {
    component: InputGroupSpinnerExample,
    file: "components/input-group/spinner.tsx",
  },
  "input-group-textarea": {
    component: InputGroupTextareaExample,
    file: "components/input-group/textarea.tsx",
  }
};
