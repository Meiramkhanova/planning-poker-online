import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { taskSchema, type TaskFormValues } from "../model/schema";
import type { Task } from "@/entities/task/model/types";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { cn } from "@/shared/utils/cn";
import { Field, FieldLabel } from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { useEditTask } from "../model/useEditTask";
import { useParams } from "react-router-dom";

export const EditTaskAction = ({ task }: { task: Task }) => {
  const { roomId } = useParams<{ roomId: string }>();
  const [isOpen, setIsOpen] = useState(false);

  const { mutate, isPending } = useEditTask(roomId || "");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormValues>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: task.title,
      description: task.description,
      position: task.position ?? 0,
    },
  });

  const onSubmit = (data: TaskFormValues) => {
    mutate(
      {
        taskId: task.id,
        data,
      },
      { onSuccess: () => setIsOpen(false) },
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className={cn("w-full")} asChild>
        <div
          className={cn(
            "flex items-center gap-2 cursor-pointer",
            "text-sm hover:bg-gray-100 p-1",
          )}>
          <Pencil className="size-4" /> <span>Edit</span>
        </div>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Issue</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Field>
            <FieldLabel htmlFor="title" className="text-gray-700">
              Title
            </FieldLabel>

            <Input id="title" className="py-5 rounded" {...register("title")} />

            {errors.title && (
              <span className="text-red-500 text-xs">
                {errors.title.message}
              </span>
            )}
          </Field>

          <Field>
            <FieldLabel htmlFor="desc" className="text-gray-700">
              Description
            </FieldLabel>

            <Input
              id="desc"
              className="py-5 rounded"
              {...register("description")}
            />
          </Field>

          <DialogFooter className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}>
              Cancel
            </Button>

            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
