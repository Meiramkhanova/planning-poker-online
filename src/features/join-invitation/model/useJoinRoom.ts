import { useMutation, useQueryClient } from "@tanstack/react-query";
import { joinRoomByInvitation } from "../api/joinRoomByInvitation";
import type { JoinInvitationResponse } from "./types";
import type { AxiosError } from "axios";
import type { ApiErrorResponse } from "@/shared/api/types";

export const useJoinRoom = () => {
  const queryClient = useQueryClient();

  return useMutation<
    JoinInvitationResponse,
    AxiosError<ApiErrorResponse>,
    string
  >({
    mutationFn: (token: string) => joinRoomByInvitation(token),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["rooms"] });

      if (data?.room?.id) {
        queryClient.setQueryData(["room", data.room.id], data);
      }
    },
  });
};
