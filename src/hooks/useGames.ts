import useData from "./useData";
import { Genre } from "./useGenre";

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

const useGames = (selectedGenre: Genre | null) =>
  useData<Game>(
    "/games",
    {
      params: {
        category: selectedGenre ? genreMap[selectedGenre.genre] : undefined,
      },
    },
    [selectedGenre?.genre],
  );

export default useGames;
