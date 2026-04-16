import { useAuth } from "@/entities/session/AuthContext";
import { loginRequest } from "@/shared/api";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  const { login } = useAuth();

  return useMutation({
    mutationFn: loginRequest,
    onSuccess: (data) => {
      login(data.user, data.access_token);
    },
  });
};
