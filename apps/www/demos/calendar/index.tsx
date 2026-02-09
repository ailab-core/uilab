import type { DemoItem } from '..'

import { CalendarPreview } from "./preview"

export const CalendarDemos: Record<string, DemoItem> = {
  "calendar-preview": {
    component: CalendarPreview,
    file: 'calendar/preview.tsx',
  },
}
