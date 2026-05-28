import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/utils/cn";

interface DeckCardProps {
  cardValue: string;
  onClick: (value: string) => void;
  isActive: boolean;
  disabled: boolean;
}

function DeckCard({ cardValue, onClick, isActive, disabled }: DeckCardProps) {
  return (
    <Button
      onClick={() => onClick(cardValue)}
      size="sm"
      className={cn(
        "rounded",
        isActive && "bg-sky-600 text-white rounded hover:bg-sky-700",
      )}
      variant="outline"
      disabled={disabled}>
      {cardValue}
    </Button>
  );
}

export default DeckCard;
