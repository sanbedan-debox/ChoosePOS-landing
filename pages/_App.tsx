import { AppProps } from "next/app";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
// import { Geologica } from "next/font/google";

// const geologica = Geologica({
//   weight: ["300", "400", "500", "600", "700"],
//   subsets: ["latin"],
//   display: "swap",
// });

import localFont from "@next/font/local";
const geologica = localFont({ src: "../public/fonts/geologica.ttf" });
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#fc4102" />
      <main className={geologica.className}>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height,  initial-scale=1.0, user-scalable=no, user-scalable=0"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="facebook-domain-verification"
          content="bbhdjcmqzf2b3rxucg8jyw2ar25v5i"
        />
        <title>
          {
            "CHOOSE - Revolutionising how Restaurants use Data, Technology, Integrated Marketing to drive Growth"
          }
        </title>
        <meta
          name="description"
          content="Revolutionising how Restaurants use Data, Technology, Integrated Marketing to drive Growth"
        />
        <Component {...pageProps} />
      </main>

      {/* <Script
        strategy="afterInteractive"
        id="gtm-head-script"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.defer=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`,
        }}
      ></Script> */}

      {/* <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript> */}
    </>
  );
}

export default MyApp;
