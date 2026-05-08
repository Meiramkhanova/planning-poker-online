import { DropdownMenuItem } from "@/shared/ui/dropdown-menu";
import { Trash2 } from "lucide-react";
import { useDeleteTask } from "../model/useDeleteTask";
import { useParams } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { useState } from "react";
import { cn } from "@/shared/utils/cn";
import { Button } from "@/shared/ui/button";

export const DeleteTask = ({
  taskId,
  closeMenu,
}: {
  taskId: string;
  closeMenu: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { roomId } = useParams<{ roomId: string }>();

  const { mutate, isPending } = useDeleteTask(roomId || "");

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      closeMenu();
    }
  };

  const handleDelete = () => {
    mutate(taskId, {
      onSuccess: () => {
        setIsOpen(false);
        closeMenu();
      },
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DropdownMenuItem asChild onSelect={(e) => e.preventDefault()}>
        <DialogTrigger className={cn("w-full")} asChild>
          <div
            className={cn(
              "flex items-center text-red-600 gap-2 cursor-pointer",
              "text-sm hover:bg-gray-100 p-1",
            )}>
            <Trash2 className="size-4" />{" "}
            <span>{isPending ? "Deleting..." : "Delete"}</span>
          </div>
        </DialogTrigger>
      </DropdownMenuItem>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure you want to delete this task?</DialogTitle>

          <DialogDescription>This operation is irreversible.</DialogDescription>
        </DialogHeader>

        <DialogFooter className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button
            variant="outline"
            onClick={() => {
              setIsOpen(false);
              closeMenu();
            }}
            disabled={isPending}>
            Cancel
          </Button>

          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={isPending}>
            {isPending ? "Deleting..." : "Delete issue"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
