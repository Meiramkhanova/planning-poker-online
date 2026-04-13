import { apiClient } from "@/shared/api/client";

export const login = (data: { email: string; password: string }) => {
  return apiClient("auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const register = (data: { email: string; password: string }) => {
  return apiClient("auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
};
