import { useMutation, useQueryClient } from "@tanstack/react-query";
import { submitVoteRequest } from "../api/submitVoteRequest";
import type { VotePayload } from "./types";

export const useSubmitVote = (roomId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: VotePayload) => submitVoteRequest(roomId, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["room", roomId] });
    },
  });
};
