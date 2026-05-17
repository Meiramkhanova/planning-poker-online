import { apiInstance } from "../../../shared/api/base";
import type { CreateInviteLinkResponse } from "../model/types";

export const createInviteLinkRequest = async (
  roomId: string,
  data: { expires_in_hours: number },
) => {
  const res = await apiInstance.post<CreateInviteLinkResponse>(
    `/rooms/${roomId}/invite-links`,
    data,
  );

  return res.data;
};
