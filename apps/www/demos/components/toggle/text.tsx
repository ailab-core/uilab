"use client"

import { Toggle } from "uilab-core"
import { ItalicIcon } from "lucide-react"

export function ToggleTextExample() {
  return (
    <Toggle aria-label="Toggle italic">
      <ItalicIcon />
      Italic
    </Toggle>
  )
}
