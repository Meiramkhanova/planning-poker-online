import { apiInstance } from "@/shared/api/base";
import type { StartVotingResponse } from "../model/types";

export const startRoundRequest = async (roomId: string, taskId: string) => {
  const res = await apiInstance.post<StartVotingResponse>(
    `rooms/${roomId}/rounds/start`,
    {
      task_id: taskId,
    },
  );

  return res.data;
};
