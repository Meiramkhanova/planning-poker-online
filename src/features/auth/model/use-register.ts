import { useAuth } from "@/entities/session/AuthContext";
import { registerRequest } from "@/shared/api";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  const { login } = useAuth();

  return useMutation({
    mutationFn: registerRequest,
    onSuccess: (data) => {
      login(data.user, data.access_token);
    },
  });
};
