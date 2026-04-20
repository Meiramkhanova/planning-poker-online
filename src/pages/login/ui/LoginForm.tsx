import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormValues } from "../model/loginSchema";
import { useSessionStore } from "@/entities/session/model/store";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const LoginForm = () => {
  const { login, isProcessing } = useSessionStore();

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
      {/* {error && <div className="text-red-500 text-center">{error}</div>} */}

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
          <span className="text-gray-700 text-sm">{errors.email.message}</span>
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
          <span className="text-gray-700 text-sm">
            {errors.password.message}
          </span>
        )}
      </Field>

      <Button
        className={cn(
          "py-5 rounded bg-sky-600 border border-sky-600 text-white px-4",
          "hover:bg-sky-700 transition-colors duration-300",
        )}
        type="submit"
        disabled={isProcessing}>
        Sign In
      </Button>
    </form>
  );
};
