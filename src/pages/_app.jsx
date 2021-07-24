import "src/styles/globals.css";
import Head from "next/head";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";

const MyApp = ({ Component, pageProps }) => {
  const counter = useCounter();
  const inputArray = useInputArray();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} {...counter} {...inputArray} />
    </>
  );
};

export default MyApp;
