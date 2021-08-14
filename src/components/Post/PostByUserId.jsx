import Link from "next/link";
import { useFetchArray } from "src/hooks/useFetchArray";
import { useUser } from "src/hooks/useUser";

export const PostByUserId = () => {
  const { data: user, error: usererror, isLoading: userloading } = useUser();
  const {
    data: post,
    error: posterror,
    isLoading: postloading,
  } = useFetchArray(
    user
      ? `https://jsonplaceholder.typicode.com/posts/?userId=${user.id}`
      : null
  );

  if (postloading || userloading) {
    return <div>ローディング中</div>;
  }

  if (posterror || usererror) {
    return <div>エラーが発生しました</div>;
  }

  return (
    <ol>
      {post.map((item) => {
        return (
          <li key={item.id}>
            <Link href={`/posts/${item.id}`}>
              <a>{item.title}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
