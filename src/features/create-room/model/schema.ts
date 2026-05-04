import { z } from "zod";

export const createRoomSchema = z.object({
  name: z.string().trim().min(3, "Room name must be at least 3 characters"),
  description: z.string().max(100, {
    message: "The description cannot be longer than 100 characters.",
  }),
  deck_preset_code: z.string().min(1, "Please select a deck preset"),
});

export type CreateRoomFormValues = z.infer<typeof createRoomSchema>;
