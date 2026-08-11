import { List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenre";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre, index) => (
        <ListItem key={`${genre.genre}-${index}`} paddingY="5px">
          {genre.genre}
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
