import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useUser = (id) => {
  const { data, error } = useSWR(
    id ? `https://jsonplaceholder.typicode.com/users/${id}` : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading: !error && !data,
  };
};
