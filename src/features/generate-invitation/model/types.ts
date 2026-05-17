export interface CreateInviteLinkResponse {
  id: string;
  token: string;
  url: string;
  expires_at: string;
  is_active: boolean;
  created_at: string;
}
