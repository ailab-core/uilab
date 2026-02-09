"use client"

import { Field, FieldLabel, Textarea } from "uilab-core"

export function TextareaDisabledExample() {
  return (
    <Field data-disabled>
      <FieldLabel htmlFor="textarea-disabled">Message</FieldLabel>
      <Textarea
        id="textarea-disabled"
        placeholder="Type your message here."
        disabled
      />
    </Field>
  )
}
