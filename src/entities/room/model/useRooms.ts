import { useQuery } from "@tanstack/react-query";
import { getRoomsRequest } from "../api/rooms";

export const useRooms = () => {
  return useQuery({
    queryKey: ["rooms"],
    queryFn: getRoomsRequest,
  });
};
