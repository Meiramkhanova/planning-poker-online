import { cn } from "@/lib/utils";

interface PersonUI {
  id: number;
  name: string;
  chosedCard: boolean;
  bgColor: string;
  className: string;
}

function PersonUI({ person }: { person: PersonUI }) {
  return (
    <div
      className={cn(
        "person-ui absolute flex flex-col items-center gap-1.5 w-fit",
        person.className,
      )}>
      <div
        className={cn(
          "top-name border-2 border-white bg-green-100 uppercase size-10",
          "rounded-full flex items-center justify-center shadow-xs",
          person.bgColor,
        )}>
        {person.name
          .split(" ")
          .map((p) => p[0])
          .join("")}
      </div>
      <div
        className={cn(
          "bottom-card w-1/2 h-8  rounded border border-sky-700",
          "flex items-center justify-center font-bold",
          person.chosedCard ? "bg-sky-600 text-white" : "bg-white text-sky-600",
        )}>
        {person.chosedCard && "?"}
      </div>
    </div>
  );
}

export default PersonUI;
