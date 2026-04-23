import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import {
  createRoomSchema,
  type CreateRoomFormValues,
} from "@/features/create-room/model/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useCreateRoom } from "@/entities/room/model/useCreateRoom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { useDeckPresets } from "@/entities/room/model/useDeckPresets";

function CreateRoom() {
  const form = useForm<CreateRoomFormValues>({
    resolver: zodResolver(createRoomSchema),
    defaultValues: {
      name: "",
      description: "",
      deck_preset_code: "fibonacci",
    },
  });

  const { isPending, mutate } = useCreateRoom();
  const { data: deck_presets } = useDeckPresets();
  const navigate = useNavigate();

  const onSubmit = (values: CreateRoomFormValues) => {
    mutate(values, {
      onSuccess: (newRoom) => {
        const targetPath = `/rooms/${newRoom.room.id}`;
        navigate(targetPath);
      },
      onError: (error: any) => {
        const messageErr = error.response?.data?.message || "Server Error";

        form.setError("root", { message: messageErr });
      },
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />

          <span>Create Room</span>
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-gray-700">New Room</DialogTitle>

          <DialogDescription>
            Set up a new room to estimate tasks with your team.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 text-gray-700">
          <Controller
            control={form.control}
            name="name"
            render={({ field, fieldState }) => (
              <Field>
                <Label htmlFor={field.name}>Room Name</Label>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter the room name"
                />
                {fieldState.error && (
                  <FieldError>{fieldState.error.message}</FieldError>
                )}
              </Field>
            )}
          />

          <Controller
            name="description"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field>
                <Label htmlFor={field.name}>Description (Optional)</Label>
                <Input
                  {...field}
                  id={field.name}
                  placeholder="Tell players about the rules..."
                />
                {fieldState.error && (
                  <FieldError>{fieldState.error.message}</FieldError>
                )}
              </Field>
            )}
          />

          <Controller
            name="deck_preset_code"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field>
                <Label>Deck Preset</Label>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}>
                  <SelectTrigger aria-invalid={fieldState.invalid}>
                    <SelectValue placeholder="Select a preset" />
                  </SelectTrigger>
                  <SelectContent>
                    {deck_presets?.map((preset) => (
                      <SelectItem key={preset.id} value={preset.code}>
                        {preset.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {fieldState.error && (
                  <FieldError>{fieldState.error.message}</FieldError>
                )}
              </Field>
            )}
          />

          {form.formState.errors.root && (
            <p className="text-red-400">
              {form?.formState?.errors?.root?.message}
            </p>
          )}

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Creating..." : "Create Room"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default CreateRoom;
