import type { Participant } from "@/entities/participant/model/types";
import { ParticipantCard } from "@/entities/participant/ui/ParticipantCard";

interface ParticipantsProps {
  participants: Participant[];
  selfId: string;
}

function Participants({ participants, selfId }: ParticipantsProps) {
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

        return (
          <ParticipantCard
            participant={p}
            key={p.id}
            isSelf={p.id === selfId}
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
