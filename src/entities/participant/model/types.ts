export interface Participant {
  id: string;
  user_id: string;
  name: string;
  email: string;
  avatar_color: string;
  role: string;
  seat_index: number;
  joined_at: string;
  last_seen_at: string;
  is_online: boolean;
  has_voted: boolean;
}
