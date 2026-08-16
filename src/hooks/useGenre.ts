import useData from "./useData";

export interface Genre {
  genre: string;
}

const useGenres = () => {
  const { data, error } = useData<Genre>("/games");

  const uniqueGenres = [...new Set(data.map((item) => item.genre))].map(
    (genre) => ({ genre }),
  );

  return { data: uniqueGenres, error };
};

export default useGenres;
