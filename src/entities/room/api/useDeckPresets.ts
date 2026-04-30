import { getRoomsDeckPresetsRequest } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";

export const useDeckPresets = () => {
  return useQuery({
    queryKey: ["deck-presets"],
    queryFn: getRoomsDeckPresetsRequest,
  });
};
