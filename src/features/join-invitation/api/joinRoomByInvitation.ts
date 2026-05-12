import { apiInstance } from "@/shared/api";
import type { JoinInvitationResponse } from "../model/types";

export const joinRoomByInvitation = async (token: string) => {
  const res = await apiInstance.post<JoinInvitationResponse>(
    `/invitations/${token}/join`,
  );

  return res.data;
};
