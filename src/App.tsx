import {
  Box,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import { type Platform } from "@/hooks/usePlatforms";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  SearchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
      minH="100vh"
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) =>
            setGameQuery({ ...gameQuery, SearchText: searchText })
          }
        >
          <IconButton
            aria-label="Open menu"
            icon={<HamburgerIcon />}
            display={{ base: "flex", lg: "none" }}
            onClick={onOpen}
            variant="outline"
            size="md"
          />
        </NavBar>
      </GridItem>

      {/* Drawer for mobile genre list */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Genres</DrawerHeader>
          <DrawerBody>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => {
                setGameQuery({ ...gameQuery, genre });
                onClose(); // Close drawer on genre selection
              }}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* GenreList for desktop */}
      <GridItem
        area="aside"
        paddingX={{ base: 0, lg: 5 }}
        display={{ base: "none", lg: "block" }}
      >
        <GenreList
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </GridItem>

      <GridItem area="main" paddingX={{ base: 2, lg: 4 }}>
        <Box>
          <GameHeading gameQuery={gameQuery} />
          <Flex
            flexDirection={{ base: "column", sm: "row" }}
            gap={{ base: 2, sm: 4 }}
            marginBottom={4}
            paddingX={{ base: 2, lg: 0 }}
          >
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
