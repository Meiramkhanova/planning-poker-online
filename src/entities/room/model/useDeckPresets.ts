import { useQuery } from "@tanstack/react-query";
import { getRoomsDeckPresetsRequest } from "../api/deckPresets";

export const useDeckPresets = () => {
  return useQuery({
    queryKey: ["deck-presets"],
    queryFn: getRoomsDeckPresetsRequest,
  });
};
