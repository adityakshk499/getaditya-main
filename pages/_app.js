import Layout from "../layout/Layout";
import "../styles/globals.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Aditya kaushik Portfolio , A Front-end web devloper knows and competent in  React Next CSS HTML JS Tailwind css . able to make responsive design. "
        ></meta>
        <meta name="robots" content="index,follow" />
        <meta name="robots" content="all" />
        <meta name="googlebot" content="index,follow" />
        <meta name="googlebot" content="all" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
