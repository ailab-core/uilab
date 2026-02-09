"use client"

import {
  Field,
  FieldDescription,
  FieldLabel,
  Textarea
} from "uilab-core"

export function TextareaFieldExample() {
  return (
    <Field>
      <FieldLabel htmlFor="textarea-message">Message</FieldLabel>
      <FieldDescription>Enter your message below.</FieldDescription>
      <Textarea id="textarea-message" placeholder="Type your message here." />
    </Field>
  )
}
