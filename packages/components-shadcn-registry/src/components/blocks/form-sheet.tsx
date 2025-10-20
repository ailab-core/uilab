import * as React from "react"
import { LoaderCircleIcon } from "lucide-react"
import { useFormContext } from "react-hook-form"
import { useConfirmation } from "@/components/blocks/confirmation"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

/**
 * Sheet boilerplate for forms.
 * It has confirmation dialog and everything you need in one component
 */
export function FormSheet({
  title,
  description = "",
  trigger,
  className,
  children,
  open: propOpen = false,
  setOpen: propSetOpen,
  isPending = false,
  onSubmit,
}: {
  /**
   * Display title on sheet header
   */
  title: string
  /**
   * Display description on sheet header
   */
  description?: string
  /**
   * JSX Element (preferable with forwardRef command) for opening the sheet
   */
  trigger?: React.ReactNode
  open?: boolean
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
  className?: string
  children: any
  isPending?: boolean
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
        showDialog({
          title: t("messages:discard.title"),
          description: t("messages:discard.description"),
          confirmText: t("messages:discard.confirmText"),
          onConfirm: () => toggleSheet(isOpen),
        })
      } else {
        toggleSheet(isOpen)
      }
    },
    [t, form, open, showDialog, toggleSheet]
  )

  const handleSubmit = async (values: any) => {
    if (onSubmit) {
      await onSubmit(values).then(() => toggleSheet(false))
    }
  }

  useEffect(() => propSetOpen && propSetOpen(open), [propSetOpen, open])
  useEffect(() => setOpen(propOpen), [propOpen])

  return (
    <Sheet open={open} onOpenChange={handleOnChange}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent side="right" className={className}>
        <SheetHeader>
          <SheetTitle> {title} </SheetTitle>
          <SheetDescription> {description} </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-4 overflow-y-auto px-4">
          {children}
        </div>
        <SheetFooter>
          <Button
            type="button"
            disabled={isPending}
            onClick={form.handleSubmit(handleSubmit)}
          >
            {isPending && <LoaderCircleIcon className="animate-spin" />}
            {t("save")}
          </Button>
          <Button
            variant="outline"
            type="button"
            disabled={isPending}
            onClick={(event) => {
              event.preventDefault()
              handleOnChange(false)
            }}
          >
            {t("cancel")}
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
