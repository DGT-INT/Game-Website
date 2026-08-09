import useData from "./useData";

export interface Genre {
  genre: string;
}

const useGenres = () => useData<Genre>("/games");

export default useGenres;
