"use client"

import {
  Button,
  Kbd,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "uilab-core"
import { SaveIcon } from "lucide-react"

export function TooltipWithKbdExample() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" size="icon-sm"><SaveIcon /></Button>} />
      <TooltipContent className="pr-1.5">
        <div className="flex items-center gap-2">
          Save Changes <Kbd>S</Kbd>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}
