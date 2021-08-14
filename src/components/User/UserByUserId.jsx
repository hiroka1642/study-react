import Link from "next/link";
import { useComment } from "src/hooks/useComment";
import { useFetchArray } from "src/hooks/useFetchArray";

export const UserByUserId = () => {
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
      ? `https://jsonplaceholder.typicode.com/posts/${comment.postId}`
      : null
  );

  console.log(post);
  const {
    data: user,
    error: usererror,
    isLoading: userloading,
  } = useFetchArray(
    post
      ? ` https://jsonplaceholder.typicode.com/users/?id=${post.userId}`
      : null
  );

  console.log(user);

  if (userloading) {
    return <div>ローディング中</div>;
  }

  if (usererror) {
    return <div>エラーが発生しました</div>;
  }

  return (
    <div>
      {user.map((item) => {
        return (
          <h3 key={item.id}>
            <Link href={`/users/${item.id}`}>
              <a>{item.name}</a>
            </Link>
          </h3>
        );
      })}
    </div>
  );
};
