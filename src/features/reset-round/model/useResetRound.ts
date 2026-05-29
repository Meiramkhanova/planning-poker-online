import { useMutation, useQueryClient } from "@tanstack/react-query";
import { resetRoundRequest } from "../api/resetRoundRequest";

export const useResetRound = (roomId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (round_id: string) => resetRoundRequest(roomId, round_id),
    onSuccess: (data) => {
      queryClient.setQueryData(["room", roomId], data);
    },
  });
};
