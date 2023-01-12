import Homepage from "../components/Homepage";
import Head from "next/head";
export default function Home() {
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
        <meta name="google-site-verification" content="l6wK3EPc0gZ0EflD72G_UMaqk8bBCxXcVjosYgObb_A" />
      </Head>
      <Homepage />
    </>
  );
}
