import Link from "next/link";
import { useUsersByUserId } from "src/hooks/useFetchArray";

export const UserByUserId = (props) => {
  const {
    data: user,
    error: usererror,
    isLoading: userloading,
  } = useUsersByUserId(props.id);

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
