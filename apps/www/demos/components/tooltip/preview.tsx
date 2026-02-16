"use client"

import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "uilab-core"

export function TooltipPreview() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline">Hover</Button>} />
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  )
}
