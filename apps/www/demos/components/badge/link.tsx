"use client"

import { Badge } from "uilab-core"
import { ArrowUpRightIcon } from "lucide-react"

export function BadgeLinkExample() {
  return (
    <Badge render={<a href="#link">Open Link <ArrowUpRightIcon data-icon="inline-end" /></a>} />
  )
}
