import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormValues } from "../model/loginSchema";
import { useSessionStore } from "@/entities/session/model/store";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const LoginForm = () => {
  const { login, isProcessing, error } = useSessionStore();

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
      {error && <div className="text-red-500 text-center">{error}</div>}

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
        Войти
      </Button>
    </form>
  );
};
