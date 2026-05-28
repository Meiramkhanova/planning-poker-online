import { apiInstance } from "../../../shared/api/base";
import type { RoomSnapshotResponse } from "../model/types";

export const getRoomByIdRequest = async (roomId: string) => {
  const res = await apiInstance.get<RoomSnapshotResponse>(`/rooms/${roomId}`);

  return res.data;
};
