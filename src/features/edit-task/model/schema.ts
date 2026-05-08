import z from "zod";

export const taskSchema = z.object({
  title: z.string().min(2, "Title requires minimum 2 characters"),
  description: z.string().optional(),
  position: z.number(),
});

export type TaskFormValues = z.infer<typeof taskSchema>;
