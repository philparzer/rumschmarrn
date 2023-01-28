import Head from "next/head";
import { BuilderComponent, builder } from "@builder.io/react";
import Nav from "../components/static/Nav";
import Footer from "../components/static/Footer";
import Layout from "../components/static/Layout";
import { ColorTheme } from "../shared-ts/enums";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";

export default function Home({ home, toggle, setThemeLocalStorage, cookie }: any) {

  const [pageCookie, setPageCookie] = useState<any>()
  useEffect(() => setPageCookie(getCookie("schmarrntyp")), [])

  return (
    <div>
      <Head>
        <title>Rumschmarrn</title>
        <meta name="description" content="Rumschmarrn ist DER Podcast aus Österreich. Wir zeigen wieder die Alltagsgeschichten der Daigen. Rumschmarrn.com bietet ein innovatives cross-mediales Angebot, um den Pocast zu konsumieren." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content={`/og/main.png`}
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
      </Head>
      <Nav toggle={toggle} setThemeLocalStorage={setThemeLocalStorage} schmarrntyp={pageCookie !== undefined ? pageCookie : undefined}/>
      <div className="h-[20vh]"></div>
      <Layout>
        <BuilderComponent
          model="homepage"
          content={home}
          options={{ includeRefs: true }}
        />
      </Layout>
      <Footer />
      </div>
  );
}

export async function getStaticProps({ params }: any) {
  const urlPath = "/" + (params?.page?.join("/") || "");
  const home = await builder.get("homepage", { url: urlPath }).toPromise();

  return {
    props: {
      home: home || null,
    },
    revalidate: 5,
  };
}
