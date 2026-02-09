"use client"

import { Button } from "uilab-core"
import { ArrowUpIcon } from "lucide-react"

export function ButtonPreview() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button variant="outline">Button</Button>
      <Button variant="outline" size="icon" aria-label="Submit">
        <ArrowUpIcon />
      </Button>
    </div>
  )
}

