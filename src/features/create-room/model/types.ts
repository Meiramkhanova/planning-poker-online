import type { Participant } from "@/entities/participant/model/types";
import type {
  ActiveRound,
  FullRoom,
  History,
} from "@/entities/room/model/types";
import type { Task } from "@/entities/task/model/types";

export interface CreateRoomCredentials {
  name: string;
  description: string;
  deck_preset_code: string;
}

export interface CreateRoomResponse {
  room: FullRoom;
  self_participant_id: string;
  participants: Participant[];
  tasks: Task[];
  active_round: ActiveRound;
  history: History[];
}
