import type { DemoItem } from '@/demos'

import { TextareaPreview } from "./preview";
import { TextareaDisabledExample } from "./disabled";
import { TextareaFieldExample } from "./field";
import { TextareaInvalidExample } from './invalid';
import { TextareaButtonExample } from './button';

export const TextareaDemos: Record<string, DemoItem> = {
  "textarea-preview": {
    component: TextareaPreview,
    file: "components/textarea/preview.tsx",
  },
  "textarea-field": {
    component: TextareaFieldExample,
    file: "components/textarea/field.tsx",
  },
  "textarea-disabled": {
    component: TextareaDisabledExample,
    file: "components/textarea/disabled.tsx",
  },
  "textarea-invalid": {
    component: TextareaInvalidExample,
    file: "components/textarea/invalid.tsx",
  },
  "textarea-button": {
    component: TextareaButtonExample,
    file: "components/textarea/button.tsx",
  }
}
