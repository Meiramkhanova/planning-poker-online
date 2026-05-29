import type { RoomSnapshotResponse } from "@/entities/room/model/types";
import { apiInstance } from "@/shared/api/base";

export const startRoundRequest = async (roomId: string, taskId: string) => {
  const res = await apiInstance.post<RoomSnapshotResponse>(
    `rooms/${roomId}/rounds/start`,
    {
      task_id: taskId,
    },
  );

  return res.data;
};
