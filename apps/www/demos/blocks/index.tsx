import type { DemoItem } from ".."

import { ConfirmationDemos } from "./confirmation"
import { DataTableDemos } from "./data-table"
import { DataGridDemos } from "./data-grid"
import { SonnerDemos } from "./sonner"

export const blocksDemos: Record<string, DemoItem> = {
  ...ConfirmationDemos,
  ...DataTableDemos,
  ...DataGridDemos,
  ...SonnerDemos
}
