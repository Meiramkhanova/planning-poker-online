import { Button } from "@/components/ui/button";
import { useRooms } from "@/entities/room/model/useRooms";
import { cn } from "@/lib/utils";
import Container from "@/shared/ui/Container";
import LoadingElement from "@/shared/ui/LoadingElement";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

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
        <div className="rooms-header flex items-center justify-between gap-8">
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
          <div
            className={cn(
              "empty-rooms flex flex-col items-center justify-center gap-4 h-full transition-all duration-300",
              "border-2 border-dashed rounded-2xl bg-gray-50/50 hover:bg-gray-50",
            )}>
            <p className="text-gray-500">
              No rooms found. Create your first planning session!
            </p>
            <Button>
              <Plus className="size-4" />

              <span>Create first room</span>
            </Button>
          </div>
        ) : (
          <div className="rooms grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            rooms
          </div>
        )}
      </div>
    </Container>
  );
}

export default DashboardPage;
