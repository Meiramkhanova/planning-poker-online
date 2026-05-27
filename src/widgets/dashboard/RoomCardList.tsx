import type { Room } from "@/entities/room/model/types";
import RoomCard from "@/entities/room/ui/RoomCard";
import { CopyInvite } from "@/shared/ui/CopyInvite";
import { OpenRoomBtn } from "@/shared/ui/OpenRoomBtn";

function RoomCardList({ rooms }: { rooms: Room[] }) {
  return (
    <div className="rooms grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {rooms?.map((room) => (
        <RoomCard
          room={room}
          key={room.id}
          actions={
            <div className="btns grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
              <CopyInvite inviteLink={room.invite_link} />

              <OpenRoomBtn roomId={room.id} />
            </div>
          }
        />
      ))}
    </div>
  );
}

export default RoomCardList;
