import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useState, useEffect } from "react";



interface FetchResponse<T>{
    count:number;
    results:T[];
}
const useData = <T>(endpoint:string) =>{
   
      const [data, setData] = useState<T[]>([]);
      const [error, setError] = useState("");
      const [isLoading,setLoading] = useState(false)
    
      useEffect(() => {
        const controller = new AbortController();
    
        setLoading(true);
        const fetchGames = async () => {
          try {
            const response = await apiClient.get<FetchResponse<T>>(endpoint, {
              signal: controller.signal,
            });
            setData(response.data.results);
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
    
      return { data, error,isLoading };
    };
    
   
    

export default useData;