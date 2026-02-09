"use client"

import {
  Field,
  FieldDescription,
  FieldLabel,
  Input
} from "uilab-core"

export function InputRequiredExample() {
  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="input-required">
        Required Field <span className="text-destructive">*</span>
      </FieldLabel>
      <Input
        id="input-required"
        placeholder="This field is required"
        required
      />
      <FieldDescription>This field must be filled out.</FieldDescription>
    </Field>
  )
}
