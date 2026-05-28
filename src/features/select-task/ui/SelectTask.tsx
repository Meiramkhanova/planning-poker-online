import { Button } from "@/shared/ui/button";
import { useSelectTask } from "../model/useSelectTask";
import { useRoomById } from "@/entities/room/model/useRoomById";

interface SelectTaskProps {
  isOwner: boolean;
  roomId: string;
  taskId: string;
  isActive: boolean;
}

export const SelectTask = ({
  isOwner,
  roomId,
  taskId,
  isActive,
}: SelectTaskProps) => {
  const { mutate, isPending } = useSelectTask(roomId);

  const { data } = useRoomById(roomId);

  const isRoundActive = !!data?.active_round;

  if (!isOwner) {
    return null;
  }

  return (
    <div className="actions flex items-center justify-between pt-4">
      <Button
        onClick={() => mutate({ taskId })}
        size="sm"
        className="rounded text-xs"
        disabled={isPending || isRoundActive}>
        {isPending
          ? "Selecting..."
          : isRoundActive && isActive
            ? "Round in progress"
            : isActive
              ? "Voting now"
              : "Vote this task"}
      </Button>
    </div>
  );
};
