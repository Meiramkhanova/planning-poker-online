import type { Task } from "@/entities/task/model/types";

import { cn } from "@/shared/utils/cn";

interface TaskCardProps {
  task: Task;
  actionsToRender: React.ReactNode;
  footerActions: React.ReactNode;
  className?: string;
  statusClassName?: string;
  isOwner?: boolean;
}

function TaskCard({
  task,
  actionsToRender,
  footerActions,
  className,
  statusClassName,
  isOwner,
}: TaskCardProps) {
  return (
    <div
      className={cn(
        "task-card relative group p-4 border rounded-md cursor-pointer",
        "bg-white shadow-sm hover:border-sky-900/50 transition-all duration-300",
        className,
      )}>
      <div className="flex justify-between items-center">
        <span
          className={cn(
            "text-[10px] uppercase px-2 py-0.5 rounded border border-gray-200",
            "tracking-wider font-semibold text-sky-700 bg-sky-50",
            statusClassName,
          )}>
          {task.status}

          {task.status === "estimated" && task.estimate_value && (
            <span className="lowercase"> : {task.estimate_value} pt</span>
          )}
        </span>

        {actionsToRender}
      </div>

      <h4
        className={cn(
          "font-medium text-gray-700 text-sm leading-none",
          !isOwner ? "pt-4" : "pt-2",
        )}>
        {task.title}
      </h4>

      {task.description && (
        <p className="text-xs text-gray-500 line-clamp-5 leading-relaxed pt-4">
          {task.description}
        </p>
      )}

      {footerActions}
    </div>
  );
}

export default TaskCard;
