"use client"

import { Button } from "uilab-core";
import { useConfirmation } from "@/registry/ionia/components/confirmation";

export function ConfirmationPreview() {
  const { showDialog } = useConfirmation();

  return (
    <Button
      variant="destructive"
      onClick={() =>
        showDialog({
          title: "Delete Item",
          description:
            "Are you sure you want to delete this item? This action cannot be undone.",
          confirmText: "Delete",
          cancelText: "Cancel",
          variant: "destructive",
          onConfirm: () => {
            alert("Item deleted");
          },
          onCancel: () => {
            alert("Cancelled");
          },
        })
      }
    >
      Delete Item
    </Button>
  );
}
