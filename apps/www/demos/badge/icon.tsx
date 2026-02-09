"use client"

import { Badge } from "uilab-core"
import { BadgeCheck, BookmarkIcon } from "lucide-react"

export function BadgeIconExample() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="secondary">
        <BadgeCheck data-icon="inline-start" />
        Verified
      </Badge>
      <Badge variant="outline">
        Bookmark
        <BookmarkIcon data-icon="inline-end" />
      </Badge>
    </div>
  )
}
