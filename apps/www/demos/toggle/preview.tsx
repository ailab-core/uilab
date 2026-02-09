"use client"

import { Toggle } from "uilab-core"
import { BookmarkIcon } from "lucide-react"

export function TogglePreview() {
  return (
    <Toggle aria-label="Toggle bookmark" size="sm" variant="outline">
      <BookmarkIcon className="group-aria-pressed/toggle:fill-foreground" />
      Bookmark
    </Toggle>
  )
}
