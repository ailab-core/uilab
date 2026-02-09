import { type DemoItem } from "..";
import { InputGroupButtonExample } from "./button";
import { InputGroupDropdownExample } from "./dropdown";

import { InputGroupIconExample } from "./icon";
import { InputGroupKbdExample } from "./kbd";
import { InputGroupPreview } from "./preview";
import { InputGroupSpinnerExample } from "./spinner";
import { InputGroupTextExample } from "./text";
import { InputGroupTextareaExample } from "./textarea";

export const InputGroupDemos: Record<string, DemoItem> = {
  "input-group-preview": {
    component: InputGroupPreview,
    file: "input-group/preview.tsx",
  },
  "input-group-icon": {
    component: InputGroupIconExample,
    file: "input-group/icon.tsx",
  },
  "input-group-text": {
    component: InputGroupTextExample,
    file: "input-group/text.tsx",
  },
  "input-group-button": {
    component: InputGroupButtonExample,
    file: "input-group/button.tsx",
  },
  "input-group-kbd": {
    component: InputGroupKbdExample,
    file: "input-group/kbd.tsx",
  },
  "input-group-dropdown": {
    component: InputGroupDropdownExample,
    file: "input-group/dropdown.tsx",
  },
  "input-group-spinner": {
    component: InputGroupSpinnerExample,
    file: "input-group/spinner.tsx",
  },
  "input-group-textarea": {
    component: InputGroupTextareaExample,
    file: "input-group/textarea.tsx",
  }
};
