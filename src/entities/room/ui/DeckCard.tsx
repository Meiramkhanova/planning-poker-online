import { Button } from "@/shared/ui/button";

function DeckCard({ card }: { card: string }) {
  return (
    <Button size="sm" className="rounded" variant="outline">
      {card}
    </Button>
  );
}

export default DeckCard;
