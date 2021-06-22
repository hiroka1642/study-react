import Head from "next/head";
import styles from "src/styles/Home.module.css";
import Main from "src/components/Main";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState([]);

  // let count = 1;
  const handleclick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [count]);

  const handleChange = useCallback((e) => {
    
    setText(e.target.value);
  }, []);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsshow) => !prevIsshow);
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("同じ要素がすでに存在します");
        return prevArray;
      }
      const newArray = [...prevArray, text];
      return newArray;
    });
  }, [text]);

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
      　　
      {isShow ? <h1>{count}</h1> : null}
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
      <Main page="index" />
      <Footer />
    </div>
  );
}
