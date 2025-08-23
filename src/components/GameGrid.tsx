import useGames from "@/hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { type GameQuery } from "@/App";


interface Props {
  gameQuery: GameQuery;

}

function GameGrid({gameQuery}:Props) {
  const { data, error,isLoading } = useGames(gameQuery);
  const skeltons = [1,2,3,4,5,6];

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={3} padding={10} />
      {isLoading &&
        skeltons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </>
  );
}

export default GameGrid