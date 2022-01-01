import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        {/* for all the meta tags */}
        <title>NextJs</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="webd, programming" />
      </Head>

      <h1>Home</h1>
    </div>
  );
}
