import Head from "next/head";
import { BuilderComponent, builder } from "@builder.io/react";
import Nav from "../components/static/Nav";
import Footer from "../components/static/Footer";
import Layout from "../components/static/Layout";
import { ColorTheme } from "../shared-ts/enums";
import { useEffect, useState } from "react";
import { useCookie } from "next-cookie"

export default function Home({ home, toggle, setThemeLocalStorage, cookie }: any) {

  const [pageCookie, setPageCookie] = useState<any>()
  useEffect(() => setPageCookie(useCookie(cookie)), [])

  return (
    <div>
      <Head>
        <title>Rumschmarrn</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav toggle={toggle} setThemeLocalStorage={setThemeLocalStorage} schmarrntyp={pageCookie !== undefined ? pageCookie.get("schmarrntyp") : undefined}/>
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
