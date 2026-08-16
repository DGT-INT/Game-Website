import useData from "./useData";
import { Genre } from "./useGenre";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  platform: string;
  genre: string;
}

const genreMap: Record<string, string> = {
  Shooter: "shooter",
  MMORPG: "mmorpg",
  RPG: "action-rpg",
  Strategy: "strategy",
  Racing: "racing",
  Sports: "sports",
};

const platformMap: Record<string, string> = {
  "PC (Windows)": "pc",
  "Web Browser": "browser",
};

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
) =>
  useData<Game>(
    "/games",
    {
      params: {
        category: selectedGenre ? genreMap[selectedGenre.genre] : undefined,
        platform: selectedPlatform
          ? platformMap[selectedPlatform.platform]
          : undefined,
      },
    },
    [selectedGenre?.genre, selectedPlatform?.platform],
  );

export default useGames;
