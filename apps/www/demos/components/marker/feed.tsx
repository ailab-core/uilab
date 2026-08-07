"use client"
import { Marker, MarkerIcon, MarkerContent } from "uilab-core"
import { GitBranchIcon, LoaderCircleIcon, SearchIcon } from "lucide-react"

export function MarkerFeedExample() {
  return (
    <div className="flex flex-col gap-4">
      <Marker>
        <MarkerIcon>
          <GitBranchIcon />
        </MarkerIcon>
        <MarkerContent>Switched to a new branch</MarkerContent>
      </Marker>

      <Marker>
        <MarkerIcon>
          <LoaderCircleIcon className="animate-spin" />
        </MarkerIcon>
        <MarkerContent className="shimmer">Thinking...</MarkerContent>
      </Marker>

      <Marker variant="separator">
        <MarkerContent>Conversation archived</MarkerContent>
      </Marker>

      <Marker variant="separator">
        <MarkerIcon>
          <SearchIcon />
        </MarkerIcon>
        <MarkerContent>4 files explored</MarkerContent>
      </Marker>
    </div>
  )
}