import { cn } from "@/shared/utils/cn";
import type { Task } from "@/entities/task/model/types";
import TaskCard from "@/entities/task/ui/TaskCard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";
import { EditTaskAction } from "@/features/edit-task";
import { DeleteTask } from "@/features/delete-task";

function TasksList({ tasks }: { tasks: Task[] }) {
  const sortedTasks = [...tasks].sort((a, b) => a.position - b.position);

  return (
    <div
      className={cn(
        "flex flex-col gap-4 overflow-y-auto mx-4 mb-4 h-full pr-2",
        "[&::-webkit-scrollbar]:w-1",
        "[&::-webkit-scrollbar-thumb]:bg-gray-300",
        "[&::-webkit-scrollbar-thumb]:rounded-full",
      )}>
      {sortedTasks.map((task) => (
        <TaskCard
          key={task.id}
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

                <DeleteTask taskId={task.id} />
              </DropdownMenuContent>
            </DropdownMenu>
          }
        />
      ))}
    </div>
  );
}

export default TasksList;
