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
  const participants = data.participants || [];
  const selfId = data.self_participant_id;

  const selfParticipant = participants.find((p) => p.id === selfId);
  const selfSeatIndex = selfParticipant?.seat_index ?? 0;

  const isOwner = participants.find((p) => p.id === selfId)?.role === "owner";

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
          <div
            className={cn(
              "active-task xl:min-w-1/5 bg-sky-600 h-fit rounded-full text-center",
              "flex items-center justify-center text-white p-8 text-base",
            )}>
            {roomData.current_task_id ? (
              <div>current_task_title will be</div>
            ) : (
              <div>Wait for the owner to start a round...</div>
            )}
          </div>

          {participants.map((p) => {
            const angleStep = 360 / participants.length;
            const angle = (p.seat_index - selfSeatIndex) * angleStep + 90;
            const radiusX = 38;
            const radiusY = 32;

            const x = Math.cos((angle * Math.PI) / 180) * radiusX;
            const y = Math.sin((angle * Math.PI) / 180) * radiusY;

            return (
              <div
                key={p.id}
                className="absolute transition-all duration-500 flex flex-col items-center gap-1"
                style={{
                  left: `${50 + x}%`,
                  top: `${50 + y}%`,
                  transform: "translate(-50%, -50%)",
                }}>
                <div
                  className={cn(
                    "flex items-center justify-center",
                    "text-white font-semibold rounded",
                    p.id === selfId && "ring-3 ring-sky-200",
                  )}
                  style={{
                    width: "3em",
                    height: "4em",
                    backgroundColor: p.avatar_color,
                    fontSize: "0.8em",
                  }}>
                  {p.has_voted ? "✓" : "?"}
                </div>

                <span
                  className={cn(
                    "text-[10px] font-bold bg-white/80 px-2 py-0.5 mt-0.5",
                    "rounded text-slate-800 border border-gray-100 whitespace-nowrap",
                  )}>
                  {p.name} {p.id === selfId ? "(You)" : ""}
                </span>
              </div>
            );
          })}
        </section>

        <section className="voting flex flex-col items-center gap-4 mt-auto pt-8">
          <h3 className="text-gray-700 text-center w-full text-sm">
            Valuate a task
          </h3>

          <div className="voting-card min-w-1/2 max-w-[80%] flex flex-wrap items-center gap-4 md:gap-8 justify-center">
            {roomData?.deck.cards.map((card) => (
              <Button
                size="sm"
                className="rounded"
                variant="outline"
                key={card}>
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
