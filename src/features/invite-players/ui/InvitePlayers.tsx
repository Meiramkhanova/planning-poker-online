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
import { copyToClipboard } from "@/shared/utils/copyToClipboard";
import { getInviteUrl } from "@/shared/utils/getInviteUrl";
import { useState } from "react";

export const InvitePlayers = ({ inviteLink }: { inviteLink: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const url = getInviteUrl(inviteLink);

  const handleCopy = async () => {
    const success = await copyToClipboard(url);
    if (success) setIsOpen(false);
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

          <Input id="link" defaultValue={url} readOnly className="h-10" />

          <Button onClick={handleCopy}>Copy invitaton link</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
