import Head from "next/head";
import { Header } from "src/components/Header";
import { Comments as CommentsComponent } from "src/components/Comments";
import { SWRConfig } from "swr";

// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getStaticProps = async () => {
  const COMMENTS_API_URL = `https://jsonplaceholder.typicode.com/comments`;
  const comment = await fetch(COMMENTS_API_URL);
  const userData = await comment.json();
  // await sleep(2000);
  return {
    props: {
      fallback: {
        [COMMENTS_API_URL]: userData,
      },
    },
  };
};

const Comments = (props) => {
  const { fallback } = props;
  return (
    <div>
      <Head>
        <title>Comments Page</title>
      </Head>
      <SWRConfig value={{ fallback }}>
        <Header />
        <CommentsComponent />
      </SWRConfig>
    </div>
  );
};

export default Comments;
