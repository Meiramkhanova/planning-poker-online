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

export interface RoomDeckPreset {
  id: number;
  name: string;
  code: string;
  description: string;
  cards: string[];
}

export interface CreateRoomCredentials {
  name: string;
  description: string;
  deck_preset_code: string;
}

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

export interface Task {
  id: string;
  title: string;
  description: string;
  position: number;
  status: string;
  estimate_value: string;
  estimated_at: string;
  created_at: string;
  updated_at: string;
}

export interface CreateRoomResponse {
  room: FullRoom;
  self_participant_id: string;
  participants: Participant[];
  tasks: Task[];
  active_round: {
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
    votes: [
      {
        participant_id: string;
        user_id: string;
        value: string;
        has_voted: boolean;
      },
    ];
  };
  history: [
    {
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
    },
  ];
}
