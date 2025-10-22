"use client"

import * as React from "react"
import { CellContext } from "@tanstack/react-table"
import { TableCell, cn } from "uilab-core"

/**
 * In order to use this, you have to set `isCustomCell` to `true` in any form of table block component
 */
export function MergedCell({
  context,
  className,
  children,
  border = true,
}: {
  context: CellContext<any, unknown>
  border?: boolean
} & React.ComponentPropsWithoutRef<"div">) {
  const { row, table, column } = context
  const cell = row.original[column.id]
  const rows = table.getRowModel().rows
  const rowIndex = row.index

  // Count how many rows have the same category starting from this row
  let rowSpan = 1
  if (rowIndex === 0 || rows[rowIndex - 1].original[column.id] !== cell) {
    for (let i = rowIndex + 1; i < rows.length; i++) {
      if (rows[i].original[column.id] === cell) {
        rowSpan++
      } else {
        break
      }
    }

    return (
      <TableCell
        rowSpan={rowSpan}
        className={cn(className, border && "border")}
      >
        {children}
      </TableCell>
    )
  }

  return null
}
