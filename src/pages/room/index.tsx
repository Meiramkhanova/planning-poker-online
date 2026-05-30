import { useRoomById } from "@/entities/room/model/useRoomById";
import Container from "@/shared/ui/Container";
import LoadingElement from "@/shared/ui/LoadingElement";
import { useParams } from "react-router-dom";
import TopRoomInfo from "@/widgets/room/TopRoomInfo";
import Participants from "@/widgets/room/Participants";
import ActiveTaskCard from "@/entities/task/ui/ActiveTaskCard";
import { useRoomSocket } from "@/entities/room/model/useRoomSocket";
import VotingControl from "@/widgets/room/VotingControl";

function RoomPage() {
  const { roomId } = useParams<{ roomId: string }>();

  const { data, isLoading, isFetching, isError } = useRoomById(roomId ?? "");

  useRoomSocket(roomId ?? "");

  if (isLoading && isFetching) return <LoadingElement />;

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

  const isRoundActive = !!data.active_round;

  const currentRoundId = data.active_round?.id;

  const selfVoteValue = data.active_round?.self_vote_value ?? null;

  const roundStatus = data.active_round?.status ?? null;

  const roundVotes = data.active_round?.votes ?? [];

  const averageScore = data.active_round?.average_score ?? null;

  const canReveal = data?.active_round?.can_reveal ?? false;

  const suggestedResult = data?.active_round?.suggested_result;

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
          <ActiveTaskCard
            activeTask={activeTask}
            isOwner={isOwner}
            isRoundActive={isRoundActive}
          />

          <Participants
            participants={participants}
            selfId={selfId}
            roundStatus={data?.active_round?.status ?? null}
            votes={roundVotes}
          />
        </section>

        <VotingControl
          roomId={roomId ?? ""}
          currentTaskId={roomData.current_task_id}
          isRoundActive={isRoundActive}
          isOwner={isOwner}
          deck={roomData.deck}
          currentRoundId={currentRoundId ?? null}
          selfVoteValue={selfVoteValue}
          roundStatus={roundStatus}
          averageScore={averageScore}
          canReveal={canReveal}
          suggestedResult={suggestedResult}
        />
      </div>
    </Container>
  );
}

export default RoomPage;
