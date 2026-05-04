import CopyInvite from "@/features/invite-players/ui/CopyInvite";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/utils/cn";
import { MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";
import BacklogInfo from "./BacklogInfo";

interface TopRoomInfoProps {
  roomName: string;
  status: string;
  description: string;
  invite_link: string;
}

function TopRoomInfo({
  roomName,
  status,
  description,
  invite_link,
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

        <BacklogInfo />

        {/* <Participants /> */}
      </div>
    </section>
  );
}

export default TopRoomInfo;
