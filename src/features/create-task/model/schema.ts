import { z } from "zod";

export const createTaskSchema = z.object({
  title: z.string().min(2, "Add minimum 2 symbols").max(50, "Too long"),
  description: z.string().max(100, "No more than 100 symbols").optional(),
  position: z.number().min(0),
});

export type CreateTaskFormValues = z.infer<typeof createTaskSchema>;
