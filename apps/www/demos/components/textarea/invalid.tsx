"use client"

import {
  Field,
  FieldDescription,
  FieldLabel,
  Textarea
} from "uilab-core"

export function TextareaInvalidExample() {
  return (
    <Field data-invalid>
      <FieldLabel htmlFor="textarea-invalid">Message</FieldLabel>
      <Textarea
        id="textarea-invalid"
        placeholder="Type your message here."
        aria-invalid
      />
      <FieldDescription>Please enter a valid message.</FieldDescription>
    </Field>
  )
}
