import * as z from "zod";

export const registerSchema = z.object({
  name: z.string().min(2, "Name is too short").max(50, "Name is too long"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;
