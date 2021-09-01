import { PostsByPostId } from "src/components/Posts/PostsByPostId";
import { UserByUserId } from "src/components/Users/UsersByUserId";
import { useComment } from "src/hooks/useComment";

export const Comment = () => {
  const { data, error, isLoading } = useComment();

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h1>{data?.name}</h1>
      <p>{data?.email}</p>
      <p>{data?.body}</p>
      <h1>作品</h1>
      <PostsByPostId id={data.postId} />
      <h1>作者</h1>
      <UserByUserId id={data.id} />
    </div>
  );
};
