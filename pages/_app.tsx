import { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import localFont from "next/font/local";
import { DefaultSeo } from "next-seo";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import "../styles/globals.css";

const geologica = localFont({ src: "../public/fonts/geologica.ttf" });

const seo = {
  title: "Choose POS - Best Restaurant POS in the USA",
  description:
    "A new age restaurant POS built on cutting edge technology using data and insights to drive real growth and customer engagement.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.yourwebsite.com",
    site_name: "Choose POS",
    images: [
      {
        url: "https://www.yourwebsite.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
      },
    ],
    canonical: "https://www.yourwebsite.com",
  },
  twitter: {
    handle: "@twitterhandle",
    site: "@site",
    cardType: "summary_large_image",
  },
};

if (typeof window !== "undefined") {
  // checks that we are client-side
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "", {
    api_host:
      process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
    person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
    loaded: (posthog) => {
      if (process.env.NODE_ENV === "development") posthog.debug(); // debug mode in development
    },
  });
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PostHogProvider client={posthog}>
      <NextNProgress color="#162CF1" />
      <Head>
        <link rel="shortcut icon" href="/LogoWhite.ico" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>
      <DefaultSeo {...seo} />
      <main className={geologica.className}>
        <Component {...pageProps} />
      </main>
    </PostHogProvider>
  );
}

export default MyApp;
