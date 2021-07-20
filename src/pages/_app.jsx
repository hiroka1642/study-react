import "src/styles/globals.css";
import Head from "next/head";
import { useCounter } from "src/hooks/useCounter";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
