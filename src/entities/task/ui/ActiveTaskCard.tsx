import { cn } from "@/shared/utils/cn";
import type { Task } from "../model/types";

function ActiveTaskCard({
  activeTask,
  isRoundActive,
  isOwner,
}: {
  activeTask?: Task;
  isRoundActive: boolean;
  isOwner: boolean;
}) {
  if (!activeTask) {
    return (
      <div
        className={cn(
          "active-task min-w-1/3 xl:min-w-1/5 bg-sky-600 h-fit rounded-full text-center",
          "flex items-center justify-center text-white p-8 text-base",
        )}>
        No Active Task
      </div>
    );
  }

  return (
    <div
      className={cn(
        "active-task min-w-1/3 xl:min-w-1/5 bg-sky-600 h-fit rounded-full text-center",
        "flex items-center justify-center text-white p-8 text-base",
        isRoundActive && "ring-4 ring-emerald-400/50",
      )}>
      <div>{activeTask.title}</div>
    </div>
  );
}

export default ActiveTaskCard;
