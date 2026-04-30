import { getRoomByIdRequest } from "@/shared/api/endpoints/getRoomByIdRequest";
import { useQuery } from "@tanstack/react-query";

export const useRoomById = (roomId: string) => {
  return useQuery({
    queryKey: ["room", roomId],
    queryFn: () => getRoomByIdRequest(roomId),
    enabled: Boolean(roomId),
  });
};
