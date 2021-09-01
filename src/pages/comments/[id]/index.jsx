import { Comment } from "src/components/Comment";
import { Header } from "src/components/Header";
import { PostsByPostId } from "src/components/Posts/PostsByPostId";
import { UserByUserId } from "src/components/Users/UsersByUserId";

const CommentId = () => {
  return (
    <div>
      <Header />
      <Comment />
    </div>
  );
};

export default CommentId;
