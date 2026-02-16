import * as React from "react"
import { DataGrid as ReactDataGrid } from "react-data-grid"
import {
  Button,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyTitle,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Skeleton,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  cn,
} from "uilab-core"
import type { DataGridProps as ReactDataGridProps } from "react-data-grid"

export type DataGridProps = {
  /** Loading state */
  isLoading?: boolean
  /** Description to show when there is no data */
  emptyDescription?: string
} & ReactDataGridProps<any, any, any>

export function DataGrid({
  isLoading,
  emptyDescription,
  ...props
}: DataGridProps) {
  if (isLoading)
    return (
      <div className="flex h-full w-full flex-col gap-2 border-t p-2">
        <Skeleton className="h-7 w-full" />
        <Skeleton className="h-7 w-3/4" />
        <Skeleton className="h-7 w-1/2" />
      </div>
    )

  return (
    <ReactDataGrid
      rowHeight={32}
      headerRowHeight={32}
      headerRowClass="text-xs"
      defaultColumnOptions={{ resizable: true }}
      rowClass={() => cn("text-xs cursor-pointer")}
      {...props}
      renderers={{
        noRowsFallback: (
          <div className="absolute top-20 flex w-full flex-col items-center justify-center">
            <Empty className="">
              <EmptyContent>
                <EmptyTitle>{"No results"}</EmptyTitle>
                {emptyDescription && (
                  <EmptyDescription> {emptyDescription} </EmptyDescription>
                )}
              </EmptyContent>
            </Empty>
          </div>
        ),
        ...props.renderers,
      }}
    />
  )
}

