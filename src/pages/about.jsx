import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import Main from "src/components/Main";
import styles from "src/styles/Home.module.css";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBgLightBlue } from "src/hooks/useBgLightBlue";

export default function About() {
  const { count, isShow, handleclick, handleDisplay, doubleCount } =
    useCounter();
  const { text, array, handleAdd, handleChange } = useInputArray();
  useBgLightBlue();

  return (
    <div className={styles.container}>
      <Header />
      <Head>
        <title>About Page</title>
      </Head>
      {isShow ? <h1>{doubleCount}</h1> : null}
      <button href="/about" onClick={handleclick}>
        ボタン
      </button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>123</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>

      <Main page="about" />

      <Footer />
    </div>
  );
}
