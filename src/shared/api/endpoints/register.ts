import type { AuthPayload, AuthResponse } from "@/entities/session/model/types";
import { client } from "../client";

export const registerRequest = async (data: AuthPayload) => {
  const res = await client.post<AuthResponse>("/auth/register", data);
  return res.data;
};
