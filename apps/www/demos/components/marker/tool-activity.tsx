"use client"
import { Marker, MarkerIcon, MarkerContent } from "uilab-core"
import { SearchIcon } from "lucide-react"

export function MarkerToolActivityExample() {
  return (
    <Marker variant="separator">
      <MarkerIcon>
        <SearchIcon />
      </MarkerIcon>
      <MarkerContent>Explored 4 files</MarkerContent>
    </Marker>
  )
}