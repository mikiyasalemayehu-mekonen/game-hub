import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import type { Game, GamesResponse } from "@/types/game";



const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading,setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    const fetchGames = async () => {
      try {
        const response = await apiClient.get<GamesResponse>("/games", {
          signal: controller.signal,
        });
        setGames(response.data.results);
        setLoading(false)
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message || "Error fetching games");
        }
        else if (error instanceof CanceledError) {
          return
        }
         else {
          setError("An unexpected error occurred");
        }
      }
    };

    fetchGames();

    return () => controller.abort();
  }, []);

  return { games, error,isLoading };
};

export default useGames;
