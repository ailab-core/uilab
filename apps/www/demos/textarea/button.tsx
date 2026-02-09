"use client"

import { Button, Textarea } from "uilab-core"

export function TextareaButtonExample() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  )
}
