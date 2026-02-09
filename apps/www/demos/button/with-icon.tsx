"use client"

import { Button } from "uilab-core"
import { GitBranchIcon, GitForkIcon } from "lucide-react"

export function ButtonWithIconExample() {
  return (
    <div className="flex gap-2">
      <Button variant="outline">
        <GitBranchIcon data-icon="inline-start" /> New Branch
      </Button>
      <Button variant="outline">
        Fork
        <GitForkIcon data-icon="inline-end" />
      </Button>
    </div>
  )
}
