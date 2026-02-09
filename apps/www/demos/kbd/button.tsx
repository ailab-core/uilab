"use client"

import { Button, Kbd } from "uilab-core"

export function KbdButtonExample() {
  return (
    <Button variant="outline">
      Accept{" "}
      <Kbd data-icon="inline-end" className="translate-x-0.5">
        ⏎
      </Kbd>
    </Button>
  )
}
