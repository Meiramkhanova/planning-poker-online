import type { User } from "@/entities/session/model/types";
import { apiInstance } from "../../../shared/api/base";

export const getMe = async () => {
  const res = await apiInstance.get<User>("/auth/me");

  return res.data;
};
