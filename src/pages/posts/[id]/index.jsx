import { CommentByPostId } from "src/components/Comment/CommentByPostId";
import { Header } from "src/components/Header";
import { Post } from "src/components/Post";

const PostsId = () => {
  return (
    <div>
      <Header />
      <Post />
      <CommentByPostId />
    </div>
  );
};

export default PostsId;
