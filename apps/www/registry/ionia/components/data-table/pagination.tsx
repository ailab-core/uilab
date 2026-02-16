import { memo, useCallback } from "react"
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react"
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  Pagination,
  PaginationContent,
} from "uilab-core"
import type { PaginationState, Table } from "@tanstack/react-table"

export default memo(function TablePagination({
  table,
  state,
}: {
  table: Table<unknown>
  state: PaginationState
}) {
  // Tanstack methods are acting weird. I am actively working on it but for now this will do
  const canGoToPreviousPage = useCallback(
    (): boolean => state.pageIndex > 0,
    [state],
  )
  const canGoToNextPage = useCallback(
    (): boolean => state.pageIndex < table.getPageCount() - 1,
    [state, table],
  )
  const canGoToFirstPage = useCallback(
    (): boolean => state.pageIndex > 0,
    [state],
  )
  const canGoToLastPage = useCallback(
    (): boolean => state.pageIndex < table.getPageCount() - 1,
    [state, table],
  )

  return (
    <Pagination>
      <PaginationContent className="flex w-full items-center gap-6">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => table.setPageIndex(0)}
            disabled={!canGoToFirstPage()}
            aria-label="Go to first page"
          >
            <ChevronsLeftIcon />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => table.previousPage()}
            disabled={!canGoToPreviousPage()}
            aria-label="Go to previous page"
          >
            <ChevronLeftIcon />
          </Button>
          <p className="text-muted-foreground text-xs">
            {`Page ${state.pageIndex + 1} / ${(table.getPageCount() || "0").toLocaleString()}`}
          </p>
          <Button
            variant="outline"
            size="icon"
            onClick={() => table.nextPage()}
            disabled={!canGoToNextPage()}
            aria-label="Go to next page"
          >
            <ChevronRightIcon />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!canGoToLastPage()}
            aria-label="Go to last page"
          >
            <ChevronsRightIcon />
          </Button>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger render={
            <Button variant="outline">
              {state.pageSize} rows
              <ChevronDownIcon className="stroke-muted-foreground" />
            </Button>
          } />
          <DropdownMenuContent>
            <DropdownMenuRadioGroup
              value={state.pageSize.toString()}
              onValueChange={(value: string) =>
                table.setPageSize(parseInt(value) || 20)
              }
            >
              <DropdownMenuRadioItem value="20">
                20 rows
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="35">
                35 rows
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="50">
                50 rows
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <p className="text-muted-foreground text-xs">
          {`Total ${(table.getRowCount() || "").toLocaleString()} documents`}
        </p>
      </PaginationContent>
    </Pagination>
  )
})

