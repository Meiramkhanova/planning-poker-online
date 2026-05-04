import type { Task } from "@/entities/task/model/types";
import { Button } from "@/shared/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui/sheet";
import { cn } from "@/shared/utils/cn";
import { Ellipsis, PanelRight } from "lucide-react";

function BacklogInfo({ tasks }: { tasks: Task[] }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <PanelRight />

          <span>Backlog</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle className="text-gray-700">Room Backlog</SheetTitle>

          <SheetDescription className="text-gray-500">
            Tasks for the current planning session.
          </SheetDescription>
        </SheetHeader>

        {tasks.length === 0 ? (
          <div
            className={cn(
              "empty-rooms flex flex-col items-center justify-center text-center h-full",
              "border-2 border-dashed rounded-2xl bg-gray-50/50 mx-4 mb-4 p-4",
            )}>
            <p className="text-gray-600">No tasks yet. Create one!</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3 overflow-y-auto mx-4 mb-4 h-full">
            {tasks.map((task) => (
              <div
                key={task.id}
                className={cn(
                  "relative group flex flex-col gap-4 p-4 border rounded-md cursor-pointer",
                  "bg-white shadow-sm hover:border-sky-700/50 transition-all duration-300",
                )}>
                <div className="flex justify-between items-center">
                  <span
                    className={cn(
                      "text-[9px] uppercase px-2 rounded",
                      "tracking-wider font-semibold text-sky-700 bg-sky-50",
                    )}>
                    {task.status}
                  </span>

                  <div
                    className={cn(
                      "size-10 rounded-full hover:bg-gray-100 flex items-center justify-center",
                      "transition-all duration-300",
                    )}>
                    <Ellipsis className="size-5 text-gray-600" />
                  </div>
                </div>

                <h4 className="font-semibold text-gray-700 text-sm leading-none">
                  {task.title}
                </h4>

                {task.description && (
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                    {task.description}
                  </p>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="size-1.5 rounded-full bg-slate-300" />

                    <span className="text-[10px] text-gray-400 italic">
                      {task.estimate_value ?? "Not estimated"}
                    </span>
                  </div>

                  <span className="text-[10px] text-gray-400">
                    {new Date(task.created_at).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

export default BacklogInfo;
