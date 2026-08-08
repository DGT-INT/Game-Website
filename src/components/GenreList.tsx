import useGenres from "../hooks/useGenre";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.genre}>{genre.genre}</li>
      ))}
    </ul>
  );
};

export default GenreList;
