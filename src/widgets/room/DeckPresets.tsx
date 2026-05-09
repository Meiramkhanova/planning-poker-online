import type { FullRoom } from "@/entities/room/model/types";
import DeckCard from "@/entities/room/ui/DeckCard";

function DeckPresets({ roomData }: { roomData: FullRoom }) {
  return (
    <div className="voting-card min-w-1/2 max-w-[80%] flex flex-wrap items-center gap-4 md:gap-8 justify-center">
      {roomData?.deck.cards.map((card) => (
        <DeckCard key={card} card={card} />
      ))}
    </div>
  );
}

export default DeckPresets;
