import { apiClient } from "@/shared/api/client";

export const getRooms = () => {
  return apiClient("/rooms");
};

export const getRoomById = (id: string) => {
  return apiClient(`/rooms/${id}`);
};
