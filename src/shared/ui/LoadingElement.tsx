import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

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
