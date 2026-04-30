import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { useState } from "react";
import { toast } from "sonner";

function CopyInvite({ invite_link }: { invite_link: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const links = invite_link.split(",");
  const inviteUrl =
    links.find((link) => link.includes("http://localhost:5173")) || links[0];

  const handleCopyInvite = async () => {
    try {
      await navigator.clipboard.writeText(inviteUrl);

      toast.success("Link copied to clipboard");

      setIsOpen(false);
    } catch (err) {
      toast.error("Failed to copy link");
      console.error("err", err);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <span>Invite Players</span>
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-gray-700">Invite Players</DialogTitle>

          <DialogDescription>
            Anyone with this link will be able to join your room.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <Label htmlFor="link" className="sr-only">
            Ссылка
          </Label>

          <Input id="link" defaultValue={inviteUrl} readOnly className="h-10" />

          <Button onClick={handleCopyInvite}>Copy invitaton link</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CopyInvite;
