import type { CreateRoomCredentials } from "@/features/create-room/model/types";
import { apiInstance } from "../../../shared/api/base";
import type { RoomSnapshotResponse } from "@/entities/room/model/types";

export const createRoomRequest = async (data: CreateRoomCredentials) => {
  const res = await apiInstance.post<RoomSnapshotResponse>("/rooms", data);

  return res.data;
};
