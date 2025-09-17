// src/components/GenreList.tsx
import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-urls";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
  Box,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre?: Genre | null;
}

function GenreList({ onSelectGenre, selectedGenre }: Props) {
  const { data, isLoading, error } = useGenres();

  if (error) return <Text color="red.500">Failed to load genres</Text>;
  if (isLoading) return <Spinner />;

  return (
    <Box padding={{ base: 2, lg: 0 }}>
      <Heading fontSize={{ base: "xl", lg: "2xl" }} paddingY={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={{ base: "3px", lg: "5px" }}>
            <HStack spacing={{ base: 2, lg: 3 }}>
              {" "}
              {/* Reduced spacing: 2 on mobile, 3 on desktop */}
              <Image
                boxSize={{ base: "24px", lg: "32px" }}
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
                alt={`${genre.name} image`}
              />
              <Button
                textAlign="left"
                whiteSpace="normal"
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                fontSize={{ base: "md", lg: "lg" }}
                variant="link"
                width="full"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default GenreList;
