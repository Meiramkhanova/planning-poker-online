import { useRoomById } from "@/entities/room/model/useRoomById";
import Container from "@/shared/ui/Container";
import LoadingElement from "@/shared/ui/LoadingElement";
import { useParams } from "react-router-dom";
import TopRoomInfo from "@/widgets/room/TopRoomInfo";
import Participants from "@/widgets/room/Participants";
import DeckPresets from "@/widgets/room/DeckPresets";
import ActiveTaskCard from "@/entities/task/ui/ActiveTaskCard";
import { useRoomSocket } from "@/entities/room/model/useRoomSocket";

function RoomPage() {
  const { roomId } = useParams<{ roomId: string }>();

  const { data, isLoading, isError } = useRoomById(roomId ?? "");

  useRoomSocket(roomId ?? "");

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
  const participants = data.participants || [];
  const selfId = data.self_participant_id;

  const isOwner = participants.find((p) => p.id === selfId)?.role === "owner";

  const activeTask = data.tasks.find((t) => t.id === roomData.current_task_id);

  return (
    <Container className="size-full">
      <div className="py-8 flex flex-col gap-8 h-full">
        <TopRoomInfo
          roomName={roomData.name}
          status={roomData.status}
          description={roomData.description}
          inviteLink={roomData.invite_link}
          tasks={data?.tasks}
          isOwner={isOwner}
          roomId={roomId ?? ""}
        />

        <section
          className="relative active-task-players flex justify-center h-full items-center overflow-hidden"
          style={{
            fontSize: "min(5vw, 16px)",
          }}>
          <ActiveTaskCard activeTask={activeTask} />

          <Participants participants={participants} selfId={selfId} />
        </section>

        <section className="voting flex flex-col items-center gap-4 mt-auto pt-8">
          <h3 className="text-gray-700 text-center w-full text-sm">
            Valuate a task
          </h3>

          <DeckPresets roomData={roomData} />
        </section>
      </div>
    </Container>
  );
}

export default RoomPage;
