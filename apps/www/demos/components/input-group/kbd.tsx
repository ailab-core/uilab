"use client"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  Kbd
} from "uilab-core"
import { SearchIcon } from "lucide-react"

export function InputGroupKbdExample() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon>
        <SearchIcon className="text-muted-foreground" />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <Kbd>⌘K</Kbd>
      </InputGroupAddon>
    </InputGroup>
  )
}
