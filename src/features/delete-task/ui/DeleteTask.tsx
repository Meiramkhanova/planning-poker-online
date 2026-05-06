import { DropdownMenuItem } from "@/shared/ui/dropdown-menu";
import { Trash2 } from "lucide-react";
import { useDeleteTask } from "../model/useDeleteTask";
import { useParams } from "react-router-dom";

export const DeleteTask = ({ taskId }: { taskId: string }) => {
  const { roomId } = useParams<{ roomId: string }>();

  const { mutate, isPending } = useDeleteTask(roomId || "");

  const handleDelete = () => {
    if (confirm("Удалить задачу?")) {
      mutate(taskId);
    }
  };

  return (
    <DropdownMenuItem onClick={handleDelete} className="text-red-600 gap-2">
      <Trash2 className="size-4" />{" "}
      <span>{isPending ? "Deleting..." : "Delete"}</span>
    </DropdownMenuItem>
  );
};
