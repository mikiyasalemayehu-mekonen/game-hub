import React, { useEffect, useState} from 'react'
import apiClient from '@/services/api-client';

interface Game {    
    count: number;
    results: Array<{
        id: number;
        name: string;
        background_image: string;
        rating: number;
        platforms: Array<{ platform: { name: string } }>;
    }>;
}

function GameGrid() {
    const [games, setGames] = useState<Game["results"]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await apiClient.get("/games") as { data: Game };
                setGames(response.data.results);
            } catch (error) {
                setError("Error fetching games");
            }
        };
        fetchGames();
    }, []);

  return (
    <>
    {error && <p>{error}</p>}
    <ul>
        {games.map(game=><li key={game.id}>
            <h3>{game.name}</h3>
            <img src={game.background_image} alt={game.name} />
            <p>Rating: {game.rating}</p>
            <p>Platforms: {game.platforms.map(p => p.platform.name).join(", ")}</p>
        </li>)}
    </ul>
    </>
  )
}

export default GameGrid