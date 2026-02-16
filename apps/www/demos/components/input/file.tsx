"use client"

import {
  Field,
  FieldDescription,
  FieldLabel,
  Input
} from "uilab-core"

export function InputFileExample() {
  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="picture">Picture</FieldLabel>
      <Input id="picture" type="file" />
      <FieldDescription>Select a picture to upload.</FieldDescription>
    </Field>
  )
}
