import { useMutation, useQueryClient } from "@tanstack/react-query";
import { finalizeRoundRequest } from "../api/finalizeRoundRequest"; // Путь к вашей функции

export function useFinalizeRound(roomId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      roundId,
      resultValue,
    }: {
      roundId: string;
      resultValue: string;
    }) => {
      return await finalizeRoundRequest(roomId, roundId, resultValue);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["room", roomId], data);
    },
  });
}
