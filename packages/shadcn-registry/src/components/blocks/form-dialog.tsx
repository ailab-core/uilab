"use client"

import * as React from "react"
import { LoaderCircleIcon } from "lucide-react"
import { useFormContext } from "react-hook-form"
import { useConfirmation } from "@/components/blocks/confirmation"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function FormDialog({
  title = "",
  description = "",
  trigger,
  className,
  children,
  open: propOpen = false,
  setOpen: propSetOpen,
  isPending = false,
  shouldConfirmDiscard = true,
  discardTitle = "Discard",
  discardDescription = "Are you sure you want to discard? Your changes will not be saved!",
  discardCancelText = "Cancel",
  discardConfirmText = "Discard",
  cancelText = "Cancel",
  confirmText = "Confirm",
  onSubmit,
}: {
  /** Display title on sheet header */
  title: string
  /** Display description on sheet header */
  description?: string
  /** JSX Element (preferable with forwardRef command) for opening the sheet */
  trigger?: React.ReactNode
  open?: boolean
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
  className?: string
  children: any
  isPending?: boolean
  /** Shows a dialog when clicked out confirming the user to discard */
  shouldConfirmDiscard?: boolean
  /** Discard confirmation's dialog title */
  discardTitle?: string
  /** Discard confirmation's description title */
  discardDescription?: string
  /** Discard confirmation's cancel text */
  discardCancelText?: string
  /** Discard confirmation's confirm text */
  discardConfirmText?: string
  cancelText?: string
  confirmText?: string
  /**
   * This prop should be async function for ease of handling success and error.
   * Component uses [@tanstack/react-query](https://tanstack.com/query/latest) so you don't have to pass down additional `useMutation` methods
   */
  onSubmit?: (values: any) => Promise<void>
}) {
  const form = useFormContext()
  const [open, setOpen] = React.useState<boolean>(propOpen)
  const { showDialog } = useConfirmation()

  const toggleSheet = React.useCallback(
    (open: boolean) => {
      setOpen(open)
      form.reset()
      form.clearErrors()
    },
    [form, setOpen]
  )

  const handleOnChange = React.useCallback(
    (isOpen: boolean) => {
      if (Object.keys(form.formState.dirtyFields).length !== 0 && open) {
        if (shouldConfirmDiscard) {
          showDialog({
            title: discardTitle,
            description: discardDescription,
            confirmText: discardConfirmText,
            cancelText: discardCancelText,
            onConfirm: () => toggleSheet(isOpen),
          })
        } else {
          toggleSheet(isOpen)
        }
      } else {
        toggleSheet(isOpen)
      }
    },
    [form, open, showDialog, toggleSheet, shouldConfirmDiscard]
  )

  const handleSubmit = async (values: any) => {
    if (onSubmit) {
      await onSubmit(values).then(() => toggleSheet(false))
    }
  }

  React.useEffect(() => propSetOpen && propSetOpen(open), [propSetOpen, open])
  React.useEffect(() => setOpen(propOpen), [propOpen])

  return (
    <Dialog open={open} onOpenChange={handleOnChange}>
      {trigger}
      <DialogContent className={className}>
        <DialogHeader>
          <DialogTitle> {title} </DialogTitle>
          <DialogDescription> {description} </DialogDescription>
        </DialogHeader>
        <form className="space-y-4" onSubmit={form.handleSubmit(handleSubmit)}>
          {children}
          <button type="submit" className="hidden" />
        </form>
        <DialogFooter>
          <Button
            variant="outline"
            type="button"
            disabled={isPending}
            onClick={(event) => {
              event.preventDefault()
              handleOnChange(false)
            }}
          >
            {cancelText}
          </Button>
          <Button
            type="button"
            disabled={isPending}
            onClick={form.handleSubmit(handleSubmit)}
          >
            {isPending && <LoaderCircleIcon className="animate-spin" />}
            {confirmText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
