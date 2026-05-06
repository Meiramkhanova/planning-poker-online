import { cn } from "@/shared/utils/cn";

function EmptyTask() {
  return (
    <div
      className={cn(
        "empty-rooms flex flex-col items-center justify-center text-center h-full",
        "border-2 border-dashed rounded-2xl bg-gray-50/50 mx-4 mb-4 p-4",
      )}>
      <p className="text-gray-600">No tasks yet. Create one!</p>
    </div>
  );
}

export default EmptyTask;
