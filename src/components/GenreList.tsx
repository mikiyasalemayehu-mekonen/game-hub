import useGenres, { type Genre } from '@/hooks/useGenres'
import getCroppedImageUrl from '@/services/image-urls';
import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';

interface Props{
  onSelectGenre:(genre:Genre) => void;
  selectedGenre?: Genre | null;
}

function GenreList({onSelectGenre, selectedGenre}:Props) {
    const {data,isLoading,error} = useGenres();
   if (error) return <Text color="red.500">Failed to load genres</Text>;
   if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Button  fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'} onClick={()=>onSelectGenre(genre )} fontSize='lg' variant='link'>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList