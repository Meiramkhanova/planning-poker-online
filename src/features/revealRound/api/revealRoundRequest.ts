import type { RoomSnapshotResponse } from "@/entities/room/model/types";
import { apiInstance } from "@/shared/api/base";

export const revealRoundRequest = async (roomId: string, roundId: string) => {
  const res = await apiInstance.post<RoomSnapshotResponse>(
    `rooms/${roomId}/rounds/${roundId}/reveal`,
  );
  return res.data;
};
