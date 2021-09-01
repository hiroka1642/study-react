import Link from "next/link";
import { usePostsByPostId } from "src/hooks/useFetchArray";

export const PostsByPostId = (props) => {
  const {
    data: post,
    error: posterror,
    isLoading: postloading,
  } = usePostsByPostId(props.id);

  if (postloading) {
    return <div>ローディング中</div>;
  }

  if (posterror) {
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
