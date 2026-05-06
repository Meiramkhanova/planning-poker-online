import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTaskRequest } from "../api/deleteTaskRequest";

export const useDeleteTask = (roomId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (taskId: string) => deleteTaskRequest(roomId, taskId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["room", roomId] });
    },
  });
};
