import type { Task } from "@/entities/task/model/types";
import { Button } from "@/shared/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui/sheet";
import TasksList from "./TasksList";
import { CreateTaskForm } from "@/features/create-task";
import { useState } from "react";
import { PanelRight, Plus } from "lucide-react";
import { cn } from "@/shared/utils/cn";

interface BacklogInfoProps {
  tasks: Task[];
  isOwner: boolean;
  roomId: string;
}

function BacklogInfo({ tasks, isOwner, roomId }: BacklogInfoProps) {
  const [isCreating, setIsCreating] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleCreatingTask = () => {
    setIsCreating(true);
  };

  const handleSheetChange = (open: boolean) => {
    setIsSheetOpen(open);

    if (!open) {
      setIsCreating(false);
    }
  };

  const cancelCreating = () => {
    setIsCreating(false);
  };

  return (
    <Sheet open={isSheetOpen} onOpenChange={handleSheetChange}>
      <SheetTrigger asChild>
        <Button>
          <PanelRight />

          <span>Backlog</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle className="text-gray-700">Room Backlog</SheetTitle>

          <SheetDescription className="text-gray-500">
            Tasks for the current planning session.
          </SheetDescription>
        </SheetHeader>

        {tasks.length === 0 ? (
          <div
            className={cn(
              "empty-rooms flex flex-col items-center justify-center text-center h-full",
              "border-2 border-dashed rounded-2xl bg-gray-50/50 mx-4 mb-4 p-4 text-gray-600",
            )}>
            {isOwner
              ? "No tasks yet. Create one!"
              : "No tasks yet. Waiting for the moderator to create one..."}
          </div>
        ) : (
          <TasksList tasks={tasks} isOwner={isOwner} roomId={roomId} />
        )}

        {isOwner && (
          <SheetFooter className="pt-0 border-t border-gray-100">
            {isCreating ? (
              <CreateTaskForm
                cancelCreating={cancelCreating}
                position={tasks.length}
                roomId={roomId}
              />
            ) : (
              <Button onClick={handleCreatingTask} className="mt-4">
                <Plus />
                Create Task
              </Button>
            )}
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}

export default BacklogInfo;
