"use client"

import { Alert, AlertDescription, AlertTitle } from "uilab-core"
import { AlertCircleIcon } from "lucide-react"

export function AlertDestructiveExample() {
  return (
    <Alert variant="destructive" className="max-w-md">
      <AlertCircleIcon />
      <AlertTitle>Payment failed</AlertTitle>
      <AlertDescription>
        Your payment could not be processed. Please check your payment method
        and try again.
      </AlertDescription>
    </Alert>
  )
}
