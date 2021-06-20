import Head from "next/head";
import styles from "src/styles/Home.module.css";
import Main from "src/components/Main";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [count, setFoo] = useState(1);
  // let count = 1;
  const handleclick = useCallback(
    () => {
      if (count < 10) {
        setFoo((count) => count + 1);
      }
    },
    [count]
  );

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      　　
      <h1>{count}</h1>
      <button href="/about" onClick={handleclick}>
        ボタン
      </button>
      <Main page="index" />
      <Footer />
    </div>
  );
}
