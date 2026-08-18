import useData from "./useData";

export interface Genre {
  genre: string;
}

const useGenres = () => {
  const { data, error, isLoading } = useData<Genre>("/games");

  const uniqueGenres = [...new Set(data.map((item) => item.genre))].map(
    (genre) => ({ genre }),
  );

  return { data: uniqueGenres, error, isLoading };
};

export default useGenres;
