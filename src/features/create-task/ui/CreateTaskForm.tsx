import { useForm } from "react-hook-form";
import { createTaskSchema, type CreateTaskFormValues } from "../model/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateTask } from "../model/useCreateTask";
import { Field, FieldLabel } from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/utils/cn";

interface CreateTaskFormProps {
  roomId: string;
  cancelCreating: () => void;
  position: number;
}

export const CreateTaskForm = ({
  roomId,
  cancelCreating,
  position,
}: CreateTaskFormProps) => {
  const { mutate: createTask, isPending, error } = useCreateTask(roomId);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTaskFormValues>({
    resolver: zodResolver(createTaskSchema),
    defaultValues: { title: "", description: "", position: position },
  });

  const onSubmit = (data: CreateTaskFormValues) => {
    createTask(data, {
      onSuccess: () => {
        cancelCreating();
        reset();
      },
    });
  };

  return (
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
            <span className="text-sm text-red-400">{errors.title.message}</span>
          )}
        </Field>

        <Field>
          <FieldLabel htmlFor="task-desc">Description (Optional)</FieldLabel>

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

        {error && <div className="text-sm text-red-400">{error.message}</div>}

        <div className="btns flex items-center gap-4">
          <Button type="submit" disabled={isPending} className="flex-1">
            {isPending ? "Creating..." : "Add Task"}
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={() => {
              cancelCreating();
              reset();
            }}
            className="flex-1">
            Cancel
          </Button>
        </div>
      </div>
    </form>
  );
};
