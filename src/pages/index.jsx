import Head from "next/head";
import styles from "src/styles/Home.module.css";
import Main from "src/components/Main";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Head>
        <title>Index Page</title>
      </Head>

      <Main page="index" />

      <Footer />
    </div>
  );
}
