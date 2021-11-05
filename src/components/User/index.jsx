import { useRouter } from "next/router";
import { PostsByUserId } from "src/components/Posts/PostsByUserId";
import { useUser } from "src/hooks/useUser";

export const User = () => {
  const { data, error, isLoading } = useUser();
  console.log(data);

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <h1 className="font-bold text-3xl">{data?.name}</h1>
      <h2 className="text-xl font-bold mt-10">詳細</h2>
      <ul className="list-inside list-disc">
        <li>メール：{data?.username}</li>
        <li>アカウント名：{data?.email}</li>
        <li>住所：{data?.address.city}</li>
        <li>電話番号：{data?.phone}</li>
        <li>Webサイト:{data?.website}</li>
        <li>勤務先：{data?.company.name}</li>
      </ul>
      <h2 className="font-bold text-xl mt-10">投稿</h2>
      <PostsByUserId id={data.id} />
    </div>
  );
};
