"use client"

import {
  Button,
  ButtonGroup,
  Field,
  FieldLabel,
  Input
} from "uilab-core"

export function InputButtonGroupExample() {
  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="input-button-group">Search</FieldLabel>
      <ButtonGroup>
        <Input id="input-button-group" placeholder="Type to search..." />
        <Button variant="outline">Search</Button>
      </ButtonGroup>
    </Field>
  )
}
