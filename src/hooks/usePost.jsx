import { useRouter } from "next/router";
import { fetcher } from "src/utils/fetcher";
import useSWRImmutable from "swr/immutable";

export const usePost = (id) => {
  const { data, error } = useSWRImmutable(
    id ? `https://jsonplaceholder.typicode.com/posts/${id}` : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
