import { cn } from "@/shared/utils/cn";
import type { Participant } from "../model/types";

interface Props {
  participant: Participant;
  isSelf: boolean;
  style?: React.CSSProperties;
  className?: string;
  roundStatus: "voting" | "revealed" | "closed" | null;
  voteValue: string | null;
}

export const ParticipantCard = ({
  participant,
  isSelf,
  style,
  className,
  roundStatus,
  voteValue,
}: Props) => {
  const renderCardContent = () => {
    if (!participant.is_online) return "—";

    if (roundStatus === "revealed") {
      return voteValue ?? "—";
    }

    return participant.has_voted ? "✓" : "?";
  };

  return (
    <div
      className={cn(
        "absolute transition-all duration-500 flex flex-col items-center gap-1",
        className,
        !participant.is_online && "opacity-50 grayscale  pointer-events-none",
      )}
      style={style}>
      <div
        className={cn(
          "flex items-center justify-center",
          "text-white font-semibold rounded",
          isSelf && "ring-3 ring-sky-200",
          roundStatus === "revealed" && "bg-white border-2 text-slate-800",
        )}
        style={{
          width: "3em",
          height: "4em",
          fontSize: "0.8em",
          backgroundColor:
            roundStatus === "revealed" ? undefined : participant.avatar_color,
          borderColor:
            roundStatus === "revealed" ? participant.avatar_color : undefined,
        }}>
        {renderCardContent()}
      </div>

      <span
        className={cn(
          "text-[10px] font-bold bg-white/80 px-2 py-0.5 mt-0.5",
          "rounded text-slate-800 border border-gray-200 whitespace-nowrap",
        )}>
        {participant.name} {isSelf ? "(You)" : ""}
      </span>
    </div>
  );
};
