import useData from "./useData";
import { Genre } from "./useGenre";

export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  platform: string;
  genre: string;
}

const useGames = (selectedGenre: Genre | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.genre } }, [
    selectedGenre?.genre,
  ]);

export default useGames;
