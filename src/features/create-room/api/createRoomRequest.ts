import type {
  CreateRoomCredentials,
  CreateRoomResponse,
} from "@/features/create-room/model/types";
import { apiInstance } from "../../../shared/api/base";

export const createRoomRequest = async (data: CreateRoomCredentials) => {
  const res = await apiInstance.post<CreateRoomResponse>("/rooms", data);

  return res.data;
};
