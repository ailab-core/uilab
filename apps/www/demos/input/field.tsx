"use client"

import {
  Field,
  FieldDescription,
  FieldLabel,
  Input
} from "uilab-core"

export function InputFieldExample() {
  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="input-field-username">Username</FieldLabel>
      <Input
        id="input-field-username"
        type="text"
        placeholder="Enter your username"
      />
      <FieldDescription>
        Choose a unique username for your account.
      </FieldDescription>
    </Field>
  )
}
