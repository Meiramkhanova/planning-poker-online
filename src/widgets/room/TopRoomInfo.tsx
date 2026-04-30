import CopyInvite from "@/features/invite-players/ui/CopyInvite";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/utils/cn";
import { MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";

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
    <section className="top-room-info flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <Button asChild>
        <Link to="/dashboard">
          <MoveLeft />

          <span>Dashboard </span>
        </Link>
      </Button>
      <div className="name-desc-card flex flex-col gap-4">
        <div className="left-top-info flex items-center gap-4 justify-center">
          <div className="room-name">{roomName}</div>

          <Badge
            className={cn(
              status === "active"
                ? "bg-green-50 text-green-700 border-green-200"
                : "bg-gray-50 text-gray-500 border-gray-200",
            )}>
            {status}
          </Badge>
        </div>

        <div className="desc text-gray-700 text-sm">{description}</div>
      </div>

      <div className="right-top-info">
        <CopyInvite invite_link={invite_link} />
      </div>
    </section>
  );
}

export default TopRoomInfo;
