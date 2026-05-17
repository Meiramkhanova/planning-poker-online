import { useMutation, useQueryClient } from "@tanstack/react-query";
import { joinRoomByInvitation } from "../api/joinRoomByInvitation";
import { useNavigate } from "react-router-dom";

export const useJoinRoom = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (token: string) => joinRoomByInvitation(token),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["rooms"] });

      if (data?.room?.id) {
        queryClient.setQueryData(["room", data.room.id], data);

        navigate(`/dashboard/room/${data.room.id}`, { replace: true });
      }
    },
  });
};
