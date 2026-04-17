import type { User } from "@/entities/session/model/types";
import { apiInstance } from "../base";

export const getMe = async () => {
  const res = await apiInstance.get<User>("/auth/me");

  return res.data;
};
