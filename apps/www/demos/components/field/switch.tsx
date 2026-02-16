"use client"

import { Field, FieldLabel, Switch } from "uilab-core"

export function FieldSwitchExample() {
  return (
    <Field orientation="horizontal" className="w-fit">
      <FieldLabel htmlFor="2fa">Multi-factor authentication</FieldLabel>
      <Switch id="2fa" />
    </Field>
  )
}
