import type { Game} from "@/types/game";
import useData from "./useData";
import type { GameQuery } from "@/App";




const useGames = (gameQuery:GameQuery) => useData<Game>("/games",{params:{genres:gameQuery.genre?.id, platforms:gameQuery.platform?.id, ordering:gameQuery.sortOrder,search:gameQuery.SearchText}},[gameQuery])

export default useGames;
