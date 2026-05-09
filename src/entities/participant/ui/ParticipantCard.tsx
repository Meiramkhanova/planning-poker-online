import { cn } from "@/shared/utils/cn";
import type { Participant } from "../model/types";

interface Props {
  participant: Participant;
  isSelf: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export const ParticipantCard = ({
  participant,
  isSelf,
  style,
  className,
}: Props) => (
  <div
    className={cn(
      "absolute transition-all duration-500 flex flex-col items-center gap-1",
      className,
    )}
    style={style}>
    <div
      className={cn(
        "flex items-center justify-center",
        "text-white font-semibold rounded",
        isSelf && "ring-3 ring-sky-200",
      )}
      style={{
        width: "3em",
        height: "4em",
        backgroundColor: participant.avatar_color,
        fontSize: "0.8em",
      }}>
      {participant.has_voted ? "✓" : "?"}
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
