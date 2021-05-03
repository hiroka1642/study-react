import Head from "next/head";
import styles from "src/styles/Home.module.css";
import Main from "src/components/Main";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { useEffect, useState } from "react";

export default function Home() {
  const [foo, setFoo] = useState(1);
  // let foo = 1;
  const handleclick = (e) => {
    setFoo((foo) => foo + 1);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  console.log(foo);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      　　
      <h1>{foo}</h1>
      <button href="/about" onClick={handleclick}>
        ボタン
      </button>
      <Main page="index" />
      <Footer />
    </div>
  );
}
