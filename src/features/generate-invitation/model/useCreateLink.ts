import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createInviteLinkRequest } from "../api/createInviteLinkRequest";

export const useCreateLink = (roomId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { expires_in_hours: number }) =>
      createInviteLinkRequest(roomId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["room", roomId] });

      queryClient.invalidateQueries({ queryKey: ["rooms"] });
    },
  });
};
