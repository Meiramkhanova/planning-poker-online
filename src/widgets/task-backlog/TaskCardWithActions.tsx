import type { Task } from "@/entities/task/model/types";
import TaskCard from "@/entities/task/ui/TaskCard";
import { DeleteTaskAction } from "@/features/delete-task";
import { EditTaskAction } from "@/features/edit-task";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { cn } from "@/shared/utils/cn";
import { Ellipsis } from "lucide-react";

function TaskCardWithActions({ task }: { task: Task }) {
  return (
    <TaskCard
      task={task}
      actionsToRender={
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div
              className={cn(
                "size-10 rounded-full hover:bg-gray-100 flex items-center justify-center",
                "transition-all duration-300",
              )}>
              <Ellipsis className="size-5 text-gray-600" />
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <EditTaskAction id={task.id} />

            <DropdownMenuSeparator />

            <DeleteTaskAction id={task.id} />
          </DropdownMenuContent>
        </DropdownMenu>
      }
    />
  );
}

export default TaskCardWithActions;
