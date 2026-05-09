import type { Task } from "@/entities/task/model/types";

import { cn } from "@/shared/utils/cn";

interface TaskCardProps {
  task: Task;
  actionsToRender: React.ReactNode;
  footerActions: React.ReactNode;
  className?: string;
  statusClassName?: string;
}

function TaskCard({
  task,
  actionsToRender,
  footerActions,
  className,
  statusClassName,
}: TaskCardProps) {
  return (
    <div
      className={cn(
        "task-card relative group p-4 pt-2 border rounded-md cursor-pointer",
        "bg-white shadow-sm hover:border-sky-900/50 transition-all duration-300",
        className,
      )}>
      <div className="flex justify-between items-center">
        <span
          className={cn(
            "text-[9px] uppercase px-2 py-0.5 rounded border border-gray-200",
            "tracking-wider font-semibold text-sky-700 bg-sky-50",
            statusClassName,
          )}>
          {task.status}
        </span>

        {actionsToRender}
      </div>

      <h4 className="font-semibold text-gray-700 text-sm leading-none">
        {task.title}
      </h4>

      {task.description && (
        <p className="text-xs text-gray-500 line-clamp-5 leading-relaxed pt-4">
          {task.description}
        </p>
      )}

      <div className="actions flex items-center justify-between pt-4">
        {footerActions}
      </div>
    </div>
  );
}

export default TaskCard;
