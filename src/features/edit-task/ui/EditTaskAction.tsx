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
import { DropdownMenuItem } from "@/shared/ui/dropdown-menu";

export const EditTaskAction = ({
  task,
  closeMenu,
}: {
  task: Task;
  closeMenu: () => void;
}) => {
  const { roomId } = useParams<{ roomId: string }>();
  const [isOpen, setIsOpen] = useState(false);

  const { mutate, isPending } = useEditTask(roomId || "");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<TaskFormValues>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: task.title,
      description: task.description,
      position: task.position ?? 0,
    },
  });

  const handleDialogChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      closeMenu();
    }
  };

  const onSubmit = (data: TaskFormValues) => {
    mutate(
      {
        taskId: task.id,
        data,
      },
      {
        onSuccess: () => {
          setIsOpen(false);
          closeMenu();
        },
        onError: (error) => {
          const serverErrors = error.response?.data.detail;

          serverErrors?.forEach((err) => {
            setError(err.loc[1] as keyof TaskFormValues, { message: err.msg });
          });
        },
      },
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleDialogChange}>
      <DropdownMenuItem asChild onSelect={(e) => e.preventDefault()}>
        <DialogTrigger className={cn("w-full")} asChild>
          <div
            className={cn(
              "flex items-center gap-2 cursor-pointer",
              "text-sm hover:bg-gray-100 p-1",
            )}>
            <Pencil className="size-4" />{" "}
            <span>{isPending ? "Editing" : "Edit"}</span>
          </div>
        </DialogTrigger>
      </DropdownMenuItem>

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
              <span className="text-red-500">{errors.title.message}</span>
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

            {errors.description && (
              <span className="text-red-500">{errors.description.message}</span>
            )}
          </Field>

          <DialogFooter className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              type="button"
              variant="outline"
              disabled={isPending}
              onClick={() => {
                setIsOpen(false);
                closeMenu();
              }}>
              Cancel
            </Button>

            <Button type="submit" disabled={isPending}>
              {isPending ? "Saving..." : "Save changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
