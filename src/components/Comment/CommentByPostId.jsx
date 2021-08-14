import Link from "next/link";
import { useFetchArray } from "src/hooks/useFetchArray";
import { usePost } from "src/hooks/usePost";

export const CommentByPostId = () => {
  const { post, error: posterror, isLoading: postloading } = usePost();
  const {
    data,
    error: commenterror,
    isLoading: commentloading,
  } = useFetchArray(
    `https://jsonplaceholder.typicode.com/comments/?postId=${
      post ? post.id : null
    }`
  );

  console.log(data);

  if (postloading || commentloading) {
    return <div>ローディング中</div>;
  }

  if (posterror || commenterror) {
    return <div>エラーが発生しました</div>;
  }

  return (
    <ol>
      {data.map((item) => {
        return (
          <li key={item.id}>
            <Link href={`/comments/${item.id}`}>
              <a>{item.name}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
