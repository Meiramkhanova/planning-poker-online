import { apiInstance } from "@/shared/api";
import type { AuthResponse, LoginCredentials } from "../model/types";

export const loginRequest = async (data: LoginCredentials) => {
  const res = await apiInstance.post<AuthResponse>("/auth/login", data);

  return res.data;
};
