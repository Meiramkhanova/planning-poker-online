import { Anchor } from "lucide-react";
import type { ReactNode } from "react";

interface ReasonCardProps {
  id: number;
  name: string;
  text: string;
  icon: ReactNode;
}

function ReasonCard({ card }: { card: ReasonCardProps }) {
  return (
    <div className="reason-card rounded-xl border border-gray-100 bg-white p-4 flex flex-col gap-4 bg-linear-to-br from-white to-sky-50/80 shadow-xs">
      <div className="size-12 border-gray-100 flex shrink-0 items-center justify-center border rounded-lg">
        {card.icon}
      </div>

      <div className="text-lg text-gray-700 font-medium">{card.name}</div>

      <p className="reason-info text-gray-500">{card.text}</p>
    </div>
  );
}

export default ReasonCard;
