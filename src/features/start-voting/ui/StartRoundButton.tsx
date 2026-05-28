import { Button } from "@/shared/ui/button";
import { useRoundStart } from "../model/useRoundStart";

interface StartRoundButtonProps {
  roomId: string;
  taskId: string;
}

function StartRoundButton({ roomId, taskId }: StartRoundButtonProps) {
  const { mutate: startRound, isPending } = useRoundStart(roomId);

  const handleStartRound = () => {
    startRound(taskId);
  };

  return (
    <Button onClick={handleStartRound} disabled={isPending}>
      {isPending ? "Starting..." : "Start Round"}
    </Button>
  );
}

export default StartRoundButton;
