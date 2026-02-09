"use client"

import { Slider } from "uilab-core"

export function SliderPreview() {
  return (
    <Slider
      defaultValue={[75]}
      max={100}
      step={1}
      className="mx-auto w-full max-w-xs"
    />
  )
}
