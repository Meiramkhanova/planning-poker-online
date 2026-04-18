import { cn } from "@/lib/utils";
import Logo from "@/shared/icons/PlanPoker";
import { Eye } from "lucide-react";

function PokerUi() {
  return (
    <div className="poker-ui border border-sky-100 rounded-xl overflow-hidden text-xs text-gray-600 bg-sky-50">
      <div className="ui-top p-4 bg-white flex items-center justify-between border-b border-sky-100">
        <div className="logo-name flex items-center gap-2.5">
          <div className="logo bg-sky-600 size-5 flex items-center justify-center rounded-md">
            <Logo className="fill-white size-3" />
          </div>

          <div className="text-sky-800 font-medium text-sm">PlanPoker</div>
        </div>

        <div className="time-voting flex flex-col text-center">
          <div className="text-sm font-medium text-gray-800">37:09</div>

          <div>Voting is underway</div>
        </div>

        <div className="count-online"> 4 online</div>
      </div>

      <div className="ui-bottom p-4 flex flex-col gap-16">
        <div className="current-task border border-sky-100 bg-white p-4 rounded-lg flex flex-col gap-1">
          <p className="uppercase">Current Task</p>

          <p className="text-gray-800 font-medium capitalize">
            Implement OAuth 2.0 authorization
          </p>
        </div>

        <div className="ui-table relative flex justify-center w-full">
          <div
            className={cn(
              "border border-sky-200 h-24 w-3/5 rounded-full bg-sky-200/65 justify-center",
              "text-white flex items-center gap-1.5 text-sm font-medium border-sky-200",
            )}>
            <Eye className="size-4" />

            <span>Show Cards</span>
          </div>
        </div>

        <div className="valuation">
          <p className="text-center">Valuate a task</p>
        </div>
      </div>
    </div>
  );
}

export default PokerUi;
