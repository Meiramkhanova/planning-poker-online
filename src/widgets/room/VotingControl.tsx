import DeckPresets from "@/widgets/room/DeckPresets";
import type { RoomDeckPreset } from "@/entities/room/model/types";
import { StartRoundButton } from "@/features/start-voting";

interface VotingControlProps {
  currentTaskId: string | null;
  isRoundActive: boolean;
  isOwner: boolean;
  deck: RoomDeckPreset;
  roomId: string;
}

function VotingControl({
  currentTaskId,
  isRoundActive,
  isOwner,
  deck,
  roomId,
}: VotingControlProps) {
  return (
    <section className="voting flex flex-col items-center gap-4 mt-auto pt-8">
      {/* task is not chosen yet in backlog */}
      {!currentTaskId && (
        <h3 className="text-gray-400 text-center w-full text-sm">
          {isOwner
            ? "Select a task from the backlog to begin"
            : "Waiting for the moderator to select a task..."}
        </h3>
      )}

      {/* task chosen through select but round does not started yet */}
      {currentTaskId && !isRoundActive && (
        <div className="flex flex-col items-center gap-4 w-full">
          <h3 className="text-gray-500 text-center w-full text-sm">
            {isOwner
              ? "Click 'Start' to begin voting"
              : "Waiting for moderator"}
          </h3>
          {isOwner && (
            <StartRoundButton roomId={roomId} taskId={currentTaskId} />
          )}
        </div>
      )}

      {/* round started */}
      {currentTaskId && isRoundActive && (
        <>
          <h3 className="text-gray-700 text-center w-full text-sm">
            Valuate a task
          </h3>

          <DeckPresets deckPresets={deck} />
        </>
      )}
    </section>
  );
}

export default VotingControl;
