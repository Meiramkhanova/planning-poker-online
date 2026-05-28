import type { Participant } from "@/entities/participant/model/types";
import { ParticipantCard } from "@/entities/participant/ui/ParticipantCard";
import type { Vote } from "@/entities/room/model/types";

interface ParticipantsProps {
  participants: Participant[];
  selfId: string;
  roundStatus: "voting" | "revealed" | "closed" | null;
  votes: Vote[];
}

function Participants({
  participants,
  selfId,
  roundStatus,
  votes,
}: ParticipantsProps) {
  const selfParticipant = participants.find((p) => p.id === selfId);
  const selfSeatIndex = selfParticipant?.seat_index ?? 0;

  return (
    <>
      {participants.map((p) => {
        const angleStep = 360 / participants.length;
        const angle = (p.seat_index - selfSeatIndex) * angleStep + 90;
        const radiusX = 38;
        const radiusY = 32;

        const x = Math.cos((angle * Math.PI) / 180) * radiusX;
        const y = Math.sin((angle * Math.PI) / 180) * radiusY;

        const playerVote = votes.find((v) => v.participant_id === p.id);

        return (
          <ParticipantCard
            participant={p}
            key={p.id}
            isSelf={p.id === selfId}
            roundStatus={roundStatus}
            voteValue={playerVote?.value ?? null}
            style={{
              left: `${50 + x}%`,
              top: `${50 + y}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
        );
      })}{" "}
    </>
  );
}

export default Participants;
