import { apiInstance } from "@/shared/api/base";
import type { VotePayload } from "../model/types";

export const submitVoteRequest = async (
  roomId: string,
  payload: VotePayload,
): Promise<void> => {
  await apiInstance.post(`rooms/${roomId}/rounds/${payload.roundId}/vote`, {
    value: payload.value,
  });
};
