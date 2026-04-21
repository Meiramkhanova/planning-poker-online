import { Button } from "@/components/ui/button";

import { useRooms } from "@/entities/room/model/useRooms";
import Container from "@/shared/ui/Container";
import LoadingElement from "@/shared/ui/LoadingElement";
import EmptyRooms from "@/widgets/dashboard/EmptyRooms";
import RoomCard from "@/widgets/dashboard/RoomCard";
import { Plus } from "lucide-react";

function DashboardPage() {
  const { data: rooms, isLoading, isError } = useRooms();

  if (isLoading) {
    return <LoadingElement />;
  }

  console.log("rooms", rooms);

  if (isError) {
    return (
      <div className="error-wrapper py-8 size-full flex items-center justify-center text-center">
        <Container>
          <h2 className="text-sky-700 text-lg">Error loading rooms</h2>

          <p className="text-gray-500 text-sm">Try refreshing the page later</p>
        </Container>
      </div>
    );
  }

  return (
    <Container className="size-full">
      <div className="rooms-wrapper py-8 xl:py-12 flex flex-col gap-8 h-full">
        <div className="rooms-header flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
          <div>
            <h1 className="text-xl text-sky-700 font-medium">My Rooms</h1>
            <p className="text-gray-700">Manage your planning poker sessions</p>
          </div>

          <Button>
            <Plus className="size-4" />

            <span>Create Room</span>
          </Button>
        </div>

        {rooms?.length === 0 ? (
          <EmptyRooms />
        ) : (
          <div className="rooms grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms?.map((room) => (
              <RoomCard room={room} key={room.id} />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}

export default DashboardPage;
