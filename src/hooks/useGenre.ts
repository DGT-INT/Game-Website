import useData from "./useData";

export interface Genre {
  genre: string;
}

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
