import { apiInstance } from "@/shared/api";
import type { AuthResponse, RegisterCredentials } from "../model/types";

export const registerRequest = async (data: RegisterCredentials) => {
  const res = await apiInstance.post<AuthResponse>("/auth/register", data);
  return res.data;
};
