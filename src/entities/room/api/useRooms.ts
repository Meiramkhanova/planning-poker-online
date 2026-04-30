import { getRoomsRequest } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";

export const useRooms = () => {
  return useQuery({
    queryKey: ["rooms"],
    queryFn: getRoomsRequest,
  });
};
