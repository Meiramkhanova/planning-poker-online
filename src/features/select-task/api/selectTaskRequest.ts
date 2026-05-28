import { apiInstance } from "@/shared/api/base";

export const selectTaskRequest = async (
  roomId: string,
  taskId: string,
): Promise<void> => {
  await apiInstance.post(`rooms/${roomId}/tasks/select`, {
    task_id: taskId,
  });
};
