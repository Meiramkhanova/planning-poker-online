import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editTaskRequest } from "../api/editTaskRequest";
import type { TaskFormValues } from "./schema";

export const useEditTask = (roomId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ taskId, data }: { taskId: string; data: TaskFormValues }) =>
      editTaskRequest(roomId, taskId, data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["room", roomId] });
    },
  });
};
