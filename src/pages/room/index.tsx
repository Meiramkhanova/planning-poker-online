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
        <section className="top-room-info flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="name-desc-card flex flex-col gap-4">
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

            <div className="desc text-gray-700 text-sm">
              {roomData.description}
            </div>
          </div>

          <div className="right-top-info">
            <CopyInvite invite_link={roomData.invite_link} />
          </div>
        </section>

        <section className="active-task-players flex justify-center pt-20">
          <div
            className={cn(
              "active-task xl:w-1/5 bg-sky-600 min-h-32 rounded-full text-center",
              "flex items-center justify-center text-white p-4",
            )}>
            {roomData.current_task_id ? (
              <div>current_task_title will be</div>
            ) : (
              <div>Wait for the owner to start a round...</div>
            )}
          </div>
        </section>

        <section className="voting flex flex-col items-center gap-8 mt-auto">
          <h3 className="text-gray-700 text-center w-full text-sm">
            Valuate a task
          </h3>

          <div className="voting-card min-w-1/2 max-w-[80%] flex flex-wrap items-center gap-8 justify-center">
            {roomData?.deck.cards.map((card) => (
              <Button variant="outline" key={card}>
                {card}
              </Button>
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
}

export default RoomPage;
