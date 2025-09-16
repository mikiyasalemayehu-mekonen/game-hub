import type { Game } from "@/types/game";
import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-urls";
import Emoji from "./Emoji";

interface Props {
  game:  Game;
}

function GameCard({game}: Props) {
  return (
    <Card>
     <Image
        src={getCroppedImageUrl(game.background_image)}
      />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList platforms={game.platforms.map(({ platform }) => platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
         <Heading fontSize='2xl'>{game.name}<Emoji rating={game.rating_top} /></Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard