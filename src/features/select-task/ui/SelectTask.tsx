import { Button } from "@/shared/ui/button";
import { useSelectTask } from "../model/useSelectTask";

interface SelectTaskProps {
  isOwner: boolean;
  roomId: string;
  taskId: string;
  isActive: boolean;
}

function SelectTask({ isOwner, roomId, taskId, isActive }: SelectTaskProps) {
  const { mutate, isPending } = useSelectTask(roomId);

  if (!isOwner) {
    return null;
  }

  return (
    <Button
      onClick={() => mutate({ taskId })}
      size="sm"
      className="rounded text-xs"
      disabled={isPending}>
      {isPending ? "Selecting..." : isActive ? "Voting now" : "Vote this task"}
    </Button>
  );
}

export default SelectTask;
