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
import { cn } from "@/shared/utils/cn";
import { PanelRight, Plus } from "lucide-react";
import { useState } from "react";
import TaskCard from "./components/TaskCard";
import { useCreateTask } from "@/features/create-task/model/useCreateTask";
import { useForm } from "react-hook-form";
import {
  createTaskSchema,
  type CreateTaskFormValues,
} from "@/features/create-task/model/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldLabel } from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";

interface BacklogInfoProps {
  sortedTasks: Task[];
  isOwner: boolean;
  roomId: string;
}

function BacklogInfo({ sortedTasks, isOwner, roomId }: BacklogInfoProps) {
  const [isCreating, setIsCreating] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const { mutate: createTask, isPending, error } = useCreateTask(roomId);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTaskFormValues>({
    resolver: zodResolver(createTaskSchema),
    defaultValues: { title: "", description: "", position: sortedTasks.length },
  });

  const handleSheetChange = (open: boolean) => {
    setIsSheetOpen(open);

    if (!open) {
      setIsCreating(false);
      reset();
    }
  };

  const onSubmit = (data: CreateTaskFormValues) => {
    createTask(data, {
      onSuccess: () => {
        setIsCreating(false);
        reset();
      },
    });
  };

  const handleCreatingTask = () => {
    setIsCreating(true);
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

        {sortedTasks.length === 0 ? (
          <div
            className={cn(
              "empty-rooms flex flex-col items-center justify-center text-center h-full",
              "border-2 border-dashed rounded-2xl bg-gray-50/50 mx-4 mb-4 p-4",
            )}>
            <p className="text-gray-600">No tasks yet. Create one!</p>
          </div>
        ) : (
          <div
            className={cn(
              "flex flex-col gap-4 overflow-y-auto mx-4 mb-4 h-full pr-2",
              "[&::-webkit-scrollbar]:w-1",
              "[&::-webkit-scrollbar-thumb]:bg-gray-300",
              "[&::-webkit-scrollbar-thumb]:rounded-full",
            )}>
            {sortedTasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        )}

        <SheetFooter className="pt-0 border-t border-gray-100">
          {isCreating ? (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2 pt-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="inputs flex flex-col gap-2">
                <Field>
                  <FieldLabel htmlFor="task-title" className="text-gray-700">
                    Name
                  </FieldLabel>

                  <Input
                    id="task-title"
                    {...register("title")}
                    type="text"
                    placeholder="What needs to be done?"
                    autoFocus
                    className={cn(
                      "rounded",
                      errors.title &&
                        "border-red-300 focus-visible:ring-red-300 focus-visible:border-red-300",
                    )}
                  />

                  {errors.title && (
                    <span className="text-sm text-red-400">
                      {errors.title.message}
                    </span>
                  )}
                </Field>

                <Field>
                  <FieldLabel htmlFor="task-desc">
                    Description (Optional)
                  </FieldLabel>

                  <Textarea
                    id="task-desc"
                    {...register("description")}
                    placeholder="Add more details..."
                    className={cn(
                      "rounded",
                      errors.description &&
                        "border-red-300 focus-visible:ring-red-300 focus-visible:border-red-300",
                    )}
                  />
                  {errors.description && (
                    <span className="text-sm text-red-400">
                      {errors.description.message}
                    </span>
                  )}
                </Field>

                {error && (
                  <div className="text-sm text-red-400">{error.message}</div>
                )}

                <div className="btns flex items-center gap-4">
                  <Button type="submit" disabled={isPending} className="flex-1">
                    {isPending ? "Creating..." : "Add Task"}
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setIsCreating(false);
                      reset();
                    }}
                    className="flex-1">
                    Cancel
                  </Button>
                </div>
              </div>
            </form>
          ) : (
            isOwner && (
              <Button onClick={handleCreatingTask} className="mt-4">
                <Plus />
                Create Task
              </Button>
            )
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default BacklogInfo;
