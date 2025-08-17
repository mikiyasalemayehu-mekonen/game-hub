import { Badge } from '@chakra-ui/react';
import React from 'react'

interface Props {
  score: number;
}

function CriticScore({score}: Props) {
  return (
    <Badge fontSize="14px" paddingX={2} borderRadius="4px" colorScheme={score > 75 ? 'green' : score > 50 ? 'yellow' : 'red'}>
      CriticScore: {score}
    </Badge>
  )
}

export default CriticScore