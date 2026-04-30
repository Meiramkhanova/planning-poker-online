import { Spinner } from "@/shared/ui/spinner";
import { cn } from "@/shared/utils/cn";

function LoadingElement({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "loading size-full flex items-center justify-center",
        className,
      )}>
      <Spinner className="size-10 text-sky-700" />
    </div>
  );
}

export default LoadingElement;
