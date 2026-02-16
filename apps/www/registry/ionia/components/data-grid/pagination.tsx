import * as React from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react"
import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "uilab-core"

// You can change this however you want
const PAGINATION_DEFAULT_PAGE_SIZE = 20
const PAGINATION_PAGE_SIZES = [20, 35, 50]

export type DataGridPagination = {
  /** Current filters including pagination info */
  filters: any
  /** Function to update filters including pagination info */
  setFilters: (filters: any) => Promise<void>
  /** Pagination state */
  state: { pageIndex: number; pageSize: number }
  /** Loading state */
  isLoading?: boolean
  /** Total number of pages */
  totalPages?: number
  /** Display total entries */
  totalElements?: number
}

export function DataGridPagination({
  filters,
  setFilters,
  state,
  isLoading,
  totalPages = 1,
  totalElements = 0,
}: DataGridPagination) {
  const canGoPrev = state.pageIndex <= 0
  const canGoNext = state.pageIndex + 1 >= totalPages
  const [currentPage, setCurrentPage] = React.useState(state.pageIndex)

  React.useEffect(() => {
    setCurrentPage(state.pageIndex + 1)
  }, [state])

  const handlePageSizeChange = (value: number | null) => {
    setFilters({ ...filters, pageSize: value })
  }

  const handlePageIndexChange = (value: number) => {
    setFilters({ ...filters, pageIndex: value - 1 })
  }

  const handleFirstPage = () => {
    setFilters({ ...filters, pageIndex: 0 })
  }

  const handlePreviousPage = () => {
    setFilters({
      ...filters,
      pageIndex: Math.max((state.pageIndex || 1) - 1, 0),
    })
  }

  const handleNextPage = () => {
    setFilters({
      ...filters,
      pageIndex: Math.min((state.pageIndex || 0) + 1, totalPages),
    })
  }

  const handleLastPage = () => {
    setFilters({ ...filters, pageIndex: totalPages - 1 })
  }

  return (
    <div className="flex items-center gap-6 px-6 py-2">
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={handleFirstPage}
          disabled={canGoPrev}
        >
          <ChevronsLeftIcon />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handlePreviousPage}
          disabled={canGoPrev}
        >
          <ChevronLeftIcon />
        </Button>
        <div className="flex items-center justify-center gap-2 px-2">
          <p className="text-muted-foreground text-xs">
            Page
          </p>
          <Input
            className="w-18"
            type="number"
            value={currentPage}
            onChange={(e) => setCurrentPage(parseInt(e.target.value))}
            onBlur={(e) => handlePageIndexChange(parseInt(e.target.value))}
            min={1}
            max={totalPages}
          />
          <p className="text-muted-foreground text-xs">
            {isLoading ? "/ -" : `/ ${totalPages}`}
          </p>
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={handleNextPage}
          disabled={canGoNext}
        >
          <ChevronRightIcon />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleLastPage}
          disabled={canGoNext}
        >
          <ChevronsRightIcon />
        </Button>
      </div>
      <Select
        value={state.pageSize}
        defaultValue={PAGINATION_DEFAULT_PAGE_SIZE}
        onValueChange={handlePageSizeChange}
      >
        <SelectTrigger className="w-25">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {PAGINATION_PAGE_SIZES.map((size) => (
            <SelectItem value={size}>
              {`${size} rows`}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <p className="text-muted-foreground text-xs">
        {`Total ${totalElements.toLocaleString()} documents`}
      </p>
    </div>
  )
}
