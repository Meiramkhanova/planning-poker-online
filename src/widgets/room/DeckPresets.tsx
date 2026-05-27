import type { RoomDeckPreset } from "@/entities/room/model/types";
import DeckCard from "@/entities/room/ui/DeckCard";

function DeckPresets({ deckPresets }: { deckPresets: RoomDeckPreset }) {
  return (
    <div className="voting-card min-w-1/2 max-w-[80%] flex flex-wrap items-center gap-4 md:gap-8 justify-center">
      {deckPresets?.cards.map((card) => (
        <DeckCard key={card} card={card} />
      ))}
    </div>
  );
}

export default DeckPresets;
