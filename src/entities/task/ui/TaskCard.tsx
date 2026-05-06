import type { Task } from "@/entities/task/model/types";

import { cn } from "@/shared/utils/cn";

interface TaskCardProps {
  task: Task;
  actionsToRender?: React.ReactNode;
}

function TaskCard({ task, actionsToRender }: TaskCardProps) {
  return (
    <div
      className={cn(
        "task-card relative group p-4 pt-2 border rounded-md cursor-pointer",
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

        {actionsToRender}
      </div>

      <h4 className="font-semibold text-gray-700 text-sm leading-none">
        {task.title}
      </h4>

      {task.description && (
        <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed pt-4">
          {task.description}
        </p>
      )}

      <div className="flex items-center justify-between pt-4">
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
  );
}

export default TaskCard;
