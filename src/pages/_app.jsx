// import "src/styles/globals.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import { Layout } from "src/components/Layout/Index";
import { SWRConfig } from "swr";

const fetcher = async (...args) => {
  const res = await fetch(...args);
  const json = await res.json();
  return json;
};
const MyApp = (props) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SWRConfig value={{ fetcher }}>
        <Layout>
          <props.Component {...props.pageProps} />
        </Layout>
      </SWRConfig>
    </>
  );
};

export default MyApp;
