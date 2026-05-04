import CopyInvite from "@/features/invite-players/ui/CopyInvite";
import { Badge } from "@/shared/ui/badge";
import { cn } from "@/shared/utils/cn";
import BacklogInfo from "./BacklogInfo";
import type { Task } from "@/entities/task/model/types";

interface TopRoomInfoProps {
  roomName: string;
  status: string;
  description: string;
  invite_link: string;
  sortedTasks: Task[];
  isOwner: boolean;
}

function TopRoomInfo({
  roomName,
  status,
  description,
  invite_link,
  sortedTasks,
  isOwner,
}: TopRoomInfoProps) {
  return (
    <section className="top-room-info flex flex-col gap-4 sm:gap-8 sm:flex-row sm:items-center sm:justify-between">
      <div className="name-desc-card flex flex-col">
        <div className="left-top-info flex items-center gap-4">
          <div className="room-name text-gray-700">{roomName}</div>

          <Badge
            className={cn(
              status === "active"
                ? "bg-green-50 text-green-700 border-green-200"
                : "bg-gray-50 text-gray-500 border-gray-200",
            )}>
            {status}
          </Badge>
        </div>

        <div className="desc text-gray-500 text-sm">{description}</div>
      </div>

      <div className="right-top-info flex flex-col gap-4 sm:flex-row">
        <CopyInvite invite_link={invite_link} />

        <BacklogInfo sortedTasks={sortedTasks} isOwner={isOwner} />

        {/* <Participants /> */}
      </div>
    </section>
  );
}

export default TopRoomInfo;
