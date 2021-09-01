import Head from "next/head";
import { useRouter } from "next/router";
import { CommentsByPostId } from "src/components/Comments/CommentsByPostId";
import { UserByPostId } from "src/components/User/UserByPostId";
import { usePost } from "src/hooks/usePost";

export const Post = () => {
  const router = useRouter();
  const { data, error, isLoading } = usePost(router.query.id);

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data?.title}</title>
      </Head>

      <h1>{data?.title}</h1>
      <p>{data?.body}</p>
      <UserByPostId id={data.userId} />
      <h1>コメント</h1>
      <CommentsByPostId id={data.id} />
    </div>
  );
};
