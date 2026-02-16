"use client"

import { Slider } from "uilab-core"

export function SliderMultipleExample() {
  return (
    <Slider
      defaultValue={[10, 20, 70]}
      max={100}
      step={10}
      className="mx-auto w-full max-w-xs"
    />
  )
}
