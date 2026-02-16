"use client"

import * as React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogAction,
} from "uilab-core";

export type ContextType = {
  showDialog: (options: ConfirmationOptions) => void;
  hideDialog: () => void;
};

export type ConfirmationOptions = {
  title: string;
  description: string;
  variant?: "default" | "destructive"
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
      variant: "default",
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
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{dialogOptions.title}</AlertDialogTitle>
            <AlertDialogDescription>{dialogOptions.description}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel variant="outline" onClick={handleCancel}>
              {dialogOptions.cancelText || "Cancel"}
            </AlertDialogCancel>
            <AlertDialogAction variant={dialogOptions.variant} onClick={handleConfirm}>
              {dialogOptions.confirmText || "Confirm"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </ConfirmationContext.Provider>
  );
}
