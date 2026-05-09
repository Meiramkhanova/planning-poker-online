import { cn } from "@/shared/utils/cn";
import type { Task } from "../model/types";

function ActiveTaskCard({ activeTask }: { activeTask?: Task }) {
  if (!activeTask) {
    return (
      <div
        className={cn(
          "active-task min-w-1/3 xl:min-w-1/5 bg-sky-600 h-fit rounded-full text-center",
          "flex items-center justify-center text-white p-8 text-base",
        )}>
        Wait for the owner to start a round...
      </div>
    );
  }

  return (
    <div
      className={cn(
        "active-task min-w-1/3 xl:min-w-1/5 bg-sky-600 h-fit rounded-full text-center",
        "flex items-center justify-center text-white p-8 text-base",
      )}>
      <div>{activeTask.title}</div>
    </div>
  );
}

export default ActiveTaskCard;
