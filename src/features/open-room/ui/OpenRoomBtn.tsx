import { Button } from "@/shared/ui/button";
import { MoveUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const OpenRoomBtn = ({ roomId }: { roomId: string }) => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(`/dashboard/room/${roomId}`)}
      className="border border-gray-200 w-full"
      variant="outline">
      <span>Open</span>

      <MoveUpRight className="size-3.5" />
    </Button>
  );
};
