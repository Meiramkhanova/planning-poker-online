import type {
  AuthResponse,
  RegisterCredentials,
} from "@/entities/session/model/types";
import { apiInstance } from "../base";

export const registerRequest = async (data: RegisterCredentials) => {
  const res = await apiInstance.post<AuthResponse>("/auth/register", data);
  return res.data;
};
