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
            console.log("Item deleted");
          },
          onCancel: () => {
            console.log("Cancelled");
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
      <div className="flex gap-4">
        <ConfirmationButton />
      </div>
    </ConfirmationProvider>
  );
}
