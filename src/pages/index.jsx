import Head from "next/head";
import styles from "src/styles/Home.module.css";
import Main from "src/components/Main";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { useBgColor } from "src/hooks/useBgColor";
import { useCallback, useEffect, useState } from "react";

export default function Home(props) {
  const {
    count,
    isShow,
    handleclick,
    handleDisplay,
    text,
    array,
    handleAdd,
    handleChange,
  } = props;
  useBgColor();

  const [posts, setPosts] = useState([]);
  const getPosts = useCallback(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    setPosts(json);
  }, []);
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  console.log(posts);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />

      {posts.length > 0 ? (
        <ol>
          {posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ol>
      ) : null}
    </div>
  );
}
