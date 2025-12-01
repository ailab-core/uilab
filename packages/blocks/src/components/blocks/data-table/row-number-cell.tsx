import type { CellContext } from "@tanstack/react-table"

export const RowNumberCell = {
  header: "#",
  cell: ({ row, table }: CellContext<any, unknown>): number => {
    const pageIndex = table.getState().pagination.pageIndex
    const pageSize = table.getState().pagination.pageSize
    return pageIndex * pageSize + row.index + 1
  },
  size: 50,
}
