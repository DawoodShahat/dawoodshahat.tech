import Head from "next/head";
import Hero from "components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dawood Shahat</title>
      </Head>
      <main className="container">
        <Hero />
      </main>
    </div>
  );
}
