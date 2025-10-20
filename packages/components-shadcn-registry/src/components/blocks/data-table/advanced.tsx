"use client"

import * as React from "react"
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import type { PaginationOptions, TableMeta } from "@tanstack/react-table"
import { RefreshCcwIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import type { DataColumn, DataPaginationState } from "."
import Pagination from "./pagination"

/**
 * Advanced data tables that needs complex features such as Pagination, Filters, Column Hiding etc
 */
export function AdvancedDataTable({
  data,
  columns,
  defaultColumn,
  isFetching,
  isCustomCell,
  pagination,
  paginationOptions = {},
  refreshText = "Refresh",
  noResultsText = "No results",
  leftHeader,
  rightHeader,
  border = true,
  meta,
  refetch,
}: {
  /**
   * Made to be fit with Pocket Pageable content response.
   */
  data: unknown[]
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
   * Component will render loader skeleton if `true`. Should be provided from `useQuery` from [Tanstack Query](https://tanstack.com/query/v4/docs/framework/react/reference/useQuery)
   */
  isFetching: boolean
  /**
   * You have to define TableCell in your column for more complex use cases
   */
  isCustomCell?: boolean
  /**
   * State of pagination to keep track. On tanstack table, `manualPagination` is `true`, so you can update the state whenever you call an api.
   */
  pagination?: DataPaginationState
  /**
   * Necessary for rendering `Pagination` component to keep track.
   */
  paginationOptions?: Pick<
    PaginationOptions,
    "onPaginationChange" | "rowCount" | "pageCount"
  >
  /**
   * Refresh button text
   */
  refreshText?: string
  /**
   * No results text
   */
  noResultsText?: string
  /**
   * Element provided will be attached to the header's left side
   */
  leftHeader?: React.ReactNode
  /**
   * Element provided will be attached to the header's right side
   */
  rightHeader?: React.ReactNode
  /**
   * Additional data or method needed for the table
   */
  meta?: TableMeta<any>
  /**
   * Border around the table
   */
  border?: boolean
  /**
   * Optional if you want an action button that needs to reload api calls.
   * Requires `isFetching` field and `refetch` function
   * QOL component
   */
  refetch?: () => void
}) {
  const table = useReactTable({
    data: data || [],
    columns,
    defaultColumn,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    ...paginationOptions,
    initialState: { pagination },
    meta,
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

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          {leftHeader && leftHeader}
        </div>
        <div className="flex items-center justify-end gap-2">
          {rightHeader && rightHeader}
          {refetch && (
            <Button variant="outline" onClick={refetch} disabled={isFetching}>
              <RefreshCcwIcon /> {refreshText}
            </Button>
          )}
        </div>
      </div>
      {isFetching ? (
        <div className="flex w-full flex-col gap-2">
          <Skeleton className="h-7 w-full" />
          <Skeleton className="h-7 w-3/4" />
          <Skeleton className="h-7 w-1/2" />
        </div>
      ) : (
        <>
          <div className={cn("rounded-lg", border && "border")}>
            <Table>
              <TableHeader>{renderHeaders()}</TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      className={cn(
                        row.id === "actions" && "flex flex-row-reverse"
                      )}
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
          {pagination && <Pagination table={table} state={pagination} />}
        </>
      )}
    </div>
  )
}
