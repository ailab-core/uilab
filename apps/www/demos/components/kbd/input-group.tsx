"use client"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  Kbd
} from "uilab-core"
import { SearchIcon } from "lucide-react"

export function KbdInputGroupExample() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-6">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
