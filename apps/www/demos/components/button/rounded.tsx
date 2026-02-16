"use client"

import { Button } from "uilab-core"
import { ArrowUpIcon } from "lucide-react"

export function ButtonRoundedExample() {
  return (
    <div className="flex gap-2">
      <Button className="rounded-full">Get Started</Button>
      <Button variant="outline" size="icon" className="rounded-full">
        <ArrowUpIcon />
      </Button>
    </div>
  )
}
