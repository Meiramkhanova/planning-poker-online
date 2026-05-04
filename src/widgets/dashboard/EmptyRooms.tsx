import { cn } from "@/shared/utils/cn";

function EmptyRooms() {
  return (
    <div
      className={cn(
        "empty-rooms flex flex-col items-center justify-center gap-4 h-full transition-all duration-300",
        "border-2 border-dashed rounded-2xl bg-gray-50/50 hover:bg-gray-50",
      )}>
      <p className="text-gray-600">
        No rooms found. Create your first planning session!
      </p>
    </div>
  );
}

export default EmptyRooms;
