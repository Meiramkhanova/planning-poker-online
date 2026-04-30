import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRoomById } from "@/entities/room/api/useRoomById";
import { cn } from "@/lib/utils";
import Container from "@/shared/ui/Container";
import LoadingElement from "@/shared/ui/LoadingElement";
import CopyInvite from "@/widgets/room/CopyInvite";
import { useParams } from "react-router-dom";

function RoomPage() {
  const { roomId } = useParams<{ roomId: string }>();

  const { data, isLoading, isError } = useRoomById(roomId ?? "");

  if (isLoading) return <LoadingElement />;

  if (isError) {
    return (
      <div className="error-wrapper py-8 size-full flex items-center justify-center text-center">
        <Container>
          <h2 className="text-sky-700 text-lg">Error loading a room.</h2>
        </Container>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="no-room-info py-8 size-full flex items-center justify-center text-center">
        <Container>
          <h2 className="text-sky-700 text-lg">Room is not found.</h2>
        </Container>
      </div>
    );
  }

  const roomData = data.room;

  return (
    <Container className="size-full">
      <div className="py-8 xl:py-12 flex flex-col gap-8 h-full">
        <div className="top-room-info flex items-center justify-between">
          <div className="left-top-info flex items-center gap-4">
            <div className="room-name">{roomData.name}</div>

            <Badge
              className={cn(
                roomData.status === "active"
                  ? "bg-green-50 text-green-700 border-green-200"
                  : "bg-gray-50 text-gray-500 border-gray-200",
              )}>
              {roomData.status}
            </Badge>
          </div>

          <div className="right-top-info">
            <CopyInvite invite_link={roomData.invite_link} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default RoomPage;
