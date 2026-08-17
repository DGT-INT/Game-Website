import { GameQuery } from "../App";
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

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        category: gameQuery.genre ? genreMap[gameQuery.genre.genre] : undefined,
        platform: gameQuery.platform
          ? platformMap[gameQuery.platform.platform]
          : undefined,
        "sort-by": gameQuery.sortOrder,
      },
    },
    [gameQuery],
  );

export default useGames;
