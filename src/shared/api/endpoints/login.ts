import type {
  AuthResponse,
  LoginCredentials,
} from "@/entities/session/model/types";
import { apiInstance } from "../base";

export const loginRequest = async (data: LoginCredentials) => {
  const res = await apiInstance.post<AuthResponse>("/auth/login", data);

  return res.data;
};
