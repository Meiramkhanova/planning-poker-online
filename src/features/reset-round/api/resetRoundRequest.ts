import type { RoomSnapshotResponse } from "@/entities/room/model/types";
import { apiInstance } from "@/shared/api/base";

export const resetRoundRequest = async (roomId: string, round_id: string) => {
  const res = await apiInstance.post<RoomSnapshotResponse>(
    `rooms/${roomId}/rounds/${round_id}/reset`,
    {
      round_id,
    },
  );

  return res.data;
};
