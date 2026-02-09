"use client"

import {
  Field,
  FieldDescription,
  FieldLabel,
  Input
} from "uilab-core"

export function InputDisabledExample() {
  return (
    <Field className="w-full max-w-sm" data-disabled>
      <FieldLabel htmlFor="input-demo-disabled">Email</FieldLabel>
      <Input
        id="input-demo-disabled"
        type="email"
        placeholder="Email"
        disabled
      />
      <FieldDescription>This field is currently disabled.</FieldDescription>
    </Field>
  )
}

