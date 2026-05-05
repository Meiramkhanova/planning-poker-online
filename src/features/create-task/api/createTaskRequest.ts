import type { Task } from "@/entities/task/model/types";
import { apiInstance } from "../../../shared/api/base";
import type { CreateTaskCredentials } from "../model/types";

export const createTaskRequest = async (
  roomId: string,
  data: CreateTaskCredentials,
) => {
  const res = await apiInstance.post<Task>(`rooms/${roomId}/tasks`, data);

  return res.data;
};
