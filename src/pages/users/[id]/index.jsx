import { Header } from "src/components/Header";
import { PostByUserId } from "src/components/Post/PostByUserId";
import { User } from "src/components/User";

const UserId = () => {
  return (
    <div>
      <Header />
      <User />
      <PostByUserId />
    </div>
  );
};

export default UserId;
