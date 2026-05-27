import { useMutation, useQueryClient } from "@tanstack/react-query";
import { startRoundRequest } from "../api/startRoundRequest";

export const useRoundStart = (roomId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (taskId: string) => startRoundRequest(roomId, taskId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["room", roomId] });
    },
  });
};
