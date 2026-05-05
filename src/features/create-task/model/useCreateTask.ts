import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTaskRequest } from "../api/createTaskRequest";
import type { CreateTaskCredentials } from "./types";

export const useCreateTask = (roomId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newTaskData: CreateTaskCredentials) =>
      createTaskRequest(roomId, newTaskData),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["room", roomId] });
    },
  });
};
