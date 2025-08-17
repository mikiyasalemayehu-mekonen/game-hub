import type { Game } from "@/types/game";
import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-urls";

interface Props {
  game:  Game;
}

function GameCard({game}: Props) {
  return (
    <Card>
     <Image
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
        borderRadius="md"
        boxSize="300px"
      />
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <HStack justifyContent={'space-between'}>
          <PlatformIconList platforms={game.platforms.map(({ platform }) => platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  )
}

export default GameCard