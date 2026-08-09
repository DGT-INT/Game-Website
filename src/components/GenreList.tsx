import { List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenre";

const GenreList = () => {
  const { data } = useGenres();
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
