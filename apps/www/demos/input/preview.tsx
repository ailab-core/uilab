"use client"

import {
  Field,
  FieldDescription,
  FieldLabel,
  Input
} from "uilab-core"

export function InputPreview() {
  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="input-demo-api-key">API Key</FieldLabel>
      <Input id="input-demo-api-key" type="password" placeholder="sk-..." />
      <FieldDescription>
        Your API key is encrypted and stored securely.
      </FieldDescription>
    </Field>
  )
}

