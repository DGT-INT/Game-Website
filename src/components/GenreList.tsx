import React from "react";
import useGenres from "../hooks/useGenre";
import { Game } from "../hooks/useGames";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.genre}>{genre.genre}</li>
      ))}
    </ul>
  );
};

export default GenreList;
