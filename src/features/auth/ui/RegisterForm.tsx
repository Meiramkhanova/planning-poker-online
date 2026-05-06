import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSessionStore } from "@/entities/session/model/store";
import { Field, FieldLabel } from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import {
  registerSchema,
  type RegisterFormValues,
} from "../model/registerSchema";
import { cn } from "@/shared/utils/cn";
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
      <Field>
        <FieldLabel htmlFor="full-name" className="text-gray-700">
          Full Name
        </FieldLabel>

        <Input
          id="full-name"
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
        <FieldLabel htmlFor="register-email" className="text-gray-700">
          Email
        </FieldLabel>
        <Input
          id="register-email"
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
        <FieldLabel htmlFor="password-register" className="text-gray-700">
          Password
        </FieldLabel>

        <Input
          id="password-register"
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

      {error && <div className="text-red-500 text-center">{error}</div>}
    </form>
  );
};
