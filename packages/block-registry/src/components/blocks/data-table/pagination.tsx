"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  Pagination,
  PaginationContent,
  PaginationNext,
  PaginationPrevious,
} from "uilab-core"
import type { DataPaginationState, DataTable } from "."

export default React.memo(function TablePagination({
  table,
  state,
  totalText = (total) => `Total of ${total} documents`,
  pageText = (current, total) => `Page ${current}/${total}`,
  rowsText = (rows) => `${rows} rows`,
}: {
  table: DataTable<unknown>
  state: DataPaginationState
  totalText: (total: string | number) => string
  pageText: (current: string | number, total: string | number) => string
  rowsText: (rows: string | number) => string
}) {
  // Tanstack methods are acting weird. I am actively working on it but for now this will do
  const canPreviousPage = React.useCallback(
    (): boolean => state.pageIndex > 0,
    [state]
  )
  const canNextPage = React.useCallback(
    (): boolean => state.pageIndex < table.getPageCount() - 1,
    [state, table]
  )

  return (
    <Pagination>
      <PaginationContent className="w-full justify-between gap-6">
        <p className="text-muted-foreground text-sm">
          {totalText(table.getRowCount() || "")}
        </p>
        <div className="flex justify-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                {rowsText(state.pageSize)}
                <ChevronDownIcon className="stroke-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuRadioGroup
                value={state.pageSize.toString()}
                onValueChange={(value: string) =>
                  table.setPageSize(parseInt(value) || 20)
                }
              >
                <DropdownMenuRadioItem value="10">
                  {rowsText(10)}
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="25">
                  {rowsText(25)}
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="50">
                  {rowsText(50)}
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex items-center justify-center gap-2 text-sm">
            <span>
              {pageText(
                state.pageIndex + 1,
                (table.getPageCount() || "0").toLocaleString()
              )}
            </span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <PaginationPrevious
              onClick={() => table.previousPage()}
              isActive={canPreviousPage()}
            />
            <PaginationNext
              onClick={() => table.nextPage()}
              isActive={canNextPage()}
            />
          </div>
        </div>
      </PaginationContent>
    </Pagination>
  )
})
