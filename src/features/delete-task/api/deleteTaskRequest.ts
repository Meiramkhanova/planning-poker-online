import { apiInstance } from "@/shared/api/base";

export const deleteTaskRequest = async (
  roomId: string,
  taskId: string,
): Promise<void> => {
  await apiInstance.delete(`rooms/${roomId}/tasks/${taskId}`);
};
