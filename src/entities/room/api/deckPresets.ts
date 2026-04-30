import { apiInstance } from "../../../shared/api/base";
import type { RoomDeckPreset } from "../model/types";

export const getRoomsDeckPresetsRequest = async () => {
  const res = await apiInstance.get<RoomDeckPreset[]>("/rooms/deck-presets");

  return res.data;
};
