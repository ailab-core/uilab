"use client"

import { Checkbox, Label } from "uilab-core"

export function LabelPreview() {
  return (
    <div className="flex gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  )
}
