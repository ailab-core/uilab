"use client"
import { Marker, MarkerContent, MarkerIcon } from "uilab-core"
import { Clock } from "lucide-react"

export function MarkerPreview() {
  return (
    <Marker>
      <MarkerIcon>
        <Clock />
      </MarkerIcon>
      <MarkerContent>10:30 AM</MarkerContent>
    </Marker>
  )
}
