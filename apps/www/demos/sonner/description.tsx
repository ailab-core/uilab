"use client"

import { Button } from "uilab-core"
import { toast } from "sonner"

export function SonnerDescriptionExample() {
  return (
    <Button
      onClick={() =>
        toast("Event has been created", {
          description: "Monday, January 3rd at 6:00pm",
        })
      }
      variant="outline"
      className="w-fit"
    >
      Show Toast
    </Button>
  )
}
