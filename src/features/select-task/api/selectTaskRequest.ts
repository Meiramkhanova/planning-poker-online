import { apiInstance } from "@/shared/api/base";

export const selectTaskRequest = async (roomId: string, taskId: string) => {
  const res = await apiInstance.post(`rooms/${roomId}/tasks/select`, {
    task_id: taskId,
  });

  return res.data;
};
