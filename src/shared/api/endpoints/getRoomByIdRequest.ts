import { apiInstance } from "../base";
import type { GetRoomResponse } from "@/entities/room/model/types";

export const getRoomByIdRequest = async (roomId: string) => {
  const res = await apiInstance.get<GetRoomResponse>(`/rooms/${roomId}`);

  return res.data;
};
