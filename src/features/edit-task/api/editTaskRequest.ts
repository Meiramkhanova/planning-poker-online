import type { Task } from "@/entities/task/model/types";
import { apiInstance } from "@/shared/api/base";
import type { TaskFormValues } from "../model/schema";

export const editTaskRequest = async (
  roomId: string,
  taskId: string,
  data: TaskFormValues,
) => {
  const res = await apiInstance.patch<Task>(
    `rooms/${roomId}/tasks/${taskId}`,
    data,
  );

  return res.data;
};
