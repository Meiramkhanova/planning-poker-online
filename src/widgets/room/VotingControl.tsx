import DeckPresets from "@/widgets/room/DeckPresets";
import type { RoomDeckPreset } from "@/entities/room/model/types";
import { StartRoundButton } from "@/features/start-voting";
import { useSubmitVote } from "@/features/submit-vote/model/useSubmitVote";
import { useRevealRound } from "@/features/revealRound/model/useRevealRound";
import { Button } from "@/shared/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui/tooltip";

interface VotingControlProps {
  currentTaskId: string | null;
  isRoundActive: boolean;
  isOwner: boolean;
  deck: RoomDeckPreset;
  roomId: string;
  currentRoundId: string;
  selfVoteValue: string;
  roundStatus: "voting" | "revealed" | "closed" | null;
  averageScore: number | null;
  canReveal: boolean;
}

function VotingControl({
  currentTaskId,
  isRoundActive,
  isOwner,
  deck,
  roomId,
  currentRoundId,
  selfVoteValue,
  roundStatus,
  averageScore,
  canReveal,
}: VotingControlProps) {
  const { mutate: submitVote, isPending: isVotePending } =
    useSubmitVote(roomId);

  const { mutate: revealRound, isPending: isRevealPending } =
    useRevealRound(roomId);

  const handleVote = (value: string) => {
    if (!currentRoundId) return;

    submitVote({ roundId: currentRoundId, value });
  };

  const handleReveal = () => {
    if (!currentRoundId) return;
    revealRound(currentRoundId);
  };

  const isRevealDisabled = isRevealPending || !canReveal;

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
      {currentTaskId && isRoundActive && roundStatus === "voting" && (
        <div className="flex flex-col items-center gap-4 w-full">
          {isOwner && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button onClick={handleReveal} disabled={isRevealDisabled}>
                  {isRevealPending ? "Revealing..." : "Reveal Cards"}
                </Button>
              </TooltipTrigger>

              <TooltipContent>
                <p>Waiting for votes to be submitted...</p>
              </TooltipContent>
            </Tooltip>
          )}

          <h3 className="text-gray-700 text-center w-full text-sm">
            {selfVoteValue ? "You have voted" : "Valuate a task"}
          </h3>

          <DeckPresets
            deckPresets={deck}
            onVote={handleVote}
            selectedValue={selfVoteValue}
            disabled={isVotePending}
          />
        </div>
      )}

      {/*cards revealed */}
      {currentTaskId && isRoundActive && roundStatus === "revealed" && (
        <div className="flex flex-col items-center gap-2 w-full text-center">
          <h3 className="text-sky-800 font-semibold text-base">
            Cards Revealed! 🎉
          </h3>

          {averageScore !== null && (
            <p className="text-gray-600 text-sm">
              Average Score:{" "}
              <span className="font-bold text-sky-800 text-lg">
                {averageScore}
              </span>
            </p>
          )}

          {isOwner && (
            <p className="text-xs text-gray-500">
              You can now finalize this task estimation from the backlog or
              active card.
            </p>
          )}
        </div>
      )}
    </section>
  );
}

export default VotingControl;
