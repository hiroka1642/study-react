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
    <ul className="space-y-2">
      {data.map((item) => {
        return (
          <li key={item.id} className="border-b pb-2">
            <Link href={`/comments/${item.id}`}>
              <a className="block text-xl hover:text-blue-500">{item.body}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
