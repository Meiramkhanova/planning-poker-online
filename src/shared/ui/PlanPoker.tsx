import { cn } from "@/shared/utils/cn";

function PlanPoker() {
  return (
    <div className="plan-poker flex flex-col gap-8">
      <div className="hidden cards lg:grid grid-cols-3 md:grid-cols-6 items-center gap-4 md:w-5/6">
        <div
          className={cn(
            "h-24 border border-gray-100 bg-white rounded-lg -rotate-12",
            "flex items-center justify-center font-medium text-gray-700 shadow-xs",
          )}>
          1
        </div>

        <div
          className={cn(
            "h-24 border border-gray-100 bg-white rounded-lg -rotate-6",
            "flex items-center justify-center font-medium text-gray-700 shadow-xs",
          )}>
          2
        </div>

        <div
          className={cn(
            "h-24 border border-gray-100 bg-white rounded-lg -rotate-3",
            "flex items-center justify-center font-medium text-gray-700 shadow-xs",
          )}>
          3
        </div>

        <div
          className={cn(
            "h-24 border border-gray-100 bg-white rounded-lg rotate-3",
            "flex items-center justify-center font-medium text-gray-700 shadow-xs",
          )}>
          4
        </div>

        <div
          className={cn(
            "h-24 border border-gray-100 bg-white rounded-lg rotate-6",
            "flex items-center justify-center font-medium text-gray-700 shadow-xs",
          )}>
          5
        </div>

        <div
          className={cn(
            "h-24 border border-gray-100 bg-white rounded-lg rotate-12",
            "flex items-center justify-center font-medium text-gray-700 shadow-xs",
          )}>
          6
        </div>
      </div>

      <h1 className="text-gray-700 text-4xl md:text-6xl md:w-5/6">
        Estimate together, deliver better
      </h1>

      <p className="md:w-5/6 text-gray-700">
        Real time planning poker for teams. Quick, visual, and colloborative
        estimation that helps your team align on complexity.
      </p>
    </div>
  );
}

export default PlanPoker;
