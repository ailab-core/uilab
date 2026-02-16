"use client"

import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "uilab-core"

export function TooltipSidesExample() {
  return (
    <div className="flex flex-wrap gap-2">
      {(["left", "top", "bottom", "right"] as const).map((side) => (
        <Tooltip key={side}>
          <TooltipTrigger render={<Button variant="outline" className="w-fit capitalize">{side}</Button>} />
          <TooltipContent side={side}>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}
