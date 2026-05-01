import { Button } from "@/shared/ui/button";
import { useRoomById } from "@/entities/room/model/useRoomById";
import Container from "@/shared/ui/Container";
import LoadingElement from "@/shared/ui/LoadingElement";
import { useParams } from "react-router-dom";
import TopRoomInfo from "@/widgets/room/TopRoomInfo";
import { cn } from "@/shared/utils/cn";

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
        <TopRoomInfo
          roomName={roomData.name}
          status={roomData.status}
          description={roomData.description}
          invite_link={roomData.invite_link}
        />

        <section className="active-task-players flex justify-center h-full items-center">
          <div
            className={cn(
              "active-task xl:min-w-1/5 bg-sky-600 h-fit rounded-full text-center",
              "flex items-center justify-center text-white p-8",
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
