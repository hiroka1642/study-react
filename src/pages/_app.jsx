// import "src/styles/globals.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import { Layout } from "src/components/Layout/Index";

const MyApp = (props) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <props.Component {...props.pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
