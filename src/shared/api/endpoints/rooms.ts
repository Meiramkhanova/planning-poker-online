import type { Room } from "@/entities/room/model/types";
import { apiInstance } from "../base";

export const getRoomsRequest = async () => {
  const res = await apiInstance.get<Room[]>("/rooms");

  return res.data;
};
