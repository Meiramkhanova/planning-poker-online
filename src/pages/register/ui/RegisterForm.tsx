import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSessionStore } from "@/entities/session/model/store";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  registerSchema,
  type RegisterFormValues,
} from "../model/registerSchema";

export const RegisterForm = () => {
  const { register: signUp, isProcessing, error } = useSessionStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormValues) => signUp(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      {error && <div className="text-red-500 text-center">{error}</div>}

      <Field>
        <FieldLabel>Name</FieldLabel>
        <Input
          {...register("name")}
          className={
            errors.name ? "border-red-500 focus-visible:ring-red-500" : ""
          }
        />
        {errors.name && <span>{errors.name.message}</span>}
      </Field>

      <Field>
        <FieldLabel>Email</FieldLabel>
        <Input
          {...register("email")}
          className={
            errors.email ? "border-red-500 focus-visible:ring-red-500" : ""
          }
        />
        {errors.email && <span>{errors.email.message}</span>}
      </Field>

      <Field>
        <FieldLabel>Password</FieldLabel>
        <Input
          type="password"
          {...register("password")}
          className={
            errors.password ? "border-red-500 focus-visible:ring-red-500" : ""
          }
        />
        {errors.password && <span>{errors.password.message}</span>}
      </Field>

      <Button type="submit" disabled={isProcessing}>
        Sign Up
      </Button>
    </form>
  );
};
