import { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import localFont from "@next/font/local";
import { generateMetaTags } from "@/seo";
import logo1 from "../../assets/logo/logoWhite.png";

import "../styles/globals.css";
const geologica = localFont({ src: "../public/fonts/geologica.ttf" });

function MyApp({ Component, pageProps }: AppProps) {
  const wordsArray = ["pos", "restaurants", "cafe", "dinein", "food"];
  const metaTags = generateMetaTags(wordsArray);

  return (
    <>
      <NextNProgress color="#162CF1" />
      <Head>
        <link rel="shortcut icon" href="/LogoWhite.ico" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height,  initial-scale=1.0, user-scalable=no, user-scalable=0"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <title>{"Choose POS - Best Restaurant POS in the USA"}</title>
        <meta
          name="description"
          content="A new age restaurant POS built on cutting edge technology using data and insights to drive real growth and customer engagement."
        />
      </Head>

      <main className={geologica.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
