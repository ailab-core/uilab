import * as React from "react";
import { useFormContext } from "react-hook-form";
import { LoaderCircleIcon } from "lucide-react";
import {
  Button,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "uilab-core";
import { useConfirmation } from "@/components/blocks/confirmation";

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
  shouldConfirmDiscard = true,
  discardTitle = "Discard",
  discardDescription = "Are you sure you want to discard? Your changes will not be saved!",
  discardCancelText = "Cancel",
  discardConfirmText = "Discard",
  cancelText = "Cancel",
  confirmText = "Confirm",
  onSubmit,
}: {
  /**
   * Display title on sheet header
   */
  title: string;
  /**
   * Display description on sheet header
   */
  description?: string;
  /**
   * JSX Element (preferable with forwardRef command) for opening the sheet
   */
  trigger?: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
  children: any;
  isPending?: boolean;
  /** Shows a dialog when clicked out confirming the user to discard */
  shouldConfirmDiscard?: boolean;
  /** Discard confirmation's dialog title */
  discardTitle?: string;
  /** Discard confirmation's description title */
  discardDescription?: string;
  /** Discard confirmation's cancel text */
  discardCancelText?: string;
  /** Discard confirmation's confirm text */
  discardConfirmText?: string;
  cancelText?: string;
  confirmText?: string;
  /**
   * This prop should be async function for ease of handling success and error.
   * Component uses [@tanstack/react-query](https://tanstack.com/query/latest) so you don't have to pass down additional `useMutation` methods
   */
  onSubmit?: (values: any) => Promise<void>;
}) {
  const form = useFormContext();
  const [open, setOpen] = React.useState<boolean>(propOpen);
  const { showDialog } = useConfirmation();

  const toggleSheet = React.useCallback(
    (open: boolean) => {
      setOpen(open);
      form.reset();
      form.clearErrors();
    },
    [form, setOpen],
  );

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
          });
        } else {
          toggleSheet(isOpen);
        }
      } else {
        toggleSheet(isOpen);
      }
    },
    [form, open, showDialog, toggleSheet, shouldConfirmDiscard],
  );

  const handleSubmit = async (values: any) => {
    if (onSubmit) {
      await onSubmit(values).then(() => toggleSheet(false));
    }
  };

  React.useEffect(() => propSetOpen && propSetOpen(open), [propSetOpen, open]);
  React.useEffect(() => setOpen(propOpen), [propOpen]);

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
            {confirmText}
          </Button>
          <Button
            variant="outline"
            type="button"
            disabled={isPending}
            onClick={(event) => {
              event.preventDefault();
              handleOnChange(false);
            }}
          >
            {cancelText}
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
