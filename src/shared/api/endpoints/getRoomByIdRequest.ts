import type { RoomDeckPreset } from "@/features/create-room/types/types";
import { apiInstance } from "../base";

export const getRoomByIdRequest = async (roomId: string) => {
  const res = await apiInstance.get<RoomDeckPreset[]>("/rooms/deck-presets");

  return res.data;
};
