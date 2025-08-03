import useGames from "@/hooks/useGames";

function GameGrid() {
  const { games, error } = useGames();

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