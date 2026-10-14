import type { DemoItem } from '@/demos'

import { CalendarPreview } from "./preview"

export const CalendarDemos: Record<string, DemoItem> = {
  "calendar-preview": {
    component: CalendarPreview,
    file: 'components/calendar/preview.tsx',
  },
}
