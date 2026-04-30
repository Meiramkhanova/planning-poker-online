import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CreateRoomCredentials } from "./types";
import { createRoomRequest } from "../api/createRoomRequest";

export const useCreateRoom = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newRoomData: CreateRoomCredentials) =>
      createRoomRequest(newRoomData),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rooms"] });
    },
  });
};
