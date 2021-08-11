import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import Main from "src/components/Main";
import styles from "src/styles/Home.module.css";
import { useBgColor } from "src/hooks/useBgColor";

export default function About(props) {
  useBgColor();

  return (
    <div className={styles.container}>
      <Header />
      <Head>
        <title>About Page</title>
      </Head>
      {props.isShow ? <h1>{props.doubleCount}</h1> : null}
      <button href="/about" onClick={props.handleclick}>
        ボタン
      </button>
      <button onClick={props.handleDisplay}>
        {props.isShow ? "非表示" : "表示"}
      </button>
      <input type="text" value={props.text} onChange={props.handleChange} />
      <button onClick={props.handleAdd}>追加</button>
      <ul>
        {props.array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>

      <Main page="about" />

      <Footer />
    </div>
  );
}
