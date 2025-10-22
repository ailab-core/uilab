"use client"

import * as React from "react"
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type TableMeta,
} from "@tanstack/react-table"
import {
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  cn
} from "uilab-core"
import type { DataColumn } from "."

export function BasicDataTable({
  data,
  columns,
  defaultColumn,
  border = true,
  noResultsText = "No results",
  meta,
  isFetching,
  isCustomCell,
}: {
  /**
   * Content to display
   */
  data: Array<any>
  /**
   * Collection of column definitions with
   * [Tanstack Table](https://tanstack.com/table/latest/docs/api/core/column-def) standard
   */
  columns: DataColumn<any>[]
  /**
   * Default column options to use for all column defs supplied to the table.
   */
  defaultColumn?: DataColumn<any> | undefined
  /**
   * Border around the table
   */
  border?: boolean
  /**
   * No Results text
   */
  noResultsText?: string
  /**
   * Additional data or method needed for the table
   */
  meta?: TableMeta<any>
  /**
   * Component will render loader skeleton if `true`. Should be provided from `useQuery` from [Tanstack Query](https://tanstack.com/query/v4/docs/framework/react/reference/useQuery)
   */
  isFetching?: boolean
  /**
   * You have to define TableCell in your column for more complex use cases
   */
  isCustomCell?: boolean
}) {
  const table = useReactTable({
    data: data || [],
    columns,
    defaultColumn,
    meta,
    getCoreRowModel: getCoreRowModel(),
  })

  const renderHeaders = React.useCallback(
    () =>
      table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <TableHead
              className={header.id === "action" ? "text-right" : ""}
              key={header.id}
            >
              {header.isPlaceholder
                ? null
                : flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
            </TableHead>
          ))}
        </TableRow>
      )),
    [table]
  )

  if (isFetching) {
    return (
      <div className="flex w-full flex-col gap-2">
        <Skeleton className="h-7 w-full" />
        <Skeleton className="h-7 w-3/4" />
        <Skeleton className="h-7 w-1/2" />
      </div>
    )
  }

  // Did not use `useReactTable` properties as it is broken
  return (
    <div className="w-full">
      <div className={cn("mb-2 rounded-lg", border && "border")}>
        <Table>
          <TableHeader>{renderHeaders()}</TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => {
                    const render = flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )

                    return isCustomCell ? (
                      render
                    ) : (
                      <TableCell
                        className={cn(
                          cell.column.id === "actions" &&
                          "flex flex-row-reverse"
                        )}
                        key={cell.id}
                      >
                        {render}
                      </TableCell>
                    )
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  {noResultsText}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
