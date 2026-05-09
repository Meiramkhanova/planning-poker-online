import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Task } from "@/entities/task/model/types";
import type { ApiErrorResponse } from "@/shared/api/types";
import type { AxiosError } from "axios";
import { selectTaskRequest } from "../api/selectTaskRequest";

export const useSelectTask = (roomId: string) => {
  const queryClient = useQueryClient();

  return useMutation<Task, AxiosError<ApiErrorResponse>, { taskId: string }>({
    mutationFn: ({ taskId }: { taskId: string }) =>
      selectTaskRequest(roomId, taskId),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["room", roomId] });
    },
  });
};
