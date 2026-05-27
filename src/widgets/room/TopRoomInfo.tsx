import { Badge } from "@/shared/ui/badge";
import { cn } from "@/shared/utils/cn";
import type { Task } from "@/entities/task/model/types";
import BacklogInfo from "../task-backlog/BacklogInfo";
import { Button } from "@/shared/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { CreateInvite } from "@/features/generate-invitation";
import { InvitePlayers } from "@/features/invite-players";

interface TopRoomInfoProps {
  roomName: string;
  status: string;
  description: string;
  inviteLink: string;
  tasks: Task[];
  isOwner: boolean;
  roomId: string;
}

function TopRoomInfo({
  roomName,
  status,
  description,
  inviteLink,
  tasks,
  isOwner,
  roomId,
}: TopRoomInfoProps) {
  return (
    <section
      className={cn(
        "top-room-info flex flex-col sm:flex-row sm:items-center",
        "gap-4 sm:gap-8 md:gap-12 xl:gap-24 2xl:gap-64",
      )}>
      <div className="name-desc-card flex flex-col flex-1">
        <div className="flex items-center gap-4">
          <Link to="/dashboard">
            <Button className="size-10 flex items-center justify-center">
              <ChevronLeft className="size-5" />
            </Button>
          </Link>

          <div className="flex flex-col">
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
        </div>
      </div>

      <div className="right-top-info flex flex-col gap-4 sm:flex-row">
        <InvitePlayers inviteLink={inviteLink} />

        <CreateInvite roomId={roomId} />

        <BacklogInfo tasks={tasks} isOwner={isOwner} roomId={roomId} />
      </div>
    </section>
  );
}

export default TopRoomInfo;
