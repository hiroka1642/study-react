import Link from "next/link";
import { useComment } from "src/hooks/useComment";
import { useFetchArray } from "src/hooks/useFetchArray";

export const PostByPostId = () => {
  const {
    data: comment,
    error: commenterror,
    isLoading: commentloading,
  } = useComment();
  const {
    data: post,
    error: posterror,
    isLoading: postloading,
  } = useFetchArray(
    comment
      ? `https://jsonplaceholder.typicode.com/posts/?id=${comment.postId}`
      : null
  );

  if (postloading || commentloading) {
    return <div>ローディング中</div>;
  }

  if (posterror || commenterror) {
    return <div>エラーが発生しました</div>;
  }

  return (
    <div>
      {post.map((item) => {
        return (
          <p key={item.id}>
            <Link href={`/posts/${item.id}`}>
              <a>{item.title}</a>
            </Link>
          </p>
        );
      })}
    </div>
  );
};
