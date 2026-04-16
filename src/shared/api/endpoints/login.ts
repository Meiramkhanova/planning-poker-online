import type { AuthPayload, AuthResponse } from "@/entities/session/model/types";
import { client } from "../client";

export const loginRequest = async (data: AuthPayload) => {
  const res = await client.post<AuthResponse>("/auth/login", data);
  return res.data;
};
