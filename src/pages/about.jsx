import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import Main from "src/components/Main";
import styles from "src/styles/Home.module.css";
import { useBgColor } from "src/hooks/useBgColor";

export default function About({
  count,
  isShow,
  handleclick,
  handleDisplay,
  doubleCount,
  text,
  array,
  handleAdd,
  handleChange,
}) {
  useBgColor();

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
      <button onClick={handleAdd}>追加</button>
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
