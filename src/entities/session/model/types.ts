export interface AuthPayload {
  email: string;
  name?: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar_color: string;
  created_at: string;
}

export interface AuthResponse {
  access_token: string;
  token_type: string;
  user: User;
}
