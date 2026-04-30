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
import { cn } from "@/lib/utils";
import { useShallow } from "zustand/react/shallow";

export const RegisterForm = () => {
  const {
    register: signUp,
    isProcessing,
    error,
  } = useSessionStore(
    useShallow((s) => ({
      register: s.register,
      isProcessing: s.isProcessing,
      error: s.error,
    })),
  );

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
        <FieldLabel className="text-gray-700">Full Name</FieldLabel>
        <Input
          {...register("name")}
          className={cn(
            "py-5 rounded",
            errors.email &&
              "border-red-300 focus-visible:ring-red-300 focus-visible:border-red-300",
          )}
          placeholder="Enter your full name"
        />
        {errors.name && (
          <span className="text-sm text-red-400">{errors.name.message}</span>
        )}
      </Field>

      <Field>
        <FieldLabel className="text-gray-700">Email</FieldLabel>
        <Input
          {...register("email")}
          type="email"
          className={cn(
            "py-5 rounded",
            errors.email &&
              "border-red-300 focus-visible:ring-red-300 focus-visible:border-red-300",
          )}
          placeholder="you@example.com"
        />
        {errors.email && (
          <span className="text-sm text-red-400">{errors.email.message}</span>
        )}
      </Field>

      <Field>
        <FieldLabel className="text-gray-700">Password</FieldLabel>
        <Input
          type="password"
          {...register("password")}
          className={cn(
            "py-5 rounded",
            errors.email &&
              "border-red-300 focus-visible:ring-red-300 focus-visible:border-red-300",
          )}
          placeholder="Enter your password"
        />
        {errors.password && (
          <span className="text-sm text-red-400">
            {errors.password.message}
          </span>
        )}
      </Field>

      <Button type="submit" disabled={isProcessing}>
        Sign Up
      </Button>
    </form>
  );
};
