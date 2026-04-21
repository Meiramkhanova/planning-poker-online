import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Room } from "@/entities/room/model/types";
import { cn } from "@/lib/utils";
import { formatRelativeTime } from "@/shared/lib/formatRelativeTime";
import { MoveUpRight } from "lucide-react";

function RoomCard({ room }: { room: Room }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between gap-4">
            <div className="profile flex items-center gap-2">
              <div
                className={cn(
                  "profile-circle rounded bg-gray-100 uppercase text-gray-700",
                  "flex items-center justify-center size-10 text-sm",
                )}>
                {room.name.charAt(0)}
              </div>

              <div className="name-id">
                <p className="text-gray-700">{room.name}</p>

                <p className="text-xs text-gray-500 text-wrap">{room.id}</p>
              </div>
            </div>

            {/* {room?.active_task_title ? (
              <Badge>{room?.active_task_title}</Badge>
            ) : (
              <Badge variant="outline">Idle</Badge>
            )} */}
          </div>
        </CardTitle>

        {room?.description && (
          <CardDescription className="pt-4 line-clamp-2">
            {room?.description}
          </CardDescription>
        )}

        <Separator className="mt-4" />
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="participants_count text-sm">
            <p className="text-gray-500 text-xs">Participants</p>
            <p className="text-gray-700">{room?.participants_count}</p>
          </div>

          <div className="last-activity text-sm">
            <p className="text-gray-500 text-xs">Last activity</p>
            <p className="text-gray-700">
              {formatRelativeTime(room.last_activity_at)}
            </p>
          </div>

          <div className="active-task text-sm sm:col-span-2">
            <p className="text-gray-500 text-xs">Active task</p>

            <p className="text-gray-700">
              {room?.active_task_title
                ? "room?.active_task_title"
                : "No task running"}
            </p>
          </div>

          <div className="created text-sm sm:col-span-2">
            <p className="text-gray-500 text-xs">Created</p>

            <p className="text-gray-700">
              {new Date(room.created_at).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <div className="btns grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
          <Button>Copy Invite</Button>

          <Button className="border border-gray-200" variant="outline">
            <span>Open</span>

            <MoveUpRight className="size-3.5" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default RoomCard;
