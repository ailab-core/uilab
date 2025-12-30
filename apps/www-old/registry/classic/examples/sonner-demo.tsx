import { Button } from "uilab-core";
import { toast } from "sonner";

export default function SonnerDemo() {
  return (
    <Button
      onClick={() =>
        toast.success("Data saved successfully!", {
          description: "Your changes have been saved to the database.",
          action: {
            label: "Undo",
            onClick: () => alert("Undo"),
          },
        })
      }
    >
      Show Success Toast
    </Button>
  );
}
