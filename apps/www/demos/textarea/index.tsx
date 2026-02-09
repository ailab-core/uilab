import type { DemoItem } from "..";
import { TextareaDisabledExample } from "./disabled";
import { TextareaFieldExample } from "./field";

import { TextareaPreview } from "./preview";

export const TextareaDemos: Record<string, DemoItem> = {
  "textarea-preview": {
    component: TextareaPreview,
    file: "textarea/preview.tsx",
  },
  "textarea-field": {
    component: TextareaFieldExample,
    file: "textarea/field.tsx",
  },
  "textarea-disabled": {
    component: TextareaDisabledExample,
    file: "textarea/disabled.tsx",
  },
  "textarea-invalid": {
    component: TextareaDisabledExample,
    file: "textarea/invalid.tsx",
  },
  "textarea-button": {
    component: TextareaDisabledExample,
    file: "textarea/button.tsx",
  }
}
