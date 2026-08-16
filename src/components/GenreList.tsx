import { Button, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenre";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre, index) => (
        <ListItem key={`${genre.genre}-${index}`} paddingY="5px">
          <Button
            fontWeight={
              genre.genre === selectedGenre?.genre ? "bold" : "normal"
            }
            onClick={() => onSelectGenre(genre)}
            variant="link"
          >
            {genre.genre}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
