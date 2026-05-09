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
import { useState } from "react";
import SelectTask from "@/features/select-task/ui/SelectTask";
import { useRoomById } from "@/entities/room/model/useRoomById";

function TasksList({
  tasks,
  isOwner,
  roomId,
}: {
  tasks: Task[];
  isOwner: boolean;
  roomId: string;
}) {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const { data } = useRoomById(roomId);

  const currentTaskId = data?.room.current_task_id;

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
          className={cn(task.id === currentTaskId && "bg-sky-50/80")}
          statusClassName={cn(task.id === currentTaskId && "bg-white")}
          actionsToRender={
            <DropdownMenu
              open={openMenuId === task.id}
              onOpenChange={(open) => setOpenMenuId(open ? task.id : null)}>
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
                <EditTaskAction
                  task={task}
                  closeMenu={() => setOpenMenuId(null)}
                />

                <DropdownMenuSeparator />

                <DeleteTask
                  taskId={task.id}
                  closeMenu={() => setOpenMenuId(null)}
                />
              </DropdownMenuContent>
            </DropdownMenu>
          }
          footerActions={
            <SelectTask
              isOwner={isOwner}
              roomId={roomId}
              taskId={task.id}
              isActive={task.id === currentTaskId}
            />
          }
        />
      ))}
    </div>
  );
}

export default TasksList;
