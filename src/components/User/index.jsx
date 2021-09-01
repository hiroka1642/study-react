import { useRouter } from "next/router";
import { PostsByUserId } from "src/components/Posts/PostsByUserId";
import { useUser } from "src/hooks/useUser";

export const User = () => {
  const router = useRouter();
  const { data, error, isLoading } = useUser(router.query.id);

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <h1>{data?.name}</h1>
      <h2>詳細</h2>
      <ul>
        <li>{data?.username}</li>
        <li>{data?.email}</li>
      </ul>
      <h2>投稿</h2>
      <PostsByUserId id={data.id} />
    </div>
  );
};
