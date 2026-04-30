import type {
  CreateRoomCredentials,
  CreateRoomResponse,
} from "@/features/create-room/types/types";
import { apiInstance } from "../base";

export const createRoomRequest = async (data: CreateRoomCredentials) => {
  const res = await apiInstance.post<CreateRoomResponse>("/rooms", data);

  return res.data;
};
