import * as React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "uilab-core";

export type ContextType = {
  showDialog: (options: ConfirmationOptions) => void;
  hideDialog: () => void;
};

export type ConfirmationOptions = {
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
};

export const ConfirmationContext = React.createContext<ContextType>(
  {} as ContextType,
);

export const useConfirmation = () => {
  const context = React.useContext(ConfirmationContext);
  if (!context) {
    throw new Error(
      "useConfirmation must be used within a ConfirmationProvider",
    );
  }
  return context;
};

export function ConfirmationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  const [dialogOptions, setDialogOptions] = React.useState<ConfirmationOptions>(
    {
      title: "",
      description: "",
    },
  );

  const showDialog = React.useCallback((options: ConfirmationOptions) => {
    setDialogOptions(options);
    setOpen(true);
  }, []);

  const hideDialog = React.useCallback(() => setOpen(false), []);

  const handleConfirm = () => {
    dialogOptions.onConfirm?.();
    hideDialog();
  };

  const handleCancel = () => {
    dialogOptions.onCancel?.();
    hideDialog();
  };

  return (
    <ConfirmationContext.Provider value={{ showDialog, hideDialog }}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{dialogOptions.title}</DialogTitle>
            <DialogDescription>{dialogOptions.description}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={handleCancel}>
              {dialogOptions.cancelText || "Cancel"}
            </Button>
            <Button onClick={handleConfirm}>
              {dialogOptions.confirmText || "Confirm"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </ConfirmationContext.Provider>
  );
}
