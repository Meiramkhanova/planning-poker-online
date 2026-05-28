import { useMutation, useQueryClient } from "@tanstack/react-query";
import { revealRoundRequest } from "../api/revealRoundRequest";

export const useRevealRound = (roomId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (roundId: string) => revealRoundRequest(roomId, roundId),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["room", roomId] });
    },
  });
};
