import { cn } from "@/lib/utils";

function MiniCard({ order }: { order: number }) {
  return (
    <div
      className={cn(
        "mini-card border border-sky-700 w-8 h-10 rounded-lg bg-white",
        "flex items-center justify-center text-sky-700 font-medium",
        "hover:bg-sky-700 hover:text-white transition-colors duration-300 cursor-pointer",
      )}>
      {order}
    </div>
  );
}

export default MiniCard;
