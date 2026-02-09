"use client"

import { Alert, AlertDescription, AlertTitle } from "uilab-core"
import { InfoIcon } from "lucide-react"

export function AlertBasicExample() {
  return (
    <Alert className="max-w-md">
      <InfoIcon />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components and dependencies to your app using the cli.
      </AlertDescription>
    </Alert>
  )
}
