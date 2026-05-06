import { DropdownMenuItem } from "@/shared/ui/dropdown-menu";
import { Pencil } from "lucide-react";

export const EditTaskAction = ({ id }: { id: string }) => {
  const handleEdit = () => console.log("Edit", id);

  return (
    <DropdownMenuItem onClick={handleEdit} className="gap-2 cursor-pointer">
      <Pencil className="size-4" />

      <span>Edit</span>
    </DropdownMenuItem>
  );
};
