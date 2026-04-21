import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

function EmptyRooms() {
  return (
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
  );
}

export default EmptyRooms;
