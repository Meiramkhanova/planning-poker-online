import { Button } from "@/shared/ui/button";
import { Loader2, Plus } from "lucide-react";
import { useCreateLink } from "../model/useCreateLink";
import { toast } from "sonner";

function CreateInvite({ roomId }: { roomId: string }) {
  const { mutate, isPending } = useCreateLink(roomId);

  const handleCreateLink = () => {
    mutate(
      { expires_in_hours: 72 },
      {
        onSuccess: () => {
          toast.success("Created a new invitation link");
        },

        onError: (error) => {
          console.error("Error creating a new invitation link", error);
          toast.error("Failed to create invitation link");
        },
      },
    );
  };

  return (
    <Button onClick={handleCreateLink}>
      {isPending ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Plus className="h-4 w-4" />
      )}

      <span>{isPending ? "Creating..." : "New Link"}</span>
    </Button>
  );
}

export default CreateInvite;
