import apiClient from "@/services/api-client";
import { CanceledError, type AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";



interface FetchResponse<T>{
    count:number;
    results:T[];
}
const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await apiClient.get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        });
        setData(response.data.results);
        setLoading(false);
      } catch (error) {
        if (error instanceof CanceledError) {
          return;
        }
        if (error instanceof Error) {
          setError(error.message || "Error fetching data");
        } else {
          setError("An unexpected error occurred");
        }
        setLoading(false);
      }
    };

    fetchData();
    return () => controller.abort();
  }, deps ?? []);

  return { data, error, isLoading };
};

export default useData;
