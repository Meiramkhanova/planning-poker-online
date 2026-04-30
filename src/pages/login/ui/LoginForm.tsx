import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormValues } from "../model/loginSchema";
import { useSessionStore } from "@/entities/session/model/store";
import { Field, FieldLabel } from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/utils/cn";
import { useShallow } from "zustand/react/shallow";

export const LoginForm = () => {
  const { login, isProcessing, error } = useSessionStore(
    useShallow((s) => ({
      login: s.login,
      isProcessing: s.isProcessing,
      error: s.error,
    })),
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormValues) => login(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Field>
        <FieldLabel className="text-gray-700">Email</FieldLabel>
        <Input
          {...register("email")}
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
            errors.password &&
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
        Sign In
      </Button>

      {error && <div className="text-red-500 text-center">{error}</div>}
    </form>
  );
};
