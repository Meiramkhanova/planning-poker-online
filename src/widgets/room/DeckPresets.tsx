import type { RoomDeckPreset } from "@/entities/room/model/types";
import DeckCard from "@/entities/room/ui/DeckCard";

interface DeckPresetsProps {
  deckPresets: RoomDeckPreset;
  onVote: (value: string) => void;
  selectedValue: string;
  disabled: boolean;
}

function DeckPresets({
  deckPresets,
  onVote,
  selectedValue,
  disabled,
}: DeckPresetsProps) {
  return (
    <div className="voting-card min-w-1/2 max-w-[80%] flex flex-wrap items-center gap-4 md:gap-8 justify-center">
      {deckPresets?.cards.map((card) => (
        <DeckCard
          key={card}
          cardValue={card}
          onClick={onVote}
          isActive={selectedValue === card}
          disabled={disabled}
        />
      ))}
    </div>
  );
}

export default DeckPresets;
