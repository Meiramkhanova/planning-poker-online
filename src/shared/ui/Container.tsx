import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ContainerProps {
  children?: ReactNode;
  className?: string;
}

function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "container mx-auto px-6 md:px-8 xl:px-10 2xl:px-12",
        className,
      )}>
      {children}
    </div>
  );
}

export default Container;
