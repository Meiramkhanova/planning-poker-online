import type { Room } from "@/entities/room/model/types";
import { apiInstance } from "../../../shared/api/base";

export const getRoomsRequest = async () => {
  const res = await apiInstance.get<Room[]>("/rooms");

  return res.data;
};
