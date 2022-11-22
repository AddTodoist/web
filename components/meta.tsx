import Head from "next/head";
import { HOME_OG_IMAGE_URL } from "../lib/constants";

const Meta = () => {
  return (
    <Head>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />

      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content="🤖 A Twitter bot that will help you save tweets and threads to your Todoist account"
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  );
};

export default Meta;
