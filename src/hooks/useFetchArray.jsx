import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useFetchArray = (url) => {
  const { data, error } = useSWR(url, fetcher);
  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  };
};

export const useUsers = () => {
  return useFetchArray("https://jsonplaceholder.typicode.com/users");
};

export const usePosts = () => {
  return useFetchArray("https://jsonplaceholder.typicode.com/posts");
};
export const useComments = () => {
  return useFetchArray("https://jsonplaceholder.typicode.com/comments");
};
