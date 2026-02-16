"use client"

import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "uilab-core"

export function ProgressLabelExample() {
  return (
    <Progress value={56} className="w-full max-w-sm">
      <ProgressLabel>Upload progress</ProgressLabel>
      <ProgressValue />
    </Progress>
  )
}
