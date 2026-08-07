"use client"
import { Marker, MarkerIcon, MarkerContent } from "uilab-core"
import { LoaderCircleIcon } from "lucide-react"

export function MarkerLoadingExample() {
  return (
    <Marker>
      <MarkerIcon>
        <LoaderCircleIcon className="animate-spin" />
      </MarkerIcon>
      <MarkerContent>Thinking...</MarkerContent>
    </Marker>
  )
}