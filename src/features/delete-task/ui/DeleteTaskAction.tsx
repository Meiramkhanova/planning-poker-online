import { DropdownMenuItem } from "@/shared/ui/dropdown-menu";
import { Trash2 } from "lucide-react";

export const DeleteTaskAction = ({ id }: { id: string }) => {
  const handleDelete = () => console.log("Удаляем", id);
  return (
    <DropdownMenuItem onClick={handleDelete} className="text-red-600 gap-2">
      <Trash2 className="size-4" /> <span>Delete</span>
    </DropdownMenuItem>
  );
};
