"use client"

import {
  Badge,
  Field,
  FieldLabel,
  Input
} from "uilab-core"

export function InputBadgeExample() {
  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="input-badge">
        Webhook URL{" "}
        <Badge variant="secondary" className="ml-auto">
          Beta
        </Badge>
      </FieldLabel>
      <Input
        id="input-badge"
        type="url"
        placeholder="https://api.example.com/webhook"
      />
    </Field>
  )
}
