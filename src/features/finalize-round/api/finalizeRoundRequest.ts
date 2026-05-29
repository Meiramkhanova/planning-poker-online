import type { RoomSnapshotResponse } from "@/entities/room/model/types";
import { apiInstance } from "@/shared/api/base";

export const finalizeRoundRequest = async (
  roomId: string,
  roundId: string,
  resultValue: string,
) => {
  const res = await apiInstance.post<RoomSnapshotResponse>(
    `rooms/${roomId}/rounds/${roundId}/finalize`,
    { result_value: resultValue },
  );

  return res.data;
};
