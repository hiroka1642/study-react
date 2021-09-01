import { useUser } from "src/hooks/useUser";

export const UserByPostId = (props) => {
  const { data, error, isLoading } = useUser(props.id);

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  return <div>{data?.name ? <div>Created by {data.name}</div> : null}</div>;
};
