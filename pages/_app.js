import '../styles/globals.css'
import Head from "next/head";
import { title } from "../consts/config"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="Randy Kurnia Akbar" />
        <meta name="author" content="Randy" />

       
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
