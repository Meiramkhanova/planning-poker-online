import type { RoomDeckPreset } from "@/entities/room/model/types";
import { apiInstance } from "../base";

export const getRoomsDeckPresetsRequest = async () => {
  const res = await apiInstance.get<RoomDeckPreset[]>("/rooms/deck-presets");

  return res.data;
};
