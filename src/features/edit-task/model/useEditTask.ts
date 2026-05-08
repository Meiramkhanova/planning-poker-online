import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editTaskRequest } from "../api/editTaskRequest";
import type { TaskFormValues } from "./schema";
import type { Task } from "@/entities/task/model/types";
import type { ApiErrorResponse } from "@/shared/api/types";
import type { AxiosError } from "axios";

export const useEditTask = (roomId: string) => {
  const queryClient = useQueryClient();

  return useMutation<
    Task,
    AxiosError<ApiErrorResponse>,
    { taskId: string; data: TaskFormValues }
  >({
    mutationFn: ({ taskId, data }: { taskId: string; data: TaskFormValues }) =>
      editTaskRequest(roomId, taskId, data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["room", roomId] });
    },
  });
};
