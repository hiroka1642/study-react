import { Comment } from "src/components/Comment";
import { Header } from "src/components/Header";
import { PostByPostId } from "src/components/Post/PostByPostId";
import { UserByUserId } from "src/components/User/UserByUserId";

const CommentId = () => {
  return (
    <div>
      <Header />
      <Comment />
      <UserByUserId />
      <PostByPostId />
    </div>
  );
};

export default CommentId;
