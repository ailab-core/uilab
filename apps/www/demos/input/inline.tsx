"use client"

import { Button, Field, Input } from "uilab-core"

export function InputInlineExample() {
  return (
    <Field className="w-full max-w-sm" orientation="horizontal">
      <Input type="search" placeholder="Search..." />
      <Button>Search</Button>
    </Field>
  )
}
