import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { useBgColor } from "src/hooks/useBgColor";
import { Posts } from "src/components/Posts";

export default function Home() {
  useBgColor();


  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Posts />
    </div>
  );
}
