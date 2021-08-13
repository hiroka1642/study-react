import { useRouter } from "next/router";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useUser = () => {
  const router = useRouter();
  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/users/${router.query.id}`,
    fetcher
  );

  return {
    data,
    error,
    isLoading: !error && !data,
  };

};
