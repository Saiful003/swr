import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export function usePost() {
  const { data, error } = useSWR("/api/v1", fetcher);

  return {
    posts: data.message,
    isLoading: !error && !data,
    isError: error,
  };
}
