import Link from "next/link";
import { useCommentsByPostId } from "src/hooks/useFetchArray";

export const CommentsByPostId = (props) => {
  const {
    data,
    error: commenterror,
    isLoading: commentloading,
  } = useCommentsByPostId(props.id);


  if (commentloading) {
    return <div>ローディング中</div>;
  }

  if (commenterror) {
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
