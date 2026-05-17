import { useMutation, useQueryClient } from "@tanstack/react-query";
import { joinRoomByInvitation } from "../api/joinRoomByInvitation";

export const useJoinRoom = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (token: string) => joinRoomByInvitation(token),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["rooms"] });

      if (data?.room?.id) {
        queryClient.setQueryData(["room", data.room.id], data);
      }
    },
  });
};
