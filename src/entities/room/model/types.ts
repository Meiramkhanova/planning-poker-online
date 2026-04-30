import type { CreateRoomResponse } from "@/features/create-room/types/types";

export interface Room {
  id: string;
  name: string;
  slug: string;
  description: string;
  invite_link: string;
  participants_count: number;
  active_task_title: string;
  last_activity_at: string;
  created_at: string;
}

export type GetRoomResponse = CreateRoomResponse;

export interface FullRoom {
  id: string;
  name: string;
  slug: string;
  description: string;
  status: string;
  owner_id: string;
  current_task_id: string;
  invite_link: string;
  created_at: string;
  updated_at: string;
  deck: RoomDeckPreset;
}

export interface RoomDeckPreset {
  id: number;
  name: string;
  code: string;
  description: string;
  cards: string[];
}

export interface ActiveRound {
  id: string;
  task_id: string;
  round_index: number;
  status: string;
  started_at: string;
  revealed_at: string;
  closed_at: string;
  votes_submitted: number;
  total_participants: number;
  can_reveal: boolean;
  suggested_result: string;
  average_score: number;
  consensus: boolean;
  distribution: {
    additionalProp1: number;
    additionalProp2: number;
    additionalProp3: number;
  };
  self_vote_value: string;
  votes: Vote[];
}

export interface Vote {
  participant_id: string;
  user_id: string;
  value: string;
  has_voted: boolean;
}

export interface History {
  id: string;
  round_id: string;
  task_id: string;
  task_title: string;
  result_value: string;
  average_score: number;
  consensus: boolean;
  votes_count: number;
  distribution: {
    additionalProp1: number;
    additionalProp2: number;
    additionalProp3: number;
  };
  created_at: string;
}
