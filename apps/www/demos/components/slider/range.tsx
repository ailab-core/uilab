"use client"

import { Slider } from "uilab-core"

export function SliderRangeExample() {
  return (
    <Slider
      defaultValue={[25, 50]}
      max={100}
      step={5}
      className="mx-auto w-full max-w-xs"
    />
  )
}
