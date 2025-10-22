"use client"

import * as React from "react"
import { FilterIcon } from "lucide-react"
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "uilab-core"

export function FilterPopover({
  applied,
  applyText = "Apply",
  clearText = "Clear",
  filterText = "Filter",
  filterAppliedText = (applied: number) => `${applied} filter applied`,
  children,
  onSubmit,
  onReset,
}: {
  /**
   * Number of filters that is currently applied
   * use `calculateAppliedFilters` function for ease of use
   */
  applied?: number
  applyText?: string
  clearText?: string
  filterText?: string
  filterAppliedText?: (applied: number) => string
  children?: React.ReactNode
  onSubmit?: () => Promise<void>
  onReset?: () => any
}) {
  const [open, setOpen] = React.useState<boolean>(false)

  const handleSubmit = () => {
    if (onSubmit) onSubmit()
    setOpen(false)
  }

  const handleClear = () => {
    if (onReset) onReset()
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant={applied !== 0 ? "secondary" : "outline"}>
          <FilterIcon />
          {applied !== 0 ? filterAppliedText(applied) : filterText}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-xs space-y-3">
        <div className="grid w-full grid-cols-1 gap-3">{children}</div>
        <div className="flex flex-row-reverse gap-2">
          <Button type="button" onClick={handleSubmit}>
            {applyText}
          </Button>
          <Button type="button" variant="outline" onClick={handleClear}>
            {clearText}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
