import { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import localFont from "@next/font/local";
import { generateMetaTags } from "@/seo";

import "../styles/globals.css";
const geologica = localFont({ src: "../public/fonts/geologica.ttf" });

function MyApp({ Component, pageProps }: AppProps) {
  const wordsArray = ["pos", "restaurants", "cafe", "dinein", "food"];
  const metaTags = generateMetaTags(wordsArray);

  return (
    <>
      <NextNProgress color="#fc4102" />
      <Head>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords.join(",")} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, user-scalable=0"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="facebook-domain-verification"
          content="bbhdjcmqzf2b3rxucg8jyw2ar25v5i"
        />
      </Head>
      <main className={geologica.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
