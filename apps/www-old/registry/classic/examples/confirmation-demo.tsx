import { Button } from "uilab-core";
import {
  ConfirmationProvider,
  useConfirmation,
} from "@/registry/classic/blocks/confirmation";

function ConfirmationButton() {
  const { showDialog } = useConfirmation();

  return (
    <Button
      onClick={() =>
        showDialog({
          title: "Delete Item",
          description:
            "Are you sure you want to delete this item? This action cannot be undone.",
          confirmText: "Delete",
          cancelText: "Cancel",
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

export default function ConfirmationDemo() {
  return (
    <ConfirmationProvider>
      <ConfirmationButton />
    </ConfirmationProvider>
  );
}
